import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { NgProgressModule } from '@ngx-progressbar/core';

import { AccountModule } from './account/account.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';

import { AppErrorHandlerService } from './core/app-error-handler.service';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AccountModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        CoreModule,
        HttpClientModule,
        HomeModule,
        NgProgressHttpClientModule,
        NgProgressModule.forRoot()
    ],
    providers: [{ provide: ErrorHandler, useClass: AppErrorHandlerService }],
    bootstrap: [AppComponent]
})
export class AppModule { }