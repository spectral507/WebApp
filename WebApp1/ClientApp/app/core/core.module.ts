import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './authentication.service';
import { LoginService } from './login.service';
import { RegisterService } from './register.service';
import { AccountService } from './account.service';

@NgModule({
    imports: [
        CommonModule,
        MDBBootstrapModule.forRoot(),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppHeaderComponent,
        AppFooterComponent,
        LoginComponent,
        RegisterComponent
    ],
    schemas: [NO_ERRORS_SCHEMA],
    exports: [
        AppHeaderComponent,
        AppFooterComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [
        AccountService,
        AuthenticationService,
        LoginService,
        RegisterService
    ]
})
export class CoreModule { }
