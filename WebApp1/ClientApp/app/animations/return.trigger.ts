import { animate, state, style, transition, trigger } from '@angular/animations';

//TODO: переместить в к IndexComponent?
export const returnTrigger = trigger('return', [
    state('initial', style({ transform: 'translateX(0px)' })),
    state('my', style({ transform: 'translateX({{l1}})' }), { params: { l1: '0px' } }),
    transition('* => initial', animate('2s ease-out')),
    transition('* => my', animate('2s ease-out'))
]);