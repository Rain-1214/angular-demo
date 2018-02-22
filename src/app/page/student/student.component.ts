import { Component, OnInit } from '@angular/core';
import { Grade } from '../../entity/grade';
import { StudentService } from '../../api/student.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { ClassNum } from '../../entity/class';
import { Student } from '../../entity/student';
import { Observable } from 'rxjs/Observable';
import { AjaxReturn } from '../../entity/AjaxReturn';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  classArray: ClassNum[];

  selectGrade: Grade;
  selectClass: ClassNum;

  currentPath: string;

  students: Student[];
  studentCountNum: number;

  _currentPageIndex = 1;
  pageSize = 6;

  loadStudentFlag = false;

  addStudentArray: Student[] = [];

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

  loadStudent(page: number) {
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

  setCurrentPath() {
    this.currentPath = `${this.selectGrade.gradeName}/${this.selectClass.className}`;
  }

  findStudnet() {
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

  addEmptyStudent() {
    this.addStudentArray.push(new Student());
  }

}
