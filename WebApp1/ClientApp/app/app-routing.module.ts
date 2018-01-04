import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AccessDeniedComponent } from './access-denied/access-denied.component';

const routes: Routes = [
    { path: 'first', component: FirstComponent },
    { path: 'second', component: SecondComponent, canActivate: [AuthenticationGuard] },
    { path: 'access-denied', component: AccessDeniedComponent },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthenticationGuard]
})
export class AppRoutingModule { }
