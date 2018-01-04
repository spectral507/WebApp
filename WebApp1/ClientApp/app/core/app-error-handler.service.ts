import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { NotAuthorizedError } from '../shared/not-authorized.error';
import { AppError } from '../shared/app-error.error';
import { LoginService } from './login.service';
import { AccessDeniedError } from '../shared/access-denied.error';

@Injectable()
export class AppErrorHandlerService implements ErrorHandler {

    constructor(private _injector: Injector) {
        console.log(this._injector);
    }

    handleError(error: any): void {
        //TODO: remove
        console.log('=> AppErrorHandlerService START:');
        console.log(error);
        if (error instanceof Error && error['rejection']) {
            if (error['rejection'] instanceof NotAuthorizedError) {
                console.log('=> AppErrorHandlerService NotAuthorizedError');
                let router = this._injector.get(Router);
                let loginService = this._injector.get(LoginService);
                let route = error['rejection'].message || router.url;
                loginService.login(route);
            }
            else if (error['rejection'] instanceof AccessDeniedError) {
                console.log('=> AppErrorHandlerService AccessDeniedError');
                let router = this._injector.get(Router);
                router.navigateByUrl('access-denied');
            }
        }
    }
}