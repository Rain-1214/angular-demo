import { Component, Input } from '@angular/core';
import { Hero } from '../../../heroes/shared/hero.model';

@Component({
  selector: 'app-communication-hero',
  templateUrl: './communication-hero.component.html',
  styleUrls: ['./communication-hero.component.scss']
})
export class CmtHeroComponent {

  @Input() hero: Hero;
  @Input() hellowString: String;

}
