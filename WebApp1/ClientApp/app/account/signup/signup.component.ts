import {
    Component, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, HostBinding
} from '@angular/core';

import { AccountOutletResizeService } from '../shared/account-outlet-resize.service';

@Component({
    selector: 'app-signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent {

    @HostBinding('class.animated-container') animated: boolean = true;

    constructor(private _host: ElementRef,
        private _accountOutletResizeService: AccountOutletResizeService,
        private _changeDetectorRef: ChangeDetectorRef) { }

    ngAfterViewInit(): void {
        this.updateOutletHeight();
    }

    private updateOutletHeight(): void {
        this._accountOutletResizeService.setHeight(this._host.nativeElement.offsetHeight);
    }
}
