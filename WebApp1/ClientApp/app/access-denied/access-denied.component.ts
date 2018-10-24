import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { HeightReturnComponent } from '../shared/components/height-return/height-return.component';

@Component({
    selector: 'app-access-denied',
    templateUrl: 'access-denied.component.html',
    styleUrls: ['access-denied.component.css']
})
export class AccessDeniedComponent extends HeightReturnComponent {

    constructor(private _router: Router, host: ElementRef) {
        super(host);
        setTimeout(() => this._router.navigateByUrl('/'), 3000);
    }
}
