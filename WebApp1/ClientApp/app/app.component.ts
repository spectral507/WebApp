import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { RootOutletResizeService } from './shared/root-outlet-resize.service';

import { rootRoutingTrigger } from './animations/root-routing.trigger';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    animations: [rootRoutingTrigger],
    providers: [RootOutletResizeService]
})
export class AppComponent {

    @ViewChild('outletContainer') outletContainer: ElementRef;

    constructor(private _rootOutletResizeService: RootOutletResizeService) { }

    ngAfterViewInit(): void {

        this._rootOutletResizeService.height.subscribe(value => {
            this.outletContainer.nativeElement.style.height = value ? `${value}px` : 'auto';
        });
    }

    getState(outlet: RouterOutlet) {
        return outlet.activatedRouteData.state;
    }
}