import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { AccountService } from './account.service';
import { User } from '../shared/models/user.model';
import { TodoRepositoryService } from './todo-repository.service';

@Injectable()
export class AuthenticationService {

    get user(): User {
        return this._user;
    }

    private _user: User;
    private _userAuthStateLoaded: boolean = false;

    constructor(private _accountService: AccountService,
        private _todoRepo: TodoRepositoryService,
        private _router: Router) {
        this._user = { isAuthenticated: false, details: null };
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
        this._todoRepo.clearTodos();
        this._router.navigateByUrl('/');
    }

    getAuthState(): boolean | Observable<boolean> {
        if (this._userAuthStateLoaded) {
            return this._user.isAuthenticated;
        }
        return this._accountService
            .getAuthenticationState()
            .map((user: User) => {
                this._user = user;
                this._userAuthStateLoaded = true;
                if (user.isAuthenticated) {
                    return true;
                }
                else {
                    return false;
                }
            });
    }

    reset(): void {
        this._userAuthStateLoaded = false;
        this._user.isAuthenticated = false;
        this._user.details = null;
    }
}
