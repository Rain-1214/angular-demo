import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Hero } from '../../heroes/shared/hero.model';
import { HeroService } from '../../heroes/shared/hero.service';
import { forBiddenNameValidator } from '../../directive/forbidden.directive';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {

  hero: Hero = new Hero();
  heroForm2: FormGroup;

  constructor(
    private heroService: HeroService,
  ) { }

  ngOnInit() {
    // this.getHeroes();
    this.hero.id = 1;
    this.hero.name = 'zero';
    this.hero.state = 'active';
    this.heroForm2 = new FormGroup({
      'name': new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(2),
        forBiddenNameValidator(/bob/i)
      ])
    });
  }

  get name() {
    return this.heroForm2.get('name');
  }

  async getHeroes(): Promise<void> {
    const res = await this.heroService.getHeroes();
    this.hero = res[0];
  }
}
