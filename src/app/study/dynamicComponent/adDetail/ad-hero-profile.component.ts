import { Component, Input } from '@angular/core';
import { AdComponent } from './ad.component';

@Component({
  selector: 'app-hero-profile',
  template: `
    <div
      class="hero-profile"
      *ngIf = "data">
      <h3>Featured Hero Profile</h3>
      <h4>{{ data.name }}</h4>
      <p>{{ data.bio }}</p>
      <strong>Hire this hero today!</strong>
    </div>
  `
})
export class AdHeroProfileComponent implements AdComponent {
  @Input() data: any;
}
