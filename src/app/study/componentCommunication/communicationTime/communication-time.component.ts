import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MissionService } from '../shard/mission.service';

@Component({
  selector: 'app-communication-time',
  templateUrl: './communication-time.component.html',
  styleUrls: ['./communication-time.component.scss'],
})
export class CmtTimeComponent implements OnInit, OnDestroy {

  seconds = 11;
  message: String;
  timeIntervalId = -1;

  constructor(
    private missionService: MissionService,
  ) {
    missionService.missionAnnounced$.subscribe((mission) => {
      console.log(mission);
    });
  }

  ngOnDestroy(): void {
    this.stop();
  }
  ngOnInit(): void {
    this.start();
  }

  clearInt(): void {
    clearInterval(this.timeIntervalId);
  }

  stop(): void {
    this.clearInt();
    this.message = `stop at ${this.seconds}s`;
  }

  start(): void {
    if (this.seconds <= 0) {
      this.seconds = 11;
    }
    this.countDown();
  }

  private countDown() {
    this.clearInt();
    this.timeIntervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds <= 0) {
        this.message = 'already at zero';
        this.clearInt();
      } else {
        this.message = `now is ${this.seconds}s`;
      }
    }, 1000);
  }

  sendAce() {
    console.log(1);
    this.missionService.confirmMission('ace');
  }

}
