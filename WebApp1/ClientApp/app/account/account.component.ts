import {
    Component, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, OnChanges, HostBinding, ViewChild
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AccountOutletResizeService } from './shared/account-outlet-resize.service';
import { RootOutletResizeService } from '../shared/root-outlet-resize.service';

import { accountRoutingTrigger } from '../animations/account-routing.trigger';

@Component({
    selector: 'app-account',
    templateUrl: 'account.component.html',
    styleUrls: ['account.component.css'],
    animations: [accountRoutingTrigger],
    providers: [AccountOutletResizeService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountComponent {

    @HostBinding('class.animated-container') animated: boolean = true;
    @ViewChild('outletContainer') outletContainer: ElementRef;

    private _shouldUpdateOutletHeight: boolean = false;

    constructor(private _host: ElementRef,
        private _rootOutletResizeService: RootOutletResizeService,
        private _accountOutletResizeService: AccountOutletResizeService,
        private _cd: ChangeDetectorRef) { }

    ngAfterViewInit(): void {
        this._accountOutletResizeService.height.subscribe(value => {
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

    getState(outlet: RouterOutlet): string {
        return outlet.activatedRouteData.state;
    }

    private updateOutletHeight(): void {
        this._rootOutletResizeService.setHeight(this._host.nativeElement.offsetHeight);
    }
}