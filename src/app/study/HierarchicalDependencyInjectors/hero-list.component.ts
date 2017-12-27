import { Component, OnInit } from '@angular/core';
import { HeroService, Hero } from './hero.service';
import { HeroTaxReturn } from './heroTaxReturn/hero-tax-return.service';

@Component({
    selector: 'app-hero-list',
    templateUrl: './hero-list.component.html',
})
export class HeroListComponent implements OnInit {

    heroes: Hero[];
    currentHeroTax: HeroTaxReturn;

    showHeroIndex: number[] = [];

    constructor(
        private heroService: HeroService
    ) { }

    async ngOnInit() {
        this.heroes = await this.heroService.getHeroes();
    }

    showHeroTaxReturn(hero: Hero) {
        this.currentHeroTax = hero.heroTaxReturn;
    }

}
