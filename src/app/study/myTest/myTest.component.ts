import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-test',
  templateUrl: './myTest.component.html',
  styleUrls: ['./myTest.component.scss']
})
export class MyTestComponent implements OnInit {

  testRouterParams = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit() {
  }

  mvpEvent(value: string) {
    alert(value);
  }

}
