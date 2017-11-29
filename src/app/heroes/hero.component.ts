import { Component, OnInit } from '@angular/core';
import { Hero } from './shared/hero.model';
import { HeroService } from './shared/hero.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  selectHeor: Hero;
  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {}

  getHeroes(): void {
    this.heroService.getHeroes().then((res) => this.heroes = res);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectHeor = hero;
  }

  goDetail(): void {
    this.router.navigate(['/detail', this.selectHeor.id]);
  }

  add(heroName: string): void {
    heroName = heroName.trim();
    if (!heroName) { return; }
    this.heroService.create(heroName)
        .then(hero => {
          this.heroes.push(hero);
          this.selectHeor = null;
        });
  }

  delete(hero: Hero): void {
    this.heroService.delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectHeor === hero) { this.selectHeor = null; }
        });
  }
}
