import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService implements OnDestroy {

    private _loginEvents: Subject<string>;

    get loginEvents(): Observable<string> {
        return this._loginEvents.asObservable();
    }

    constructor() {
        this._loginEvents = new Subject<string>();
    }

    login(returnUrl?: string): void {
        this._loginEvents.next(returnUrl);
    }

    ngOnDestroy(): void {
        this._loginEvents.unsubscribe();
    }
}
