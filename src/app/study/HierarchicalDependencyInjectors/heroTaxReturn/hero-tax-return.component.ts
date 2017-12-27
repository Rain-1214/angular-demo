import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeroTaxReturnService, HeroTaxReturn } from './hero-tax-return.service';

@Component({
    selector: 'app-hero-tax-return',
    templateUrl: './hero-tax-return.component.html',
    providers: [ HeroTaxReturnService ]
})
export class HeroTaxReturnComponent implements OnInit {

    @Output() closeEmitter = new EventEmitter<void>();

    @Input()
    set tax(value: HeroTaxReturn) {
        this.heroTaxReturnService.taxReturn = value;
    }

    get tax() {
        return this.heroTaxReturnService.taxReturn;
    }

    constructor(
        private heroTaxReturnService: HeroTaxReturnService
    ) { }

    ngOnInit() { }

    save() {
        this.heroTaxReturnService.saveTax(this.tax);
    }

    cancle() {
        this.heroTaxReturnService.refresh();
    }

    close() {
        this.closeEmitter.emit();
    }

}
