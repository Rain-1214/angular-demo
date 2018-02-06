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
  studentCountNum: number;

  _currentPageIndex = 1;
  loadStudentFlag = false;


  // =======
  ws: WebSocket;
  imgUrl: string;
  code: string;
  // ========

  set selectGrade(value: Grade) {
    this._selectGrade = value;
    this.classArray = value.classes;
    this.selectClass = null;
  }

  get selectGrade() {
    return this._selectGrade;
  }

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
    this.loadGrade();
    this.loadStudent(1);
    this.creatWs();
  }

  async loadGrade() {
    const res = await this.studentService.getGradeAndClass().toPromise();
    if (res) {
      this.gradeArray = res;
      this.studentService.gradeArray = this.gradeArray;
    }
  }

  loadStudent(page: number) {
    this.loadStudentFlag = true;
    this._selectGrade = null;
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


  // -------------------------------------------


  creatWs() {
    const ws = new WebSocket('ws://localhost:7200');
    this.ws = ws;

    ws.onopen = (event) => {
      console.log('链接成功');
    };

    ws.onmessage = (event) => {
      console.log(event.data);
      this.imgUrl = JSON.parse(event.data).imgUrl;

    };

    ws.onclose = () => {
      console.log('Ws已经关闭');
    };
  }

  closeWs() {
    this.ws.close();
  }

  send(event) {
    console.log(event);
    if (event.code === 'Enter') {
      this.ws.send(this.code);
    }
  }

}
