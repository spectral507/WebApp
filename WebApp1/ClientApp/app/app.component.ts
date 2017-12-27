import { Component } from '@angular/core';
//TODO: remove
import { AccountService } from './core/account.service';
import { LoginService } from './core/login.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {

    constructor(private _authRepo: AccountService, private _loginService: LoginService) {
    }

    auth() {
        this._loginService.login('/first');
    }

    login() {
        this._authRepo.login('Admin', 'Secret#123')
            .subscribe(() => {
                console.log('=> login complete');
            },
            error => {
                console.log('=> login error');
                for (var err in error) {
                    console.log('   => ', err);
                    for (var i in error[err]) {
                        console.log('     ', error[err][i]);
                    }
                }
            });
    }

    logout() {
        this._authRepo.logout();
    }
}