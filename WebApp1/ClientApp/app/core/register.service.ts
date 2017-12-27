import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RegisterService implements OnDestroy {

    private _registerEvents: Subject<void>;

    get registerEvents(): Observable<void> {
        return this._registerEvents.asObservable();
    }

    constructor() {
        this._registerEvents = new Subject<void>();
    }

    register() {
        this._registerEvents.next();
    }

    ngOnDestroy(): void {
        this._registerEvents.unsubscribe();
    }
}
