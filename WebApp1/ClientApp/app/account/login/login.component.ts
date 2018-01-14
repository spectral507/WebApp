import { ActivatedRoute, Router } from '@angular/router';
import {
    AfterViewInit, AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef,
    Component, ElementRef, HostBinding
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AccountOutletResizeService } from '../shared/account-outlet-resize.service';
import { AuthenticationService } from '../../core/authentication.service';

import { getFadeSlideLeftTrigger } from '../../animations/fade-slide-left.trigger';

import { UnauthorizedError } from '../../shared/errors/unauthorized.error';
//***************************************************************************************
@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
    animations: [getFadeSlideLeftTrigger('10%', '500ms', 'ease-out')],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements AfterViewInit, AfterViewChecked {

    @HostBinding('class.animated-container') animated: boolean = true;

    form: FormGroup;
    formSubmitted: boolean = false;

    get userNameOrEmailControl(): FormControl {
        return this.form.controls.userNameOrEmail as FormControl;
    }

    get passwordControl(): FormControl {
        return this.form.controls.password as FormControl;
    }

    authenticated: boolean = false;

    private _shouldUpdateOutletHeight: boolean = false;

    private _returnUrl: string;

    private _resizeHandler: () => void;
    //***********************************************************************************
    constructor(private _host: ElementRef,
        private _accountOutletResizeService: AccountOutletResizeService,
        private _authService: AuthenticationService,
        private _cd: ChangeDetectorRef,
        private _router: Router,
        route: ActivatedRoute) {

        this._returnUrl = route.snapshot.queryParams.returnUrl
            || route.snapshot.queryParams.returnurl
            || route.snapshot.queryParams.return
            || '/';

        this.form = new FormGroup({
            userNameOrEmail: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    ngAfterViewInit(): void {
        this.updateOutletHeight();
        this._resizeHandler = () => { this.updateOutletHeight(); };
        window.addEventListener('resize', this._resizeHandler);
    }

    ngAfterViewChecked(): void {
        if (this._shouldUpdateOutletHeight) {
            this.updateOutletHeight();
            this._shouldUpdateOutletHeight = false;
        }
    }

    ngOnDestroy(): void {
        if (this._resizeHandler) {
            window.removeEventListener('resize', this._resizeHandler);
        }
    }

    getFormMessages(): string[] {
        let messages: string[] = [];
        if (this.form.errors) {
            for (let error in this.form.errors) {
                switch (error) {
                    case 'unauthorized':
                        messages.push('Введено неверное имя пользователя/email/пароль');
                        break;
                    default:
                        messages.push('Произошла неизвестная ошибка');
                        break;
                }
            }
        }
        this._shouldUpdateOutletHeight = true;
        return messages;
    }

    getUserNameOrEmailMessages(): string[] {
        let messages: string[] = [];
        if (this.form.controls.userNameOrEmail.errors) {
            for (let error in this.form.controls.userNameOrEmail.errors) {
                switch (error) {
                    case 'required':
                        messages.push('Введите ваше имя пользователя или email');
                        break;
                    default:
                        messages.push('Произошла неизвестная ошибка');
                        break;
                }
            }
        }
        this._shouldUpdateOutletHeight = true;
        return messages;
    }

    getPasswordMessages(): string[] {
        let messages: string[] = [];
        if (this.form.controls.password.errors) {
            for (let error in this.form.controls.password.errors) {
                switch (error) {
                    case 'required':
                        messages.push('Введите ваш пароль');
                        break;
                    default:
                        messages.push('Произошла неизвестная ошибка');
                        break;
                }
            }
        }
        this._shouldUpdateOutletHeight = true;
        return messages;
    }

    onSubmit(): void {
        this.formSubmitted = true;
        if (this.form.valid) {
            this._authService.login(
                this.userNameOrEmailControl.value, this.passwordControl.value)
                .subscribe(
                () => {
                    this.authenticated = true;
                    setTimeout(() => {
                        this._router.navigateByUrl(this._returnUrl);
                    }, 1000);
                    this._cd.markForCheck();
                },
                (error) => {
                    if (error instanceof UnauthorizedError) {
                        if (!this.form.errors) {
                            this.form.setErrors(
                                { 'unauthorized': true });
                        }
                        else {
                            this.form.errors['unauthorized'] = true;
                        }
                    }
                    this._cd.markForCheck();
                });
        }
    }

    private updateOutletHeight(): void {
        this._accountOutletResizeService.setHeight(this._host.nativeElement.offsetHeight);
    }
}
