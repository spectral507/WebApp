import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const loginUrl = '/api/account/login';
const logoutUrl = '/api/account/logout';

@Injectable()
export class AccountService {

    constructor(private _httpClient: HttpClient) { }

    login(userNameOrEmail: string, password: string): Observable<void | {}> {

        return this._httpClient
            .post<void>(loginUrl, { userNameOrEmail: userNameOrEmail, password: password })
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
        this._httpClient.post<void>(logoutUrl, null).subscribe(() => { });
    }
}
