import { Component, OnInit } from '@angular/core';
import { Hero } from '../../heroes/shared/hero.model';
import { HeroService } from '../../heroes/shared/hero.service';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {

  hero: Hero;

  constructor(
    private heroService: HeroService,
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  async getHeroes(): Promise<void> {
    const res = await this.heroService.getHeroes();
    this.hero = res[0];
  }
}
