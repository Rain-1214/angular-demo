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

  gradeArray: Grade[];
  classArray: ClassNum[];

  _selectGrade: Grade;
  selectClass: ClassNum;

  currentPath: string;

  students: Student[];
  _studentCountNum: number;

  loadStudentFlag = false;

  set selectGrade(value: Grade) {
    this._selectGrade = value;
    this.classArray = value.classes;
    this.selectClass = null;
  }

  get selectGrade() {
    return this._selectGrade;
  }

  set studentCountNum(value) {
    this._studentCountNum = value;
  }

  get studentCountNum() {
    return this._studentCountNum;
  }

  constructor(
    private studentService: StudentService,
    private nzNotificationService: NzNotificationService
  ) { }

  ngOnInit() {
    this.loadGrade();
    this.loadStudent(1);
  }

  async loadGrade() {
    const res = await this.studentService.getGradeAndClass().toPromise();
    if (res.stateCode === 1) {
      this.gradeArray = res.data;
      this.studentService.gradeArray = this.gradeArray;
    } else {
      this.nzNotificationService.create('error', '有一个错误', res.message);
    }
  }

  loadStudent(page: number) {
    this.loadStudentFlag = true;
    this._selectGrade = null;
    this.selectClass = null;
    this.currentPath = null;
    this.studentService.getStudent(page).subscribe(res => {
      if (res.stateCode === 1) {
        this.students = res.data.students;
        this.studentCountNum = res.data.countNum;
      } else {
        this.nzNotificationService.create('error', '有一个错误', res.message);
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
      if (res.stateCode === 1) {
        this.students = res.data;
      } else {
        this.nzNotificationService.create('error', '有一个错误', res.message);
      }
      this.loadStudentFlag = false;
    });
  }

}
