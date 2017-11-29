import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { heroes } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroesSlowly(): Promise<Hero[]> {
    console.log(1);
    return new Promise(resolve => {
      console.log(2);
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
    // return Promise.resolve(heroes);
  }
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(heroes);
  }
}
