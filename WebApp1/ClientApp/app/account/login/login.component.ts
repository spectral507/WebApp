import { Component, ChangeDetectionStrategy, ElementRef, HostBinding } from '@angular/core';

import { AccountOutletResizeService } from '../shared/account-outlet-resize.service';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

    @HostBinding('class.animated-container') animated: boolean = true;

    constructor(private _host: ElementRef,
        private _accountOutletResizeService: AccountOutletResizeService) { }

    ngAfterViewInit(): void {
        this.updateOutletHeight();
    }

    private updateOutletHeight(): void {
        this._accountOutletResizeService.setHeight(this._host.nativeElement.offsetHeight);
    }
}
