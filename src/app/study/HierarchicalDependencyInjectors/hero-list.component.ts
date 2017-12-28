import { Component, OnInit } from '@angular/core';
import { HeroService, Hero } from './hero.service';
import { HeroTaxReturn } from './heroTaxReturn/hero-tax-return.service';

@Component({
    selector: 'app-hero-list',
    templateUrl: './hero-list.component.html',
})
export class HeroListComponent implements OnInit {

    name = 'parent';

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

    showHeroEvent(index: number): void {
        if (!this.showHeroIndex.includes(index)) {
            this.showHeroIndex.push(index);
        }
    }

    closeHeroCompile(index: number): void {
        const i = this.showHeroIndex.findIndex((e) => e === index);
        this.showHeroIndex.splice(i, 1);
    }

}
