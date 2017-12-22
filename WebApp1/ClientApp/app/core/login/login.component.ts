import { Component, ViewChild, EventEmitter, Output } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent {

    @ViewChild('loginModal') loginModal: ModalDirective;
    @Output('register') register: EventEmitter<void>;

    constructor() {
        this.register = new EventEmitter<void>();
    }

    showModal() {
        this.loginModal.show();
    }

    hideModal() {
        this.loginModal.hide();
    }

    onRegister() {
        this.register.emit();
    }
}