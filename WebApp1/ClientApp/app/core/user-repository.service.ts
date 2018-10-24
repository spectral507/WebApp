import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { AccessDeniedError } from '../shared/errors/access-denied.error';
import { AppError } from '../shared/errors/app.error';
import { BadRequestError } from '../shared/errors/bad-request.error';
import { UnauthorizedError } from '../shared/errors/unauthorized.error';
import { UnprocessableEntityError } from '../shared/errors/uprocessable-entity.error';
import { UserDetails } from '../shared/models/user-details.model';

@Injectable()
export class UserRepositoryService {

    get users(): Observable<UserDetails[]> {
        return this._usersSubject.asObservable();
    }

    get user(): Observable<UserDetails> {
        return this._userSubject.asObservable();
    }

    private _usersSubject: BehaviorSubject<UserDetails[]>;
    private _users: UserDetails[];

    private _userSubject: BehaviorSubject<UserDetails>;
    private _user: UserDetails;

    private readonly _usersUrl: string = null;

    constructor(private _httpClient: HttpClient) {
        this._usersUrl = '/api/users';
        this._usersSubject = new BehaviorSubject<UserDetails[]>([]);
        this._userSubject = new BehaviorSubject<UserDetails>(null);
    }

    createUser(userName: string, email: string, password: string): Observable<void> {
        let data = {
            userName: userName, email: email, password: password
        };
        return this._httpClient
            .post<{ id: string }>(this._usersUrl, data, )
            .map(resp => {
                if (this._users) {
                    let user: UserDetails = {
                        id: resp.id,
                        userName: userName,
                        email: email,
                        isAdministrator: false
                    };
                    this._users.push(user);
                    this._usersSubject.next(this._users);
                }
            })
            .catch((errorResponse: HttpErrorResponse) => {
                if (errorResponse.status == 400) {
                    return Observable.throw(new BadRequestError(errorResponse.error));
                }
                else if (errorResponse.status == 422) {
                    return Observable.throw(new UnprocessableEntityError(errorResponse.error));
                }
                else {
                    return Observable.throw(new AppError('Произошла неизвестная ошибка'));
                }
            });
    }

    loadUser(id: string): Observable<void> {
        return this._httpClient
            .get<UserDetails>(`${this._usersUrl}/${id}`)
            .map((user) => {
                this._user = user;
                this._userSubject.next(this._user);
            })
            .catch((errorResponse: HttpErrorResponse) => {
                if (errorResponse.status == 401) {
                    return Observable.throw(new UnauthorizedError());
                }
                else if (errorResponse.status == 403) {
                    return Observable.throw(new AccessDeniedError());
                }
                else {
                    return Observable.throw(new AppError('Произошла неизвестная ошибка'));
                }
            });
    }

    loadUsers(): Observable<void> {
        return this._httpClient
            .get<UserDetails[]>(this._usersUrl)
            .map(users => {
                this._users = users;
                this._usersSubject.next(this._users);
            })
            .catch((errorResponse: HttpErrorResponse) => {
                if (errorResponse.status == 401) {
                    return Observable.throw(new UnauthorizedError());
                }
                else if (errorResponse.status == 403) {
                    return Observable.throw(new AccessDeniedError());
                }
                else {
                    console.log(errorResponse);
                    return Observable.throw(new AppError('Произошла неизвестная ошибка'));
                }
            });
    }

    deleteUser(id: string): Observable<void> {
        return this._httpClient
            .delete<void>(`${this._usersUrl}/${id}`)
            .map(() => {
                if (this._users) {
                    let index = this._users.findIndex((user: UserDetails) => {
                        return user.id === id;
                    });
                    this._users.splice(index, 1);
                    this._usersSubject.next(this._users);
                }
            });
    }

    clearUsers(): void {
        this._users = [];
        this._usersSubject.next(this._users);
    }
}
