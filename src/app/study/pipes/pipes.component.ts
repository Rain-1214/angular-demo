import { Component, OnInit } from '@angular/core';
import { People } from '../../entity/people.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipeComponent implements OnInit {

  tom: People = new People();

  message$: Observable<string>;

  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];

  constructor() { }

  ngOnInit() {
    this.initData();
    this.resend();
  }

  initData(): void {
    this.tom.name = 'tom';
    this.tom.age = 21;
    this.tom.birthday = new Date(1995, 2, 14);
  }

  resend() {
    this.message$ = Observable.interval(1000)
      .map(i => this.messages[i])
      .take(this.messages.length);
  }

}
