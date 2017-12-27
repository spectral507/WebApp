import { Component, ViewChild, OnDestroy } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { LoginService } from '../login.service';
import { RegisterService } from '../register.service';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnDestroy {

    get isModalShown(): boolean {
        return this._loginModal.isShown;
    }

    get loginForm(): FormGroup {
        return this._loginForm;
    }

    get loginControl(): FormControl {
        return this._loginForm.controls.login as FormControl;
    }

    get passwordControl(): FormControl {
        return this._loginForm.controls.password as FormControl;
    }

    private _loginEventsSubscription: Subscription;
    private _loginForm: FormGroup;
    private _loginFormSubmitted: boolean;
    @ViewChild('loginModal') private _loginModal: ModalDirective;
    private _returnUrl: string;

    constructor(private _accountService: AccountService,
        private _loginService: LoginService,
        private _registerService: RegisterService,
        private _router: Router) {

        this._loginEventsSubscription = this._loginService.loginEvents.subscribe((returnUrl) => {
            this.showModal();
            if (returnUrl) {
                this._returnUrl = returnUrl;
            }
        });

        this._loginForm = new FormGroup({
            login: new FormControl('', Validators.required),
            password: new FormControl('',
                Validators.compose([Validators.required, Validators.minLength(6)]))
        });

        this.reset();
    }

    ngAfterViewInit() {
        this._loginModal.onHide.subscribe(() => {
            this.reset();
        });
    }

    reset(): void {
        this._loginFormSubmitted = false;
        this._returnUrl = null;
        this._loginForm.reset();
    }

    showModal(): void {
        this._loginModal.show();
    }

    hideModal(): void {
        this._loginModal.hide();
    }

    register(): void {
        this.hideModal();
        this._registerService.register();
    }

    getValidationMessages(key: string): string[] {

        let messages: string[] = [];

        if (this._loginFormSubmitted &&
            this._loginForm.controls[key].errors) {

            for (let error in this._loginForm.controls[key].errors) {
                switch (error) {
                    case 'required':
                        messages.push('The field is required.');
                        break;
                    case 'minlength':
                        messages.push('The field is at least 6 characters long.');
                        break;
                    default:
                        messages.push('Unknown error.');
                        break;
                }
            }
        }
        return messages;
    }

    getFormValidationMessages(): string[] {

        if (this._loginFormSubmitted &&
            this._loginForm.errors &&
            this._loginForm.errors['']) {

            return this._loginForm.errors[''];
        }
        return [];
    }

    onSubmit() {
        this._loginFormSubmitted = true;
        if (this._loginForm.valid) {
            this._accountService.login(this._loginForm.controls.login.value,
                this._loginForm.controls.password.value)
                .subscribe(
                () => {
                    if (this._returnUrl) {
                        this._router.navigateByUrl(this._returnUrl);
                    }
                    this.hideModal();
                },
                (error) => {
                    if (error) {
                        if (!this._loginForm.errors) {
                            this._loginForm.setErrors(error);
                        }
                    }
                });
        }
    }

    ngOnDestroy(): void {
        this._loginEventsSubscription.unsubscribe();
    }
}