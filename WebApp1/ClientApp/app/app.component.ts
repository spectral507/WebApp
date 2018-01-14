import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { RootOutletResizeService } from './shared/root-outlet-resize.service';

import { rootRoutingTrigger } from './animations/root-routing.trigger';
//***************************************************************************************
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    animations: [rootRoutingTrigger],
    providers: [RootOutletResizeService]
})
export class AppComponent implements AfterViewInit, OnDestroy {

    @ViewChild('outletContainer') outletContainer: ElementRef;

    private _subscription: Subscription;
    //***********************************************************************************
    constructor(private _rootOutletResizeService: RootOutletResizeService) { }

    ngAfterViewInit(): void {

        this._subscription = this._rootOutletResizeService.height.subscribe(value => {
            this.outletContainer.nativeElement.style.height = value ? `${value}px` : 'auto';
        });
    }

    ngOnDestroy(): void {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }

    getState(outlet: RouterOutlet) {
        return outlet.activatedRouteData.state;
    }
}