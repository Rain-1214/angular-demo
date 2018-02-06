import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-select',
  templateUrl: './grade-select.component.html',
  styleUrls: ['./grade-select.component.scss']
})
export class GradeSelectComponent implements OnInit {

  @Input() inputSize: string;

  constructor() { }

  ngOnInit() {
  }

}
