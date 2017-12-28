import { Injectable } from '@angular/core';
import { HeroTaxReturn } from './heroTaxReturn/hero-tax-return.service';

export class Hero {
    id: number;
    name: string;
    heroTaxReturn: HeroTaxReturn;
}

const heroes: Hero[] = [
    {
        id: 1,
        name: 'Super Man',
        heroTaxReturn: new HeroTaxReturn(3500, 35000)
    },
    {
        id: 2,
        name: 'The Flash',
        heroTaxReturn: new HeroTaxReturn(4000, 40000)
    },
    {
        id: 3,
        name: 'Iron man',
        heroTaxReturn: new HeroTaxReturn(200000, 2000000)
    }
];

@Injectable()
export class HeroService {

    getHeroes(): Promise<Hero[]> {
        return new Promise(resolve => {
            resolve(heroes);
        });
    }

    saveHeroTaxReturn(htr: HeroTaxReturn) {
        heroes.forEach(e => {
            if (e.heroTaxReturn.id === htr.id) {
                e.heroTaxReturn = htr;
            }
        });
    }

    getHeroById(id: number): Hero {
        return heroes.find(e => e.id === id);
    }

}
