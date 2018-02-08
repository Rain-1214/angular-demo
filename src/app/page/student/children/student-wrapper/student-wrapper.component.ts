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
  currentGrade: string;
  currentClass: string;

  studentCopy: Student;
  gradeCopy: Grade;
  classCopy: ClassNum;

  updateFlag = false;

  selectGrade: Grade;
  selectClass: ClassNum;

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.studentCopy = Clone.deepCopy(this.student);
    this.computeGrade();
  }

  computeGrade(): void {
    this.studentService.gradeArray.forEach((e) => {
      if (e.id === this.student.gradeId) {
        this.currentGrade = e.gradeName;
        this.gradeCopy = Object.assign({}, e);
        e.classes.forEach(item => {
          if (item.id === this.student.classId) {
            this.currentClass = item.className;
            this.classCopy = Object.assign({}, item);
          }
        });
      }
    });
  }

}
