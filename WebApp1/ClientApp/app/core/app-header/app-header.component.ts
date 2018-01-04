import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { AuthenticationService } from '../authentication.service';

@Component({
    selector: 'app-header',
    templateUrl: 'app-header.component.html',
    styleUrls: ['app-header.component.css']
})
export class AppHeaderComponent {

    get isAuthenticated(): boolean {
        return this._authService.user.isAuthenticated;
    }

    get userName(): string {
        if (this._authService.user.details) {
            return this._authService.user.details.userName;
        }
        return null;
    }

    constructor(private _loginService: LoginService,
        private _authService: AuthenticationService) { }

    login(): void {
        this._loginService.login();
    }

    logout(): void {
        this._authService.logout();
    }
}