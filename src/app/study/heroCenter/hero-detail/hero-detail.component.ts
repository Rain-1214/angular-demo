import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';

import { Observable } from '../../../../../node_modules/_rxjs@5.5.5@rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/Observable/of';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) => {
      return this.heroService.getHeroById(+params.get('id'));
    })
    .subscribe((hero: Hero) => this.hero = hero);
  }


  back(): void {

    this.router.navigate(['/heroCenter/heroList', { id: this.hero.id }]);

  }

}
