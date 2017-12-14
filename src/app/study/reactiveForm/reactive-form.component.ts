import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { states, Address, heroes, ReactiveHero, saveAddress, saveHero } from './share/data-model';

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

  get secretLairs(): FormArray {
    return this.heroForm.get('secretLairs') as FormArray;
  }

  ngOnInit() {
    this.creatForm();
    this.hero = this.heroes[0];
    this.setHeroFormValue();
    this.setAddressed(this.hero.addresses);
  }

  creatForm() {
    this.heroForm = this.fb.group({
      name: [ '', Validators.required ],
      address: this.fb.group(new Address()),
      secretLairs: this.fb.array([]),
      power: '',
      sidekick: ''
    });
  }

  setHeroFormValue() {
    this.heroForm.patchValue({
      name: this.hero.name,
      address: this.hero.addresses[0] || new Address(),
    });
    this.setAddressed(this.hero.addresses);
  }

  selectHero(hero: ReactiveHero): void {
    this.heroForm.patchValue({
      name: hero.name,
      address: hero.addresses[0] || new Address(),
    });
    this.setAddressed(hero.addresses);
  }

  setAddressed(addresses: Address[]): void {
    const addressesFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressesFGs);
    this.heroForm.setControl('secretLairs', addressFormArray);
  }

  addLairs(): void {
    this.secretLairs.push(this.fb.group(new Address()));
  }

  removeLairs(addressIndex: number): void {
    this.secretLairs.removeAt(addressIndex);
    // this.secretLairs.splice(addressIndex, 1);
  }

  saveHero(): void {
    const formModel = this.heroForm.value;

    const addresses = formModel.secretLairs.map((e: Address) => {
      return Object.assign({}, e);
    });

    let lastId = this.heroes[this.heroes.length - 1].id;

    const newHero = new ReactiveHero(++lastId, formModel.name, addresses);

    saveHero(newHero);

    console.log(this.heroes);
  }

  reset(): void {
    this.heroForm.reset();
  }

}
