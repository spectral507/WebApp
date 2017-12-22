import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'app-header.component.html',
    styleUrls: ['app-header.component.css']
})
export class AppHeaderComponent {

    @Output('login') login: EventEmitter<void>;

    constructor() {
        this.login = new EventEmitter<void>();
    }

    onLogin() {
        this.login.emit();
    }
}