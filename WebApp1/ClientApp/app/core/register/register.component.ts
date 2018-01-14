import { Component, ViewChild, OnDestroy } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { LoginService } from '../login.service';
import { RegisterService } from '../register.service';
import { Subscription } from 'rxjs/Subscription';
//import { UserRepositoryService } from '../user-repository.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnDestroy {

    get isModalShown(): boolean {
        return this._registerModal.isShown;
    }

    get registerForm(): FormGroup {
        return this._registerForm;
    }

    get userNameControl(): FormControl {
        return this._registerForm.controls.userName as FormControl;
    }

    get emailControl(): FormControl {
        return this._registerForm.controls.email as FormControl;
    }

    get passwordControl(): FormControl {
        return this._registerForm.controls.password as FormControl;
    }

    get repeatPasswordControl(): FormControl {
        return this._registerForm.controls.repeatPassword as FormControl
    }

    private _registerForm: FormGroup;
    private _registerFormSubmitted: boolean;
    @ViewChild('registerModal') private _registerModal: ModalDirective;
    private _registerEventsSubscription: Subscription;
    private _returnUrl: string;

    constructor(private _loginService: LoginService,
        private _registerService: RegisterService) {

        this._registerEventsSubscription = this._registerService.registerEvents.subscribe((returnUrl) => {
            this.showModal();
            if (returnUrl) {
                this._returnUrl = returnUrl;
            }
        });

        this._registerForm = new FormGroup({
            userName: new FormControl('', this.validateUsername),
            email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
            password: new FormControl('',
                Validators.compose([Validators.required, Validators.minLength(6), this.validatePassword])),
            repeatPassword: new FormControl('')
        });

        this._registerForm.controls.repeatPassword.setValidators(
            Validators.compose([Validators.required, this.comparePasswords(this.passwordControl)]));

        this.reset();
    }

    ngAfterViewInit() {
        this._registerModal.onHide.subscribe(() => {
            this.reset();
        });
    }

    reset(): void {
        this._registerFormSubmitted = false;
        this._returnUrl = null;
        this._registerForm.reset();
    }

    showModal(): void {
        this._registerModal.show();
    }

    hideModal(): void {
        this._registerModal.hide();
    }

    login(): void {
        this._loginService.login(this._returnUrl);
        this.hideModal();
    }

    getValidationMessages(key: string): string[] {

        let messages: string[] = [];

        if (this._registerFormSubmitted &&
            this._registerForm.controls[key].errors) {

            for (let error in this._registerForm.controls[key].errors) {
                switch (error) {
                    case 'required':
                        messages.push('The field is required.');
                        break;
                    case 'minlength':
                        messages.push('The field must be at least 6 characters long.');
                        break;
                    case 'email':
                        messages.push('The field must contain a valid email address.');
                        break;
                    case 'passwordMismatch':
                        messages.push('The passwords do not match.');
                        break;
                    case 'noalphanumeric':
                        messages.push('The field must have at least one non alphanumeric character.');
                        break;
                    case 'nodigit':
                        messages.push('The field must have at least one digit (\'0\'-\'9\').');
                        break;
                    case 'nouppercase':
                        messages.push('The field must have at least one uppercase (\'A\'-\'Z\').');
                        break;
                    case 'nonalphanumeric':
                        messages.push('The field can only contain letters or digits.');
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

        if (this._registerFormSubmitted &&
            this._registerForm.errors &&
            this._registerForm.errors['']) {

            return this._registerForm.errors[''];
        }
        return [];
    }

    onSubmit(): void {
        this._registerFormSubmitted = true;
        //if (this._registerForm.valid) {
        //    this._userRepository.createUser(
        //        this.userNameControl.value === '' ? null : this.userNameControl.value,
        //        this.emailControl.value,
        //        this.passwordControl.value)
        //        .subscribe(
        //        () => {
        //            this._loginService.login(this._returnUrl);
        //            this.hideModal();
        //        },
        //        (error) => {
        //            if (error) {
        //                if (!this._registerForm.errors) {
        //                    this._registerForm.setErrors(error);
        //                }
        //            }
        //        });
        //}
    }

    ngOnDestroy(): void {
        this._registerEventsSubscription.unsubscribe();
    }

    private comparePasswords(passwordControl: FormControl)
        : (control: FormControl) => { [key: string]: any } {

        return (control: FormControl): { [key: string]: any } => {

            if (control.value === passwordControl.value) {
                return null;
            }
            else {
                return { 'passwordMismatch': true };
            }
        };
    }

    private validateUsername(control: FormControl): { [key: string]: any } {
        if (/\W/.test(control.value)) {
            return { 'nonalphanumeric': true };
        }
        return null;
    }

    private validatePassword(control: FormControl): { [key: string]: any } {
        if (!/\W/.test(control.value)) {
            return { 'noalphanumeric': true }
        }
        if (!/[0-9]/.test(control.value)) {
            return { 'nodigit': true };
        }
        if (!/[A-Z]/.test(control.value)) {
            return { 'nouppercase': true };
        }
        return null;
    }
}
