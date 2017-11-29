import { Component, OnInit } from '@angular/core';

import { Hero } from './heroes/shared/hero.model';
import { HeroService } from './heroes/shared/hero.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HeroService],
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectHero: Hero;

  constructor(private heroService: HeroService) {}

  onSelect(valueHero: Hero): void {
    this.selectHero = valueHero;
  }

  ngOnInit(): void {
    this.heroService.getHeroesSlowly().then((res) => {
      console.log(3);
      this.heroes = res;
    });
  }

}
