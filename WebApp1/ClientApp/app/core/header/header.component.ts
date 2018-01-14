import { Component } from '@angular/core';

import { AuthenticationService } from '../authentication.service';
import { UserDetails } from '../../shared/models/user-details.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent {

    get authenticated(): boolean {
        return this._authService.user.isAuthenticated;
    }

    get userDetails(): UserDetails {
        return this._authService.user.details;
    }

    constructor(private _authService: AuthenticationService,
        private _router: Router) { }

    logout(): void {
        console.log('logout');
        this._authService.logout();
    }

    getCurrentUrl(): string {
        return this._router.url;
    }
}