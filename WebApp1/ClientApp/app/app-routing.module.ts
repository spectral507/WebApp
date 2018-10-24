import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthenticationGuard } from './guards/authentication.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LogoutGuard } from './guards/logout.guard';
import { SignupComponent } from './components/signup/signup.component';
import { TodoGuard } from './guards/todo.guard';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { UsersGuard } from './guards/users.guard';
import { AccountInfoGuard } from './guards/account-info.guard';

const routes: Routes = [
    { path: '', redirectTo: 'todos/1', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, data: { state: 'login' } },
    { path: 'signup', component: SignupComponent, data: { state: 'signup' } },
    { path: 'logout', component: LogoutComponent, canActivate: [LogoutGuard] },
    {
        path: 'account-info', component: AccountInfoComponent, data: { state: 'accountInfo' },
        canActivate: [AuthenticationGuard, AccountInfoGuard]
    },
    {
        path: 'create-todo', component: TodoEditComponent, data: { state: 'createTodo' },
        canActivate: [AuthenticationGuard, TodoGuard]
    },
    {
        path: 'edit-todo', component: TodoEditComponent, data: { state: 'editTodo' },
        canActivate: [AuthenticationGuard, TodoGuard]
    },
    { path: 'todos', redirectTo: 'todos/1', pathMatch: 'full' },
    {
        path: 'todos/:page', component: TodoListComponent, data: { state: 'todo' },
        canActivate: [AuthenticationGuard, TodoGuard]
    },
    {
        path: 'admin', loadChildren: './admin/admin.module#AdminModule',
        canActivate: [AdminGuard, UsersGuard]
    },
    { path: 'access-denied', component: AccessDeniedComponent, data: { state: 'accessDenied' } },
    { path: 'not-found', component: NotFoundComponent, data: { state: 'notFound' } },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        AccountInfoGuard,
        AdminGuard,
        AuthenticationGuard,
        LogoutGuard,
        TodoGuard,
        UsersGuard
    ]
})
export class AppRoutingModule { }
