import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../core/authentication.service';
import { LoginService } from '../core/login.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(private _authService: AuthenticationService,
        private _loginService: LoginService) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        //TODO: remove
        console.log('=> AUTHENTICATION GUARD');
        console.log(state);

        if (this._authService.user.isAuthenticated) return true;
        this._loginService.login(state.url);
        return false;
    }
}