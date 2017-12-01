import { Component, OnInit, Input } from '@angular/core';
import { EventEmitter } from 'events';
import { PropertyEventComponent } from './children/property-event.component';
import { Hero } from '../../heroes/shared/hero.model';
import { HeroService } from '../../heroes/shared/hero.service';


@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss'],
})
export class PropertyComponent implements OnInit {
  className: Boolean = true;
  size: Number = 10;
  sizes: Number[] = [1, 2, 2, 3, 3, 3, 4, 5, 6];
  heroes: Hero[];
  @Input() raidoSelect: string;

  constructor(
    private heroService: HeroService
  ) {}

  request(event): void {
    console.log(event);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(res => this.heroes = res);
  }

  addHero(): void {
    const lastId = this.heroes[this.heroes.length - 1].id;
    this.heroService.create(`tom${lastId}`)
                    .then(res => {
                      console.log(res);
                      this.getHeroes();
                    });
  }

  trackByHero(index: number, hero: Hero): number {
    return hero.id;
  }

}
