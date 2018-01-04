import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './Hero';
import { routerAnimation } from './animations';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
    animations: [ routerAnimation ]
})
export class HeroComponent implements OnInit {

    routerState =  true;
    routerStateCode = 'active';

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.routerState = !this.routerState;
                this.routerStateCode = this.routerState ? 'active' : 'inactive';
            }
        });
    }
}
