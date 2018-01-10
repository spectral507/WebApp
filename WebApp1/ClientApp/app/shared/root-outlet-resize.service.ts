import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RootOutletResizeService implements OnDestroy {

    get height(): Observable<number> {
        return this._height.asObservable();
    }

    private _height: Subject<number>;

    constructor() {
        this._height = new BehaviorSubject<number>(0);
    }

    setHeight(value: number): void {
        this._height.next(value);
    }

    ngOnDestroy(): void {
        this._height.unsubscribe();
    }
}
