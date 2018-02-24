import { Component, OnInit } from '@angular/core';
import { Grade } from '../../entity/grade';
import { StudentService } from '../../api/student.service';
import { NzNotificationService } from 'ng-zorro-antd';
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

  loadStudentFlag = false;

  addStudentArray: Student[] = [];
  selectedAddStudentMap = new Map<number, Student>();
  addSelectVisible = false;

  set currentPageIndex(value) {
    this._currentPageIndex = value;
    this.loadStudent(this.currentPageIndex);
  }

  get currentPageIndex() {
    return this._currentPageIndex;
  }

  constructor(
    private studentService: StudentService,
    private nzNotificationService: NzNotificationService
  ) { }

  ngOnInit() {
    this.loadStudent(1);
  }

  loadStudent(page: number): void {
    this.loadStudentFlag = true;
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
  }

  resetAddStudent(resetIndex: number): void {
    this.addStudentArray[resetIndex] = new Student();
  }

  selectAddStudnet(flagAndIndex: SelectStudentMsg): void {
    if (flagAndIndex.flag) {
      this.selectedAddStudentMap.set(flagAndIndex.index, flagAndIndex.student);
    } else {
      this.selectedAddStudentMap.delete(flagAndIndex.index);
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
    console.log(tempSelectAddStudent);
    if (emptyFlag || tempSelectAddStudent.length <= 0) {
      const errorMessage = emptyFlag ? '选择提交的学生当中有无效的填写属性' : '没有勾选任何学生';
      this.nzNotificationService.create('error', '提示', errorMessage);
      return false;
    }
    this.studentService.addStudents(tempSelectAddStudent).subscribe(res => {
      if (res) {
        this.selectedAddStudentMap.forEach((e, i, map) => {
          this.addStudentArray.slice(i, 1);
          map.delete(i);
        });
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
    this.loadStudent(this.currentPageIndex);
  }

}
