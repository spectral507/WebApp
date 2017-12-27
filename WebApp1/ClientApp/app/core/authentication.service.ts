import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

const loginUrl = '/api/account/login';
const logoutUrl = '/api/account/logout';

//TODO: change
@Injectable()
export class AuthenticationService {

    authenticated: boolean;
    userNameOrEmail: string;

    constructor(private httpClient: HttpClient) {
        this.resetAuthenticationState();
    }

    login(userNameOrEmail: string, password: string): Observable<void | {}> {

        this.resetAuthenticationState();

        return this.httpClient
            .post<void>(loginUrl, { userNameOrEmail: userNameOrEmail, password: password })
            .do(() => {
                this.authenticated = true;
                this.userNameOrEmail = userNameOrEmail;
            })
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
        this.resetAuthenticationState();
        this.httpClient.post<void>(logoutUrl, null).subscribe(() => { });
    }

    private resetAuthenticationState() {
        this.authenticated = false;
        this.userNameOrEmail = null;
    }
}
