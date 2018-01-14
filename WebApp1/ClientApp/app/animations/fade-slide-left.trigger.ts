import { animate, AnimationTriggerMetadata, group, query, state, style, transition, trigger } from '@angular/animations';

export function getFadeSlideLeftTrigger(translateXValue: string,
    duration: string, timingFunction: string): AnimationTriggerMetadata {

    return trigger('fadeSlideLeft', [
        transition(':enter', [
            style({ opacity: 0, transform: `translateX(${translateXValue})` }),
            animate(`${duration} ${timingFunction}`,
                style({ opacity: 1, transform: `translateX(0%)` }))
        ]),
        transition(':leave', [
            style({ opacity: 1, transform: 'translateX(0%)' }),
            animate(`${duration} ${timingFunction}`,
                style({ opacity: 0, transform: `translateX(-${translateXValue})` }))
        ])
    ]);
};