import { Component, OnInit } from '@angular/core';
import { QuestionService } from './shared/question.service';
import { QuestionBase } from './shared/question-base';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.scss'],
  providers: [ QuestionService ]
})
export class DynamicFormsComponent implements OnInit {

  questions: QuestionBase<any>[];

  constructor(
    private qs: QuestionService
  ) { }

  ngOnInit() {
    this.questions = this.qs.getQuestions();
  }
}
