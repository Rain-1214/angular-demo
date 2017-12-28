import { Injectable } from '@angular/core';
import { Hero, HeroService } from '../hero.service';

@Injectable()
export class HeroCompileService {

    hero: Hero;

    constructor(private heroService: HeroService) {}

    getHero(id: number) {
        if (!this.hero) {
            this.hero = this.heroService.getHeroById(id);
        }
        return this.hero;
    }

}
