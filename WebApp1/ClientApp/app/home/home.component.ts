import { Component, ChangeDetectionStrategy, ElementRef, HostBinding } from '@angular/core';

import { RootOutletResizeService } from '../shared/root-outlet-resize.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

    @HostBinding('class.animated-container') animated: boolean = true;

    constructor(private _host: ElementRef,
        private _rootOutletResizeService: RootOutletResizeService) { }

    ngAfterViewInit(): void {
        this.checkHeight();
    }

    private checkHeight(): void {
        this._rootOutletResizeService.setHeight(this._host.nativeElement.offsetHeight);
    }
}
