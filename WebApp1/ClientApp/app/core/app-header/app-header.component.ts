import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
    selector: 'app-header',
    templateUrl: 'app-header.component.html',
    styleUrls: ['app-header.component.css']
})
export class AppHeaderComponent {

    constructor(private _loginService: LoginService) { }

    login() {
        this._loginService.login();
    }
}