import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Student } from '../../../../entity/student';
import { StudentService } from '../../../../api/student.service';
import { Grade } from '../../../../entity/grade';
import { ClassNum } from '../../../../entity/class';
import { Clone } from '../../../../tool/clone';

@Component({
  selector: 'app-student-wrapper',
  templateUrl: './student-wrapper.component.html',
  styleUrls: ['./student-wrapper.component.scss']
})
export class StudentWrapperComponent implements OnInit {

  @Input() student: Student;
  currentGrade: Grade;
  currentClass: ClassNum;

  studentCopy: Student;
  gradeCopy: Grade;
  classCopy: ClassNum;

  updateFlag = false;
  updateConfirmVisible = true;

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.studentCopy = Clone.deepCopy(this.student);
    this.computeGrade();
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
    
  }

}
