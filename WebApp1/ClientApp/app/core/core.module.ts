import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        MDBBootstrapModule.forRoot()
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
    ]
})
export class CoreModule { }
