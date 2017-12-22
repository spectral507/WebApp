import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})
export class RegisterComponent {

    @ViewChild('registerModal') registerModal: ModalDirective;
    @Output('login') login: EventEmitter<void>;

    constructor() {
        this.login = new EventEmitter<void>();
    }

    showModal() {
        this.registerModal.show();
    }

    hideModal() {
        this.registerModal.hide();
    }

    onLogin() {
        this.login.emit();
    }
}
