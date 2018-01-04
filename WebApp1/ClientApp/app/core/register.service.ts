import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RegisterService implements OnDestroy {

    private _registerEvents: Subject<string>;

    get registerEvents(): Observable<string> {
        return this._registerEvents.asObservable();
    }

    constructor() {
        this._registerEvents = new Subject<string>();
    }

    register(returnUrl?: string) {
        this._registerEvents.next(returnUrl);
    }

    ngOnDestroy(): void {
        this._registerEvents.unsubscribe();
    }
}
