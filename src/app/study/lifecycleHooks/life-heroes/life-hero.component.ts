import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Hero } from '../../../heroes/shared/hero.model';

@Component({
  selector: 'app-life-hero',
  templateUrl: './life-hero.component.html',
  styleUrls: ['./life-hero.component.scss']
})
export class LifeHeroComponent implements OnChanges {
  @Input() hero: Hero;
  @Input() lifeHeroStingTest: String;

  @Output() deleteRequest = new EventEmitter();

  delete(): void {
    this.deleteRequest.emit(this.hero.id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
