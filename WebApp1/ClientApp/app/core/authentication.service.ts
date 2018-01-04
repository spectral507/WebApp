import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AccountService } from './account.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { User } from '../shared/models/user.model';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {

    get user(): User {
        return this._user;
    }

    private _user: User;

    constructor(private _accountService: AccountService, private _router: Router) {
        this._user = { isAuthenticated: false, details: null };
        this.updateState();
    }

    login(userNameOrEmail: string, password: string): Observable<void | {}> {

        this.reset();

        return this._accountService
            .login(userNameOrEmail, password)
            .do(
            (user: User) => {
                this._user = user;
                // TODO: remove
                console.log('=> Authentication Service: logged in', this._user);
            },
            (error) => {
                // TODO: remove
                console.log('=> Authentication Service: error');
            });
    }

    logout(): void {
        this.reset();
        this._accountService.logout();
        this._router.navigateByUrl('');
    }

    updateState(): void {

        this.reset();

        this._accountService
            .getAuthenticationState()
            .subscribe(
            (user: User) => {
                this._user = user;
            },
            (error) => {
                // TODO: remove
                console.log('=> Authentication Service: error');
            });
    }

    //TODO: change
    private reset() {
        this._user.isAuthenticated = false;
        this._user.details = null;
    }
}
