import { Injectable } from '@angular/core';
import { HeroService } from '../hero.service';

let nextId = 100;

export class HeroTaxReturn {
    constructor(
        public tax: number,
        public money: number,
        public id = ++nextId
    ) {}

    clone() {
        return new HeroTaxReturn(this.tax, this.money, this.id);
    }

}

@Injectable()
export class HeroTaxReturnService {

    constructor(
        // private heroService: HeroService
    ) {}

    currentTax: HeroTaxReturn;
    oldTax: HeroTaxReturn;

    set taxReturn(value: HeroTaxReturn) {
        this.oldTax = value;
        this.currentTax = this.oldTax.clone();
    }

    get taxReturn() {
        return this.currentTax;
    }

    saveTax(value) {
        // this.heroService.saveHeroTaxReturn(value);
    }

    refresh() {
        this.currentTax = this.oldTax;
    }

}


