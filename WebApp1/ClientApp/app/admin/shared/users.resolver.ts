//import { Injectable } from "@angular/core";
//import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
//import { Observable } from "rxjs/Observable";
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';
//import { UserDetails } from "../../shared/models/user-details.model";
//import { UserRepositoryService } from "../../core/user-repository.service";
//import { NotAuthorizedError } from "../../shared/not-authorized.error";

//@Injectable()
//export class UsersResolver implements Resolve<UserDetails[]>{

//    constructor(private _userRepo: UserRepositoryService) {
//        console.log('=> UsersResolver CREATE');
//    }

//    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
//        : UserDetails[] | Observable<UserDetails[]> | Promise<UserDetails[]> {

//        console.log('=> UsersResolver START');
//        console.log(state.url);

//        return this._userRepo
//            .getUsers()
//            .catch(error => {
//                if (error instanceof NotAuthorizedError) {
//                    error.message = state.url;
//                }
//                return Observable.throw(error);
//            });
//    }
//}