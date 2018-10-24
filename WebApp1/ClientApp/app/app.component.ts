import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { NavigationStart, Router, RouterOutlet, Route, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { getRoutingTrigger } from './animations/routing.animation';
import { HeightReturnComponent } from './shared/components/height-return/height-return.component';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    animations: [getRoutingTrigger()]
})
export class AppComponent implements AfterViewInit, OnDestroy {

    @ViewChild('outletContainer') outletContainer: ElementRef;

    private _routerEventsSubscription: Subscription = null;
    private _activatedComponent: HeightReturnComponent = null;
    private _routingAnimationsToPerformCount: number = 1;
    private _viewInitComplete: boolean = false;

    constructor(private _router: Router) { }

    ngAfterViewInit(): void {
        this._viewInitComplete = true;
    }

    ngOnDestroy(): void {
        if (this._routerEventsSubscription) {
            this._routerEventsSubscription.unsubscribe();
        }
    }

    getState(outlet: RouterOutlet): string {
        return outlet.activatedRouteData.state;
    }

    onActivate(component: HeightReturnComponent): void {
        let height: number | Observable<number>;
        if (this._activatedComponent) {
            height = this._activatedComponent.getHeight();
            if (typeof height === 'number') {
                this.outletContainer.nativeElement.style.height = `${height}px`;
            }
        }
        else {
            this.outletContainer.nativeElement.style.height = '0px';
        }

        this._routingAnimationsToPerformCount++;
        this._activatedComponent = component;

        if (this._viewInitComplete) {
            height = this._activatedComponent.getHeight();
            if (typeof height === 'number') {
                this.outletContainer.nativeElement.style.height = `${height}px`;
            }
            else {
                height.subscribe((value: number) => {
                    if (this._activatedComponent == component) {
                        this.outletContainer.nativeElement.style.height = `${value}px`;
                    }
                });
            }
        }
    }

    onRoutingAnimationEnd(): void {
        this._routingAnimationsToPerformCount--;
        if (this._routingAnimationsToPerformCount == 0) {
            this.outletContainer.nativeElement.style.height = 'auto';
        }
    }
}