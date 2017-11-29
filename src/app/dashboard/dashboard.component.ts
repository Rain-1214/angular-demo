import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/shared/hero.model';
import { HeroService } from '../heroes/shared/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroes().then((res) => this.heroes = res.slice(1, 5));
  }

}
