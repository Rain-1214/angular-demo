import { Component, OnInit } from '@angular/core';
import { Hero } from '../../heroes/shared/hero.model';
import { HeroService } from '../../heroes/shared/hero.service';
import { MissionService } from './shard/mission.service';


@Component({
  selector: 'app-communication',
  templateUrl: './comCommunication.component.html',
  styleUrls: ['./comCommunication.component.scss'],
  providers: [MissionService]
})
export class ComCmucaComponent implements OnInit {

  hero: Hero;
  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private missionService: MissionService
  ) {
    console.log(missionService);
    missionService.missionConfirmed$.subscribe((misssion) => {
      console.log(misssion);
    });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  async getHeroes(): Promise<void> {
    const res = await this.heroService.getHeroes();
    this.heroes = res;
    this.hero = this.heroes[0];
  }

  sendMvp(): void {
    console.log('2');
    this.missionService.announceMission('mvp');
  }

}
