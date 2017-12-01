import { Component, OnInit } from '@angular/core';
import { Hero } from '../../heroes/shared/hero.model';
import { HeroService } from '../../heroes/shared/hero.service';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.scss']
})
export class LifeComponent implements OnInit {

  heroes: Hero[];
  hero: Hero;
  testString: String;

  constructor(
    private heroService: HeroService,
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(res => {
      this.heroes = res;
      this.hero = this.heroes[0];
    });
  }

  deleteHero(id: number): void {
    this.heroService.delete(id).then(res => console.log('delete complete'));
    this.getHeroes();
  }

  trackByHero(hero: Hero): number {
    return hero.id;
  }

}
