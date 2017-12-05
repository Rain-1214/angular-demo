import { Component, OnInit } from '@angular/core';
import { AdHeroJobComponent } from './adDetail/ad-hero-job.component';
import { AdHeroProfileComponent } from './adDetail/ad-hero-profile.component';

@Component({
  selector: 'app-ad',
  template: `
    <div id="ad">
      <p>ad banner wrapper</p>
      <app-ad-banner
        [ads] = "components">
      </app-ad-banner>
    </div>
  `
})
export class AdComponent {
  components = [
    {
      component: AdHeroJobComponent,
      data: {
        headline: 'a job',
        body: 'a good job'
      }
    },
    {
      component: AdHeroProfileComponent,
      data: {
        name: 'super man',
        bio: 'man'
      }
    }
  ];
}
