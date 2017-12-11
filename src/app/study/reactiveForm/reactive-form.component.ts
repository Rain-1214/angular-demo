import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { states, Address, heroes, ReactiveHero } from './share/data-model';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  heroForm: FormGroup;
  hero: ReactiveHero;
  states = states;
  heroes = heroes;
  // heroForm = new FormGroup({
  //   'name': new FormControl()
  // });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.creatForm();
    this.hero = this.heroes[0];
    this.setHeroFormValue();
  }

  creatForm() {
    this.heroForm = this.fb.group({
      name: [ '', Validators.required ],
      address: this.fb.group(new Address()),
      power: '',
      sidekick: ''
    });
  }

  setHeroFormValue() {
    this.heroForm.patchValue({
      name: this.hero.name,
      address: this.hero.addresses[0] || new Address()
    });
  }
}
