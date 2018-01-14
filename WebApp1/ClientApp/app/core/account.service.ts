import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { AppError } from '../shared/errors/app.error';
import { BadRequestError } from '../shared/errors/bad-request.error';
import { UnauthorizedError } from '../shared/errors/unauthorized.error';
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

    login(userNameOrEmail: string, password: string): Observable<User> {

        return this._httpClient
            .post<User>(this._loginUrl, { userNameOrEmail: userNameOrEmail, password: password })
            .catch((errorResponse: HttpErrorResponse) => {
                if (errorResponse.status == 400) {
                    return Observable.throw(new BadRequestError(errorResponse.error));
                }
                else if (errorResponse.status == 401) {
                    return Observable.throw(new UnauthorizedError());
                }
                else {
                    return Observable.throw(new AppError('Произошла неизвестная ошибка'));
                }
            });
    }

    logout(): void {
        this._httpClient.post<void>(this._logoutUrl, null).subscribe(() => { });
    }

    getAuthenticationState(): Observable<User> {
        return this._httpClient
            .post<User>(this._stateUrl, null)
            .catch((errorResponse: HttpErrorResponse) => {
                return Observable.throw(new AppError('Произошла неизвестная ошибка'));
            });
    }
}
