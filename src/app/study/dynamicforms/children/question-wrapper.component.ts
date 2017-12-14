import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../shared/question-base';
import { QuestionControlService } from '../shared/question-control.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question-wrapper',
  templateUrl: './question-wrapper.component.html',
  providers: [ QuestionControlService ]
})
export class QuestionWrapperComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(
    private qsc: QuestionControlService
  ) {}

  ngOnInit(): void {
    this.form = this.qsc.toFromGroup(this.questions);
  }

  onSubmit(): void {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
