import { Component, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';


@Component({
  selector: 'app-property-event',
  templateUrl: './property-event.component.html',
  styleUrls: ['./property-event.component.scss'],
})
export class PropertyEventComponent {

  childMessage = 'childMessage';
  @Output() somethingRequest = new EventEmitter();

  send(): void {
    this.somethingRequest.emit(this.childMessage);
  }
}
