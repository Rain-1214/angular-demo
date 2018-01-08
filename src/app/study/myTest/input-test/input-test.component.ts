import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-test',
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.scss']
})
export class InputTestComponent implements OnInit {

  @Input() inputMessage: String;
  @Output() outputEvent = new EventEmitter<string>();

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  emit() {
    this.outputEvent.emit('mvp');
  }

  goToHeroCenter() {
    this.router.navigate(['/heroCenter']);
  }

}
