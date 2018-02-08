import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { StudentService } from '../../../../api/student.service';
import { Grade } from '../../../../entity/grade';
import { ClassNum } from '../../../../entity/class';

@Component({
  selector: 'app-grade-select',
  templateUrl: './grade-select.component.html',
  styleUrls: ['./grade-select.component.scss']
})
export class GradeSelectComponent implements OnInit {

  @Input() selectGrade: Grade;
  @Input() selectClass: Grade;
  @Output() selectGradeChange = new EventEmitter<Grade>();
  @Output() selectClassChange = new EventEmitter<ClassNum>();

  classArray: ClassNum[];

  set _selectGrade(value: Grade) {
    this.selectGrade = value;
    this.selectGradeChange.emit(value);
    this._selectClass = null;
    this.classArray = value.classes;
  }

  get _selectGrade() {
    return this.selectGrade;
  }

  set _selectClass(value: ClassNum) {
    this.selectClass = value;
    this.selectClassChange.emit(value);
  }

  get _selectClass() {
    return this.selectClass;
  }

  constructor(
    private studentService: StudentService,
  ) { }

  ngOnInit() {
    if (this._selectGrade) {
      this._selectGrade = this.selectGrade;
    }
    if (this._selectClass) {
      this._selectClass = this.selectClass;
    }
  }
}
