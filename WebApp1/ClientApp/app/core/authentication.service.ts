import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';

import { AccountService } from './account.service';

import { User } from '../shared/models/user.model';

@Injectable()
export class AuthenticationService {

    get user(): User {
        return this._user;
    }

    private _user: User;

    constructor(private _accountService: AccountService,
        private _router: Router) {
        this._user = { isAuthenticated: false, details: null };
        this.updateState();
    }

    login(userNameOrEmail: string, password: string): Observable<User> {
        this.reset();
        return this._accountService
            .login(userNameOrEmail, password)
            .do((user: User) => {
                this._user = user;
            });
    }

    logout(): void {
        this.reset();
        this._accountService.logout();
        this._router.navigateByUrl('/');
    }

    updateState(): void {
        this.reset();
        this._accountService
            .getAuthenticationState()
            .subscribe((user: User) => {
                this._user = user;
            });
    }

    reset(): void {
        this._user.isAuthenticated = false;
        this._user.details = null;
    }
}
