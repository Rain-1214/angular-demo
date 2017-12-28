import { Component, OnInit, Input, Output } from '@angular/core';
import { Hero } from '../hero.service';
import { EventEmitter } from '@angular/core';
import { HeroCompileService } from './hero-compile.service';

@Component({
    selector: 'app-hero-compile',
    templateUrl: './hero-compile.component.html',
    styleUrls: [ './hero-compile.component.scss' ],
    providers: [ HeroCompileService ]
})
export class HeroCompileComponent implements OnInit {

    hero: Hero;

    @Input() heroId: number;
    @Output() closeEvent = new EventEmitter<void>();

    constructor(
        private heroCompileService: HeroCompileService,
    ) { }

    ngOnInit() {
        this.hero = this.heroCompileService.getHero(this.heroId);
    }

    close(): void {
        this.closeEvent.emit();
    }
}
