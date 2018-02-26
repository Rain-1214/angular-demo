import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Student } from '../../../../entity/student';
import { StudentService } from '../../../../api/student.service';
import { Grade } from '../../../../entity/grade';
import { ClassNum } from '../../../../entity/class';
import { Clone } from '../../../../tool/clone';
import { Equal } from '../../../../tool/Equal';
import { NzNotificationService, NzModalService } from 'ng-zorro-antd';
import { ToolBase } from '../../../../tool/ToolBase';

export interface SelectStudentMsg {
  flag: boolean;
  index: number;
  student: Student;
}

@Component({
  selector: 'app-student-wrapper',
  templateUrl: './student-wrapper.component.html',
  styleUrls: ['./student-wrapper.component.scss']
})
export class StudentWrapperComponent implements OnInit {

  @Input() mode: string;
  @Input() studentIndex: number;
  @Input() showSelect = false;
  @Input() checkedFlag = false;

  @Output() deleteAddStuEvent = new EventEmitter<number>();
  @Output() deleteStuEvent = new EventEmitter<boolean>();
  @Output() resetEvent = new EventEmitter<number>();
  @Output() selectEvent = new EventEmitter<SelectStudentMsg>();
  @Output() addStudentEvent = new EventEmitter<boolean>();

  _student: Student;
  @Output() studentChange = new EventEmitter<Student>();
  @Input()
  set student(value: Student) {
    this._student = value;
    this.studentChange.emit(value);
  }

  get student() {
    return this._student;
  }

  currentGrade: Grade;
  currentClass: ClassNum;

  studentCopy: Student;
  gradeCopy: Grade;
  classCopy: ClassNum;

  updateFlag = false;
  updateConfirmVisible = false;

  constructor(
    private studentService: StudentService,
    private nzNotificationService: NzNotificationService,
    private confirmService: NzModalService,
  ) { }

  ngOnInit() {
    if (this.mode === 'add') {
      this.studentCopy = this.student;
      this.updateFlag = true;
    } else {
      this.studentCopy = Clone.deepCopy(this.student);
    }
    if (this.studentCopy.gradeId !== undefined && this.studentCopy.classId !== undefined) {
      this.computeGrade();
    }
  }

  delete(): void {
    this.confirmService.confirm({
      title: '确认删除',
      content: `您确认删除${this.currentGrade.gradeName}${this.currentClass.className}的${this.student.name}同学么?`,
      showConfirmLoading: true,
      onOk: () => {
        this.studentService.deleteStudent([this.student.id]).subscribe(res => {
          if (res) {
            this.nzNotificationService.create('success', '提示', '删除成功');
            this.deleteStuEvent.emit(true);
          }
        });
      }
    });
  }

  computeGrade(): void {
    const { gradeId, classId } = this.student;
    const gradeAndClass = this.studentService.getGradeAndClassByGidCid(gradeId, classId);
    this.currentGrade = gradeAndClass.get('grade');
    this.currentClass = gradeAndClass.get('class');
    this.gradeCopy = Clone.deepCopy(gradeAndClass.get('grade'));
    this.classCopy = Clone.deepCopy(gradeAndClass.get('class'));
  }

  gradeChange(gradeandClass: { grade: Grade, class: ClassNum }) {
    if (gradeandClass.grade && this.studentCopy.gradeId !== gradeandClass.grade.id) {
      this.studentCopy.gradeId = gradeandClass.grade.id;
    }
    if (gradeandClass.class && this.studentCopy.classId !== gradeandClass.class.id) {
      this.studentCopy.classId = gradeandClass.class.id;
    }
  }

  cancleUpdate(): void {
    this.updateFlag = false;
    this.gradeCopy = Clone.deepCopy(this.currentGrade);
    this.classCopy = Clone.deepCopy(this.currentClass);
    this.studentCopy = Clone.deepCopy(this.student);
  }

  update(): void {
    const tempStudent = { ...this.student, grade: this.currentGrade, classNum: this.currentClass };
    const tempStudentCopy = { ...this.studentCopy,  grade: this.gradeCopy, classNum: this.classCopy };
    if (Equal.deepEqual(tempStudent, tempStudentCopy)) {
      this.nzNotificationService.create('warning', '提示', '属性没有任何变化');
      this.updateConfirmVisible = false;
    } else {
      const { id, name, studentNumber, sex } = this.studentCopy;
      const updateStudent = new Student(id, name, +studentNumber, sex, this.classCopy.id, this.gradeCopy.id);
      this.studentService.updateStudent(updateStudent).subscribe(res => {
        if (res) {
          this.updateFlag = false;
          this.updateConfirmVisible = false;
          this.student = Clone.deepCopy(this.studentCopy);
        }
      });
    }
  }

  deleteAddStudent() {
    this.deleteAddStuEvent.emit(this.studentIndex);
  }

  resetAddStudent() {
    this.resetEvent.emit(this.studentIndex);
  }

  addStudent() {
    if (!ToolBase.checkEmptyProperty(this.studentCopy, ['name', 'studentNumber', 'sex'])
        || this.gradeCopy === undefined || this.classCopy === undefined) {
      this.nzNotificationService.create('error', '提示', '添加的学生当中含有无效信息');
      return false;
    }
    this.studentCopy.gradeId = this.gradeCopy.id;
    this.studentCopy.classId = this.classCopy.id;
    this.studentService.addStudents([this.studentCopy]).subscribe(res => {
      if (res) {
        this.nzNotificationService.create('success', '提示', '添加成功');
        this.deleteAddStudent();
        this.addStudentEvent.emit(true);
      }
    });
  }

  checkedChange(checkedFlag: boolean) {
    this.studentCopy.gradeId = this.gradeCopy ? this.gradeCopy.id : undefined;
    this.studentCopy.classId = this.classCopy ? this.classCopy.id : undefined;
    this.selectEvent.emit({ flag: checkedFlag, index: this.studentIndex, student: this.studentCopy });
  }

}
