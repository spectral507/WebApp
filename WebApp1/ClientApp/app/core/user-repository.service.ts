import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { UserDetails } from '../shared/models/user-details.model';
import { NotAuthorizedError } from '../shared/not-authorized.error';
import { AccessDeniedError } from '../shared/access-denied.error';
import { AppError } from '../shared/app-error.error';

@Injectable()
export class UserRepositoryService {

    private readonly _usersUrl;

    constructor(private _httpClient: HttpClient) {
        this._usersUrl = '/api/users';
    }

    createUser(userName: string, email: string, password: string): Observable<void | {}> {

        let data = {
            userName: userName, email: email, password: password
        };

        return this._httpClient
            .post<void>(this._usersUrl, data)
            .catch((errorResponse: HttpErrorResponse) => {
                if (errorResponse.status == 400 || errorResponse.status == 422) {
                    throw errorResponse.error;
                }
                else {
                    throw { '': ['Unknown error.'] };
                }
            });
    }

    //TODO: change
    getUsers(): Observable<UserDetails[]> {

        return this._httpClient
            .get<UserDetails[]>(this._usersUrl)
            .catch((errorResponse: HttpErrorResponse) => {
                if (errorResponse.status == 401) {
                    return Observable.throw(new NotAuthorizedError());
                }
                else if (errorResponse.status == 403) {
                    return Observable.throw(new AccessDeniedError());
                }
                else {
                    return Observable.throw(new AppError('Unknown Error'));
                }
            });
    }

    deleteUser(id: string): Observable<void> {
        return this._httpClient.delete<void>(`${this._usersUrl}/${id}`);
    }
}
