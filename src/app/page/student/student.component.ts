import { Component, OnInit } from '@angular/core';
import { Grade } from '../../entity/grade';
import { StudentService } from '../../api/student.service';
import { NzNotificationService, NzModalService } from 'ng-zorro-antd';
import { ClassNum } from '../../entity/class';
import { Student } from '../../entity/student';
import { Observable } from 'rxjs/Observable';
import { AjaxReturn } from '../../entity/AjaxReturn';
import { ToolBase } from '../../tool/ToolBase';
import { Clone } from '../../tool/clone';
import { SelectStudentMsg } from './children/student-wrapper/student-wrapper.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  selectGrade: Grade;
  selectClass: ClassNum;

  currentPath: string;

  students: Student[];
  studentCountNum: number;

  private _currentPageIndex = 1;
  pageSize = 6;

  loadStudentFlag = true;

  addStudentArray: Student[] = [];
  selectedAddStudentMap = new Map<number, Student>();
  addSelectVisible = false;

  selectedDelStudent: number[] = [];
  delSelectVisible = false;

  set currentPageIndex(value) {
    this._currentPageIndex = value;
    this.loadStudent(this.currentPageIndex);
  }

  get currentPageIndex() {
    return this._currentPageIndex;
  }

  constructor(
    private studentService: StudentService,
    private nzNotificationService: NzNotificationService,
    private confirmService: NzModalService,
  ) { }

  ngOnInit() {
    this.loadStudent(1);
  }

  loadStudent(page: number): void {
    this.selectGrade = null;
    this.selectClass = null;
    this.currentPath = null;
    this.studentService.getStudent(page).subscribe(res => {
      if (res) {
        this.students = res.students;
        this.studentCountNum = res.countNum;
      }
      this.loadStudentFlag = false;
    });
  }

  setCurrentPath(): void {
    this.currentPath = `${this.selectGrade.gradeName}/${this.selectClass.className}`;
  }

  findStudnet(): void | boolean {
    if (!this.selectGrade || !this.selectClass) {
      this.nzNotificationService.create('warning', '警告', '选好年级和班级才可以查询');
      return false;
    }
    this.loadStudentFlag = true;
    this.setCurrentPath();
    const gradeId = this.selectGrade.id;
    const classId = this.selectClass.id;
    this.studentService.getStudentByGidCid(gradeId, classId).subscribe(res => {
      if (res) {
        this.students = res;
      }
      this.loadStudentFlag = false;
    });
  }

  addEmptyStudent(): void {
    if (this.currentPath) {
      this.addStudentArray.push(new Student(null, null, null, null, this.selectClass.id, this.selectGrade.id));
    } else {
      this.addStudentArray.push(new Student());
    }
  }

  deleteAddStudent(deleteIndex: number): void {
    this.addStudentArray.splice(deleteIndex, 1);
    if (this.addStudentArray.length <= 0) {
      this.addSelectVisible = false;
    }
  }

  resetAddStudent(resetIndex: number): void {
    this.addStudentArray[resetIndex] = new Student();
  }

  selectAddStudnet(selStuMsg: SelectStudentMsg): void {
    if (selStuMsg.flag) {
      this.selectedAddStudentMap.set(selStuMsg.index, selStuMsg.student);
    } else {
      this.selectedAddStudentMap.delete(selStuMsg.index);
    }
  }

  addStudent(): void | boolean {
    // const tempSelectAddStudent = [ ...this.selectedAddStudentMap.values() ];
    const tempSelectAddStudent = [];
    let emptyFlag = false;
    this.selectedAddStudentMap.forEach((e) => {
      if (!ToolBase.checkEmptyProperty(e, ['name', 'sex', 'studentNumber', 'gradeId', 'classId'])) {
        emptyFlag = true;
      }
      tempSelectAddStudent.push(e);
    });
    if (emptyFlag || tempSelectAddStudent.length <= 0) {
      const errorMessage = emptyFlag ? '选择提交的学生当中有无效的填写属性' : '没有勾选任何学生';
      this.nzNotificationService.create('error', '提示', errorMessage);
      return false;
    }
    this.studentService.addStudents(tempSelectAddStudent).subscribe(res => {
      if (res) {
        const tempKeys = [];
        this.selectedAddStudentMap.forEach((e, i) => {
          tempKeys.push(i);
        });
        tempKeys.sort((a, b) => b - a).forEach((e) => {
          this.addStudentArray.splice(e, 1);
        });
        this.selectedAddStudentMap.clear();
        this.nzNotificationService.create('success', '提示', '添加成功');
        this.refreshStudent();
      }
    });
  }

  showAddStudentSelect(): void {
    this.addSelectVisible = true;
  }

  hideAddStudentSelect(): void {
    this.addSelectVisible = false;
  }

  refreshStudent(): void {
    if (this.currentPath) {
      this.findStudnet();
    } else {
      this.loadStudent(this.currentPageIndex);
    }
  }

  showSelectDelStu(): void {
    this.delSelectVisible = true;
  }

  hideSelectDelStu(): void {
    this.delSelectVisible = false;
  }

  selectdelStudnet(selStuMsg: SelectStudentMsg): void {
    if (selStuMsg.flag) {
      this.selectedDelStudent.push(selStuMsg.student.id);
    } else {
      this.selectedDelStudent.filter((e) => {
        return e !== selStuMsg.student.id;
      });
    }
  }

  deleteStudent(): boolean {
    if (this.selectedDelStudent.length <= 0) {
      this.nzNotificationService.create('warning', '警告', '没有勾选任何学生');
      return false;
    }

    this.confirmService.confirm({
      title: '确认删除',
      content: `确认删除勾选的所有同学么?`,
      onOk: () => {
        this.studentService.deleteStudent(this.selectedDelStudent).subscribe(res => {
          if (res) {
            this.nzNotificationService.create('success', '成功', '已成功删除选中同学');
            this.refreshStudent();
          }
        });
      }
    });
  }

}
