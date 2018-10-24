import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule, NavbarModule } from 'angular-bootstrap-md';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { NgProgressModule } from '@ngx-progressbar/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { AppErrorHandlerService } from './core/app-error-handler.service';

import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SharedModule } from './shared/shared.module';
import { SignupComponent } from './components/signup/signup.component';
import { TodoContainerDirective } from './directives/todo-container.directive';
import { TodoItemDirective } from './directives/todo-item.directive';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccountInfoComponent } from './components/account-info/account-info.component';

@NgModule({
    declarations: [
        AccessDeniedComponent,
        AppComponent,
        HomeComponent,
        LoginComponent,
        LogoutComponent,
        SignupComponent,
        TodoContainerDirective,
        TodoItemDirective,
        TodoListComponent,
        TodoEditComponent,
        NotFoundComponent,
        AccountInfoComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MDBBootstrapModule.forRoot(),
        NgProgressHttpClientModule,
        NgProgressModule.forRoot(),
        SharedModule,
        NavbarModule
    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }