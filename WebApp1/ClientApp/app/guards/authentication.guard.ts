import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../core/authentication.service';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(private _authService: AuthenticationService,
        private _router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        let authState: boolean | Observable<boolean> = this._authService.getAuthState();
        if (authState instanceof Observable) {
            return authState.do((isAuthenticated) => {
                if (!isAuthenticated)
                    this._router.navigate(['/login'], { queryParams: { return: state.url } });
            });
        }
        else {
            return authState;
        }
    }
}
