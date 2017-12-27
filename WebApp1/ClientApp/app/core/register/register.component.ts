import { Component, ViewChild, OnDestroy } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { LoginService } from '../login.service';
import { RegisterService } from '../register.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnDestroy {

    @ViewChild('registerModal') private _registerModal: ModalDirective;

    get isModalShown(): boolean {
        return this._registerModal.isShown;
    }

    private _registerEventsSubscription: Subscription;

    constructor(private _loginService: LoginService,
        private _registerService: RegisterService) {

        this._registerEventsSubscription = this._registerService.registerEvents.subscribe(() => {
            this.showModal();
        });
    }

    showModal(): void {
        this._registerModal.show();
    }

    hideModal(): void {
        this._registerModal.hide();
    }

    login(): void {
        this.hideModal();
        this._loginService.login();
    }

    ngOnDestroy(): void {
        this._registerEventsSubscription.unsubscribe();
    }
}
