import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {

    @ViewChild(LoginComponent) loginComponent: LoginComponent;
    @ViewChild(RegisterComponent) registerComponent: RegisterComponent;

    showLoginModal() {
        this.loginComponent.showModal();
    }

    hideLoginModal() {
        this.loginComponent.hideModal();
    }

    showRegisterModal() {
        this.registerComponent.showModal();
    }

    hideRegisterModal() {
        this.registerComponent.hideModal();
    }
}