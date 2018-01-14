import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { IndexComponent } from './index/index.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        HomeComponent,
        IndexComponent
    ],
    exports: [
        HomeComponent,
        IndexComponent
    ]
})
export class HomeModule { }
