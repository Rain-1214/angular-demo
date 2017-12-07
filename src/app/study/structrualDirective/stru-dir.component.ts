import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../heroes/shared/hero.service';
import { Hero } from '../../heroes/shared/hero.model';

@Component({
  selector: 'app-stru-dir',
  templateUrl: './stru-dir.component.html',
  styleUrls: ['./stru-dir.component.scss']
})
export class StruDirComponent implements OnInit {

  heroes: Hero[];

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  async getHeroes(): Promise<void> {
    const res = await this.heroService.getHeroes();
    this.heroes = res;
  }
}
