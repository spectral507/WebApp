import { Component, ElementRef, ViewChild } from '@angular/core';

import { returnTrigger } from '../../animations/return.trigger';

@Component({
    selector: 'app-index',
    templateUrl: 'index.component.html',
    styleUrls: ['index.component.css'],
    animations: [returnTrigger]
})
export class IndexComponent {

    @ViewChild('div1') div1: ElementRef;

    x: number = 0;

    returnState: any = 'initial';
    animated: any = '';
    pointerPrevX: number = 0;

    onPanStart(e: any): void {
        this.pointerPrevX = e.center.x;
        this.returnState = '';
        this.animated = null;
    }

    onPan(e: any): void {
        e.preventDefault();

        let deltaX = e.center.x - this.pointerPrevX;
        this.pointerPrevX = e.center.x;


        if (this.x == 100 && deltaX >= 0) {
            return;
        }

        if (this.x == -100 && deltaX <= 0) {
            return;
        }

        let newx = this.x + deltaX;

        if (newx >= 100) {
            if (!this.animated) this.animated = 'transform 200ms ease-out';
            this.x = 100;
            this.div1.nativeElement.style.transform = `translateX(${this.x}px)`;
            return;
        }
        else if (newx <= -100) {
            if (!this.animated) this.animated = 'transform 200ms ease-out';
            this.x = -100;
            this.div1.nativeElement.style.transform = `translateX(${this.x}px)`;
            return;
        }
        else {
            if (this.animated) this.animated = null;
            this.x = newx;
            this.div1.nativeElement.style.transform = `translateX(${this.x}px)`;
        }

    }

    onPanEnd() {
        this.animated = 'transform 200ms ease-out';
        if (this.x >= 90) {
            this.x = 90;
            this.div1.nativeElement.style.transform = `translateX(${this.x}px)`;
        }
        else if (this.x <= -90) {
            this.x = -90;
            this.div1.nativeElement.style.transform = `translateX(${this.x}px)`;
        }
        else {
            this.x = 0;
            this.div1.nativeElement.style.transform = `translateX(${this.x}px)`;
        }
        //this.x = 0;
        //this.pointerPrevX = 0;
    }
}
