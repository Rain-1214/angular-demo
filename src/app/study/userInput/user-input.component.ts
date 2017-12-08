import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent implements OnInit {
  valuse: string;

  heroes: string[];

  constructor() { }

  ngOnInit() {

  }

  boxInput(value: string): void {
    this.valuse = value;
  }
}
