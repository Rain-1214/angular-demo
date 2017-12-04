import { Component, OnInit, AfterViewInit, AfterViewChecked, ViewChild } from '@angular/core';
import { Hero } from '../../heroes/shared/hero.model';
import { HeroService } from '../../heroes/shared/hero.service';
import { LifeHeroComponent } from './life-heroes/life-hero.component';
import { LoggerService } from '../../tool/logger/logger.Service';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.scss']
})
export class LifeComponent implements OnInit, AfterViewInit, AfterViewChecked {

  heroes: Hero[];
  hero: Hero;
  testString: String;
  heroAfterView: Hero;
  heroAfterView2: Hero;

  @ViewChild(LifeHeroComponent)
  viewChild: LifeHeroComponent;

  constructor(
    private heroService: HeroService,
    private logger: LoggerService,
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  ngAfterViewChecked(): void {
    this.logger.log('afterChecked');
    console.log(this.viewChild.hero);
  }
  ngAfterViewInit(): void {
    this.logger.log('afterInit');
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

  showChildren(): void {
    this.heroAfterView = this.heroes[1];
    this.heroAfterView2 = this.heroes[2];
  }

}
