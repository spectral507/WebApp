import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from "@angular/router";

import { ItemsContainerDirective } from './shared/items-container.directive';
import { SimpleForDirective } from './shared/simple-for.directive';
import { SharedModule } from '../shared/shared.module';
import { UsersComponent } from './users/users.component';

let routing = RouterModule.forChild([
    { path: '', redirectTo: 'users/1', pathMatch: 'full' },
    { path: 'users', component: UsersComponent, redirectTo: 'users/1', pathMatch: 'full' },
    { path: 'users/:page', component: UsersComponent, data: { state: 'users' } }
]);

@NgModule({
    imports: [
        CommonModule,
        MDBBootstrapModule.forRoot(),
        RouterModule,
        routing,
        SharedModule
    ],
    declarations: [
        UsersComponent,
        SimpleForDirective,
        ItemsContainerDirective
    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: []
})
export class AdminModule { }
