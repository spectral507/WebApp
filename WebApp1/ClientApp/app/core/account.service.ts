import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { User } from '../shared/models/user.model';

@Injectable()
export class AccountService {

    private readonly _loginUrl;
    private readonly _logoutUrl;
    private readonly _stateUrl;

    constructor(private _httpClient: HttpClient) {
        this._loginUrl = '/api/account/login';
        this._logoutUrl = '/api/account/logout';
        this._stateUrl = '/api/account/state';
    }

    login(userNameOrEmail: string, password: string): Observable<User | {}> {

        return this._httpClient
            .post<User>(this._loginUrl, { userNameOrEmail: userNameOrEmail, password: password })
            .catch((errorResponse: HttpErrorResponse) => {
                if (errorResponse.status == 400) {
                    throw errorResponse.error;
                }
                else if (errorResponse.status == 401) {
                    throw { '': ['Invalid login or/and password.'] };
                }
                else {
                    throw { '': ['Unknown error.'] };
                }
            });
    }

    logout(): void {
        this._httpClient.post<void>(this._logoutUrl, null).subscribe(() => { });
    }

    getAuthenticationState(): Observable<User | {}> {

        return this._httpClient
            .post<User>(this._stateUrl, null)
            .catch((errorResponse: HttpErrorResponse) => {
                throw { '': ['Unknown error.'] };
            });
    }
}
