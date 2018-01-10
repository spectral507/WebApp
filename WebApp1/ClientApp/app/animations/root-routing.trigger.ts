import { animate, animateChild, group, query, state, style, transition, trigger } from '@angular/animations';

export const rootRoutingTrigger = trigger('rootRouting', [
    transition('home => account', [
        query(':leave', [
            style({ transform: 'translateX(0%)' })
        ], { optional: true }),
        query(':enter', [
            style({ transform: 'translateX(-100%)' })
        ], { optional: true }),
        group([
            query(':leave', [
                animate('500ms ease-out',
                    style({ transform: 'translateX(100%)' })
                )
            ], { optional: true }),
            query(':enter', [
                animate('500ms ease-out',
                    style({ transform: 'translateX(0%)' }))
            ], { optional: true })
        ])
    ]),
    transition('account => home', [
        query(':leave', [
            style({ transform: 'translateX(0%)' })
        ], { optional: true }),
        query(':enter', [
            style({ transform: 'translateX(100%)' })
        ], { optional: true }),
        group([
            query(':leave', [
                animate('500ms ease-out',
                    style({ transform: 'translateX(-100%)' })
                )
            ], { optional: true }),
            query(':enter', [
                animate('500ms ease-out',
                    style({ transform: 'translateX(0%)' }))
            ], { optional: true })
        ])
    ])
]);