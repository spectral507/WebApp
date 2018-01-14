import { animate, group, query, state, style, transition, trigger } from '@angular/animations';

export const accountRoutingTrigger = trigger('accountRouting', [
    transition('* <=> *', [
        query(':leave', [
            style({ opacity: 1 })
        ], { optional: true }),
        query(':enter', [
            style({ opacity: 0 })
        ], { optional: true }),
        query(':leave', [
            animate('200ms ease-out',
                style({ opacity: 0 })),
            style({ opacity: 0 })
        ], { optional: true }),
        query(':enter', [
            animate('200ms ease-out',
                style({ opacity: 1 }))
        ], { optional: true })
    ])
]);