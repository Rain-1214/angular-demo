import { Component } from '@angular/core';
import { EventEmitter } from 'events';
import { PropertyEventComponent } from './children/property-event.component';


@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss'],
})
export class PropertyComponent {
  className: Boolean = true;

  request(event): void {
    console.log(event);
  }

}
