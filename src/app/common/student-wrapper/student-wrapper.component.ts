import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../entity/student';
import { StudentService } from '../../api/student.service';

@Component({
  selector: 'app-student-wrapper',
  templateUrl: './student-wrapper.component.html',
  styleUrls: ['./student-wrapper.component.scss']
})
export class StudentWrapperComponent implements OnInit {

  @Input() student: Student;

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit() {
  }

  computeGrade(): string {
    let gradeName, className;
    this.studentService.gradeArray.forEach((e) => {
      if (e.id === this.student.gradeId) {
        gradeName = e.gradeName;
        e.classes.forEach(item => {
          if (item.id === this.student.classId) {
            className = item.className;
          }
        });
      }
    });
    return `${gradeName}/${className}`;
  }

}
