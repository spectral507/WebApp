import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDetails } from '../../shared/models/user-details.model';

@Component({
    selector: 'app-users',
    templateUrl: 'users.component.html'
})
export class UsersComponent {

    get users(): UserDetails[] {
        return this._users;
    }

    private _users: UserDetails[];

    constructor(route: ActivatedRoute) {
        //TODO: remove
        console.log('=> UsersComponent CREATE');
        route.data.subscribe(data => {
            //TODO: remove
            console.log('=> UsersComponent DATA:');
            console.log(data);
            this._users = data.users;
            console.log(this._users);
        });
    }
}