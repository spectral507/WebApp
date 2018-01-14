import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AccountService } from './account.service';
import { AuthenticationService } from './authentication.service';

import { AccountMenuComponent } from './header/account-menu/account-menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        CommonModule,
        MDBBootstrapModule.forRoot(),
        RouterModule
    ],
    declarations: [
        AccountMenuComponent,
        FooterComponent,
        HeaderComponent
    ],
    schemas: [NO_ERRORS_SCHEMA],
    exports: [
        AccountMenuComponent,
        FooterComponent,
        HeaderComponent
    ],
    providers: [
        AccountService,
        AuthenticationService
    ]
})
export class CoreModule { }
