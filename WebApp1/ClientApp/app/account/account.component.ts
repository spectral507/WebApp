import {
    AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, ElementRef,
    OnChanges, OnDestroy, HostBinding, ViewChild
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AccountOutletResizeService } from './shared/account-outlet-resize.service';
import { RootOutletResizeService } from '../shared/root-outlet-resize.service';
import { Subscription } from 'rxjs/Subscription';

import { accountRoutingTrigger } from '../animations/account-routing.trigger';
//***************************************************************************************
@Component({
    selector: 'app-account',
    templateUrl: 'account.component.html',
    styleUrls: ['account.component.css'],
    animations: [accountRoutingTrigger],
    providers: [AccountOutletResizeService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountComponent implements AfterViewChecked, AfterViewInit, OnDestroy {

    @HostBinding('class.animated-container') animated: boolean = true;
    @ViewChild('outletContainer') outletContainer: ElementRef;

    private _shouldUpdateOutletHeight: boolean = false;

    private _subscription: Subscription;
    //***********************************************************************************
    constructor(private _host: ElementRef,
        private _rootOutletResizeService: RootOutletResizeService,
        private _accountOutletResizeService: AccountOutletResizeService) { }

    ngAfterViewInit(): void {
        this._subscription = this._accountOutletResizeService.height.subscribe(value => {
            this.outletContainer.nativeElement.style.height = value ? `${value}px` : 'auto';
            this._shouldUpdateOutletHeight = true;
        });
    }

    ngAfterViewChecked(): void {
        if (this._shouldUpdateOutletHeight) {
            this.updateOutletHeight();
            this._shouldUpdateOutletHeight = false;
        }
    }

    ngOnDestroy(): void {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }

    getState(outlet: RouterOutlet): string {
        return outlet.activatedRouteData.state;
    }

    private updateOutletHeight(): void {
        this._rootOutletResizeService.setHeight(this._host.nativeElement.offsetHeight);
    }
}