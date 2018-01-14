import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './home/index/index.component';
import { LoginComponent } from './account/login/login.component';
import { SignupComponent } from './account/signup/signup.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: '', component: IndexComponent, data: { state: 'index' } }
        ],
        data: { state: 'home' }
    },
    {
        path: 'account',
        component: AccountComponent,
        children: [
            { path: 'login', component: LoginComponent, data: { state: 'login' } },
            { path: 'signup', component: SignupComponent, data: { state: 'signup' } }
        ],
        data: { state: 'account' }
    }
    //{ path: 'access-denied', component: AccessDeniedComponent },
    //{ path: 'admin', loadChildren: './admin/admin.module#AdminModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
