import { Component, Input } from '@angular/core';
import { AdComponent } from './ad.component';

@Component({
  selector: 'app-hero-job',
  template: `
    <div
      class="job-ad"
      *ngIf = "data">
      <h4>{{ data.headline }}</h4>
      {{ data.body }}
    </div>
  `
})
export class AdHeroJobComponent implements AdComponent {
  @Input() data: any;
}
