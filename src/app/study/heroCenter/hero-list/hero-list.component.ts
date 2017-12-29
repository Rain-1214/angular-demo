import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../Hero';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[];
  selectHeroId: number;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.heroService.getHeroes().subscribe((heroes: Hero[]) => {
      this.heroes = heroes;
    });

    const selectHeroId = this.route.snapshot.paramMap.get('id');
    if (selectHeroId !== '') {
      this.selectHeroId = +selectHeroId;
    }
  }

}
