import { Injectable, ErrorHandler, Injector } from '@angular/core';

@Injectable()
export class AppErrorHandlerService implements ErrorHandler {

    constructor(private _injector: Injector) {
        console.log(this._injector);
    }

    handleError(error: any): void {

    }
}