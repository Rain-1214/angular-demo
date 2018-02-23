import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Student } from '../../../../entity/student';
import { StudentService } from '../../../../api/student.service';
import { Grade } from '../../../../entity/grade';
import { ClassNum } from '../../../../entity/class';
import { Clone } from '../../../../tool/clone';
import { Equal } from '../../../../tool/Equal';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-student-wrapper',
  templateUrl: './student-wrapper.component.html',
  styleUrls: ['./student-wrapper.component.scss']
})
export class StudentWrapperComponent implements OnInit {

  @Input() mode: string;
  @Input() studentIndex: number;
  @Input() student: Student;

  currentGrade: Grade;
  currentClass: ClassNum;

  studentCopy: Student;
  gradeCopy: Grade;
  classCopy: ClassNum;

  updateFlag = false;
  updateConfirmVisible = false;

  @Input() showSelect = false;
  @Input() checkedFlag = false;

  @Output() deleteEvent = new EventEmitter<number>();
  @Output() resetEvent = new EventEmitter<number>();
  @Output() selectEvent = new EventEmitter<{ flag: boolean, index: number }>();

  constructor(
    private studentService: StudentService,
    private nzNotificationService: NzNotificationService
  ) { }

  ngOnInit() {
    this.studentCopy = Clone.deepCopy(this.student);
    if (this.mode === 'add') {
      this.updateFlag = true;
    } else {
      this.computeGrade();
    }
  }

  computeGrade(): void {
    const { gradeId, classId } = this.student;
    const gradeAndClass = this.studentService.getGradeAndClassByGidCid(gradeId, classId);
    this.currentGrade = gradeAndClass.get('grade');
    this.currentClass = gradeAndClass.get('class');
    this.gradeCopy = Clone.deepCopy(gradeAndClass.get('grade'));
    this.classCopy = Clone.deepCopy(gradeAndClass.get('class'));
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
        console.log(res);
        if (res) {
          this.updateFlag = false;
          this.updateConfirmVisible = false;
          this.student = Clone.deepCopy(this.studentCopy);
        }
      });
    }
  }

  deleteAddStudent() {
    this.deleteEvent.emit(this.studentIndex);
  }

  resetAddStudent() {
    this.resetEvent.emit(this.studentIndex);
  }

  addStudent() {
    this.studentCopy.gradeId = this.gradeCopy.id;
    this.studentCopy.classId = this.classCopy.id;
    this.studentService.addStudents([this.studentCopy]).subscribe(res => {
      if (res) {
        this.nzNotificationService.create('success', '提示', '添加成功');
        this.deleteAddStudent();
      }
    });
  }

  checkedChange(checkedFlag: boolean) {
    this.selectEvent.emit({ flag: checkedFlag, index: this.studentIndex });
  }

}
