import { state, query, transition, animate, trigger, style, group } from '@angular/animations';
import { AnimationEntryMetadata } from '@angular/core';


export const routerAnimation: AnimationEntryMetadata = trigger('routerAnimation', [
    state('*', style({
        opacity: 1,
        transform: 'translateX(0)',
    })),
    transition('* => *', [
        query(':leave', style({ transform: 'translateY(0)', position: 'absolute' , opacity: 1}), { optional: true }),
        query(':enter', style({ transform: 'translateX(100%)', position: 'absolute', opacity: 0}), { optional: true }),
        group([
            query(':leave', animate('.5s ease-in-out', style({transform: 'translateY(100%)', opacity: 0})), { optional: true }),
            query(':enter', animate('.5s ease-in-out', style({transform: 'translateX(0)', opacity: 1})), { optional: true })
        ])
    ])
]);

