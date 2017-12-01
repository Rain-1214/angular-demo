import { Component, EventEmitter, Input } from '@angular/core';
import { Output } from '@angular/core';


@Component({
  selector: 'app-property-event',
  templateUrl: './property-event.component.html',
  styleUrls: ['./property-event.component.scss'],
})
export class PropertyEventComponent {

  childMessage = 'childMessage';
  @Output()
  somethingRequest = new EventEmitter();

  @Input()
  size: number;

  @Output()
  sizeChange = new EventEmitter();

  send(): void {
    this.somethingRequest.emit(this.childMessage);
  }

  sizeChangeEvent(changeNumber: number) {
    this.size = Math.min(40, Math.max(8, this.size + changeNumber));
    this.sizeChange.emit(this.size);
  }
}
