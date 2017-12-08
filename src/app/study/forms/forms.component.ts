import { Component, OnInit } from '@angular/core';
import { FormHero } from './shared/formHero.model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormComponent implements OnInit {

  heroes: FormHero[] = [];

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model: FormHero = new FormHero(null, '', '', '');

  constructor() { }

  ngOnInit() { }

  reset() {
    this.model = new FormHero(null, '', '');
  }

  addHero() {
    let lastId = this.heroes.length === 0 ? 1 : this.heroes[this.heroes.length - 1].id;
    const { name, power, alterEgo } = this.model;
    const newHero = new FormHero(++lastId, name, power, alterEgo);
    this.heroes.push(newHero);
  }
}
