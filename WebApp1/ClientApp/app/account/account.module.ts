import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MDBBootstrapModule.forRoot(),
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [
        AccountComponent,
        LoginComponent,
        SignupComponent
    ],
    schemas: [NO_ERRORS_SCHEMA],
    exports: [
        AccountComponent,
        LoginComponent
    ]
})
export class AccountModule { }
