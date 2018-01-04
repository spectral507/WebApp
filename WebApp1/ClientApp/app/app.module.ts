import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, ErrorHandler } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

// TODO: remove FirstComponent, SecondComponent
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { AppErrorHandlerService } from './core/app-error-handler.service';
import { AccessDeniedComponent } from './access-denied/access-denied.component';


@NgModule({
    declarations: [
        AppComponent,
        FirstComponent,
        SecondComponent,
        AccessDeniedComponent,
    ],
    imports: [
        BrowserModule,
        CoreModule,
        AppRoutingModule,
        MDBBootstrapModule.forRoot(),
        HttpClientModule,
        NgProgressModule.forRoot(),
        NgProgressHttpClientModule
    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [{ provide: ErrorHandler, useClass: AppErrorHandlerService }],
    //providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }