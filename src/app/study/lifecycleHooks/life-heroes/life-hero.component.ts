import { Component, Input, Output, EventEmitter, OnChanges,
  SimpleChanges, DoCheck, OnInit, AfterContentInit, AfterContentChecked } from '@angular/core';
import { Hero } from '../../../heroes/shared/hero.model';

@Component({
  selector: 'app-life-hero',
  templateUrl: './life-hero.component.html',
  styleUrls: ['./life-hero.component.scss']
})
export class LifeHeroComponent implements OnChanges, DoCheck, OnInit, AfterContentInit, AfterContentChecked {

  @Input() hero: Hero;
  @Input() lifeHeroStingTest: String;

  @Output() deleteRequest = new EventEmitter();

  ngOnInit(): void {
    console.log('init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
  }

  ngDoCheck(): void {
    // console.log(this.hero.name);
  }

  ngAfterContentInit(): void {
    console.log('contentInit');
  }

  ngAfterContentChecked(): void {
    console.log('contentChecked');
  }

  delete(): void {
    this.deleteRequest.emit(this.hero.id);
  }

}
