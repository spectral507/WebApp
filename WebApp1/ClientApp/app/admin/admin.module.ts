import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { UsersComponent } from './users/users.component';
import { UsersResolver } from './shared/users.resolver';
import { AuthenticationGuard } from '../guards/authentication.guard';

let routing = RouterModule.forChild([
    { path: '', redirectTo: 'users' },
    {
        path: 'users',
        component: UsersComponent,
        canActivate: [AuthenticationGuard],
        resolve: { users: UsersResolver }
    }
]);

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [UsersComponent],
    providers: [UsersResolver]
})
export class AdminModule { }
