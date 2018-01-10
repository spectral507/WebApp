import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        CommonModule,
        MDBBootstrapModule.forRoot()
    ],
    declarations: [
        FooterComponent,
        HeaderComponent
    ],
    schemas: [NO_ERRORS_SCHEMA],
    exports: [
        FooterComponent,
        HeaderComponent
    ],
    providers: []
})
export class CoreModule { }
