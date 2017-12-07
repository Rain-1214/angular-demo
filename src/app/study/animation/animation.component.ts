import { Component, OnInit, trigger, style, state, transition, animate } from '@angular/core';
// import { trigger, state, style, transition, animate } from '@angular/animations';
import { HeroService } from '../../heroes/shared/hero.service';
import { Hero } from '../../heroes/shared/hero.model';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#039be5',
        transform: 'scale(1.1)'
      })),
      transition('inactive <=> active', animate('100ms ease-in')),
      transition('void => inactive', [
        style({transform: 'translateX(-100%) scale(1)'}),
        animate(400)
      ]),
      transition('inactive => void', [
        animate(400, style({transform: 'translateX(100%) scale(1)'}))
      ]),
      transition('void => active', [
        style({transform: 'translateX(0) scale(1)'}),
        animate(400)
      ]),
      transition('active => void', [
        animate(400, style({transform: 'translateX(0) scale(0.01)'}))
      ])
      // transition('inactive <=> active', [
      //   style({
      //     backgroundColor: 'red',
      //     transform: 'scale(1.3)'
      //   }),
      //   animate('800ms ease-in', style({
      //     backgroundColor: 'green',
      //     transform: 'scale(1)'
      //   }))
      // ]),
    ]),
    trigger('flyInOut', [
      // state('in', style({ transform: 'translateX(0)' })),
      // transition(':enter', [
      transition('void => *', [
        style({
          transform: 'translateX(-100%)',
        }),
        animate('400ms ease-in')
      ]),
      transition('* => void', [
        animate('400ms ease-out', style({transform: 'translateX(100%)'}))
      ])
    ])
  ],
})
export class AnimationComponent implements OnInit {

  heroes: Hero[];

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  async getHeroes(): Promise<void> {
    const res = await this.heroService.getHeroes();
    this.heroes = res;
  }

  togglerState(hero: Hero) {
    hero.state = hero.state === 'active' ? 'inactive' : 'active';
  }

  trackById(index: number, hero: Hero) {
    return hero.id;
  }


  delete(heroIndex: number): void {
    this.heroes.splice(heroIndex, 1);
  }

  regetHeroes() {
    this.getHeroes();
  }
}
