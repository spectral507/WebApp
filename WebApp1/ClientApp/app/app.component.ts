import { Component } from '@angular/core';
//TODO: remove
import { AccountService } from './core/account.service';
import { LoginService } from './core/login.service';
//TODO: remove
import { UserRepositoryService } from './core/user-repository.service';
import { AuthenticationService } from './core/authentication.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {

    constructor(private _authRepo: AccountService, private _loginService: LoginService,
        private _userRepo: UserRepositoryService, private _authService: AuthenticationService) {
    }

    auth() {
        this._loginService.login('/first');
    }

    login() {
        this._authService.login('Admin', 'Secret#123')
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
        this._authService.logout();
    }

    createAccount() {
        this._userRepo.createUser(null, 'myemail@example.com', 'd').subscribe(
            () => {
                console.log('=> ACCOUNT CREATED');
            },
            (error) => {
                console.log('=> ACCOUNT ERROR');
                console.log(error);
            });
    }

    showAuthState() {
        console.log(this._authService.user);
    }

    updateAuthState() {
        this._authService.updateState();
    }

    getUsers() {
        this._userRepo.getUsers().subscribe(
            users => {
                console.log(users);
            });
    }
}