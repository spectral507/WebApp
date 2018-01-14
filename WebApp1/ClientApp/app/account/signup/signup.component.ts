import {
    AfterViewChecked, AfterViewInit, Component, ChangeDetectionStrategy,
    ChangeDetectorRef, ElementRef, HostBinding
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AccountOutletResizeService } from '../shared/account-outlet-resize.service';

import { getFadeSlideLeftTrigger } from '../../animations/fade-slide-left.trigger';
//***************************************************************************************
@Component({
    selector: 'app-signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.css'],
    animations: [getFadeSlideLeftTrigger('10%', '500ms', 'ease-out')],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements AfterViewInit, AfterViewChecked {

    @HostBinding('class.animated-container') animated: boolean = true;

    form: FormGroup;
    formSubmitted: boolean = true;

    get userName(): FormControl {
        return this.form.controls.userName as FormControl;
    }

    get emailControl(): FormControl {
        return this.form.controls.email as FormControl;
    }

    get passwordGroup(): FormGroup {
        return this.form.controls.password as FormGroup;
    }

    get passwordControl(): FormControl {
        return this.form.controls.password['controls']['password'] as FormControl;
    }

    get passwordConfirmControl(): FormControl {
        return this.form.controls.password['controls']['passwordConfirm'] as FormControl;
    }

    private _shouldUpdateOutletHeight: boolean = false;
    //***********************************************************************************
    constructor(private _host: ElementRef,
        private _accountOutletResizeService: AccountOutletResizeService,
        private _changeDetectorRef: ChangeDetectorRef) {

        this.form = new FormGroup({
            userName: new FormControl(''),
            email: new FormControl('', Validators.compose(
                [Validators.required, Validators.email])),
            password: new FormGroup({
                password: new FormControl('', Validators.required),
                passwordConfirm: new FormControl('', Validators.required)
            })
        });
    }

    ngAfterViewInit(): void {
        this.updateOutletHeight();
    }

    ngAfterViewChecked(): void {
        if (this._shouldUpdateOutletHeight) {
            this.updateOutletHeight();
            this._shouldUpdateOutletHeight = false;
        }
    }

    getUserNameMessages(): string[] {
        let messages: string[] = [];
        if (this.form.controls.userName.errors) {
            for (let error in this.form.controls.userName.errors) {
                switch (error) {
                    default:
                        messages.push('Произошла неизвестная ошибка');
                        break;
                }
            }
        }
        this._shouldUpdateOutletHeight = true;
        return messages;
    }

    getEmailMessages(): string[] {
        let messages: string[] = [];
        if (this.form.controls.email.errors) {
            if (this.form.controls.email.errors.required) {
                messages.push('Введите ваш email');
            }
            else if (this.form.controls.email.errors.email) {
                messages.push('Введён неверный email');
            }
            else {
                messages.push('Произошла неизвестная ошибка');

            }
            this._shouldUpdateOutletHeight = true;
            return messages;
        }
    }

    private updateOutletHeight(): void {
        this._accountOutletResizeService.setHeight(this._host.nativeElement.offsetHeight);
    }
}
