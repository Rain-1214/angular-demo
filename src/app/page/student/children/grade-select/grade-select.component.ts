import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { StudentService } from '../../../../api/student.service';
import { Grade } from '../../../../entity/grade';
import { ClassNum } from '../../../../entity/class';
import { Clone } from '../../../../tool/clone';

@Component({
  selector: 'app-grade-select',
  templateUrl: './grade-select.component.html',
  styleUrls: ['./grade-select.component.scss']
})
export class GradeSelectComponent implements OnInit {

  @Input() gutterSize: number;

  _selectGrade: Grade;
  _selectClass: ClassNum;

  @Output() selectGradeChange = new EventEmitter<Grade>();
  @Output() selectClassChange = new EventEmitter<ClassNum>();

  classArray: ClassNum[];

  @Input()
  set selectGrade(value: Grade) {
    this._selectGrade = value;
    this.selectGradeChange.emit(value);
    if (value) {
      this._selectClass = null;
      this.classArray = value.classes;
    }
  }

  get selectGrade() {
    return this._selectGrade;
  }

  @Input()
  set selectClass(value: ClassNum) {
    this._selectClass = value;
    this.selectClassChange.emit(value);
  }

  get selectClass() {
    return this._selectClass;
  }

  constructor(
    private studentService: StudentService,
  ) { }

  ngOnInit() {
    this.setDefaultValue();
  }

  setDefaultValue() {
    if (this.selectGrade && this.selectClass) {
      const tempClass = this.selectClass;
      const gradeAndClass = this.studentService.getGradeAndClassByGidCid(this.selectGrade.id, this.selectClass.id);
      this.selectGrade = gradeAndClass.get('grade');
      this.selectClass = gradeAndClass.get('class');
    }
  }
}
