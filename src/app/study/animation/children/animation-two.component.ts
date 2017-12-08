import { Component, OnInit, Input, trigger, state, style,
  transition, animate, EventEmitter, Output, keyframes, group } from '@angular/core';
import { Hero } from '../../../heroes/shared/hero.model';

@Component({
  selector: 'app-animation-two',
  templateUrl: './animation-two.component.html',
  styleUrls: ['./animation-two.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ opacity: '1', transform: 'translateX(0)'})),
      transition('* => void', [
        animate('200ms 100ms ease-out', style({
          opacity: '0',
          transform: 'translateX(100%)'
        }))
      ]),
      transition('void => *', [
        style({
          opacity: '0',
          transform: 'translateX(-100%)'
        }),
        animate('200ms 100ms ease-in')
      ])
    ]),
    trigger('flyKeyframes', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('* => void', [
        animate(300, keyframes([
          style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
          style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
          style({ opacity: 0, transform: 'translateX(100%)', offset: 1 }),
        ]))
      ]),
      transition('void => *', [
        animate(300, keyframes([
          style({ opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3}),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1}),
        ]))
      ])
    ]),
    trigger('flyGroup', [
      state('in', style({width: 120, transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
        group([
          animate('300ms 100ms ease-in', style({
            width: 120,
            transform: 'translateX(0)'
          })),
          animate('300ms ease-in', style({
            opacity: 1
          }))
        ])
      ]),
      transition('* => void', [
        group([
          animate('300ms 100ms ease-out', style({
            width: 10,
            transform: 'translateX(50px)'
          })),
          animate('300ms ease-out', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class AnimationTwoComponent implements OnInit {

  @Input() heroes: Hero[];

  @Output() deleteEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  delete(index: number): void {
    this.deleteEvent.emit(index);
  }
}
