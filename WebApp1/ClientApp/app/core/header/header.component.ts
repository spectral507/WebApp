import { Component } from '@angular/core';

import { AuthenticationService } from '../authentication.service';
import { UserDetails } from '../../shared/models/user-details.model';
import { Router } from '@angular/router';
import { HeaderService } from '../header.service';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent {

    get authenticated(): boolean {
        return this._authService.user.isAuthenticated;
    }

    get userDetails(): UserDetails {
        return this._authService.user.details;
    }

    private _toggler: any;
    private _nav: any;
    private get _isOpen(): boolean {
        if (this._nav.offsetWidth <= 767 && this._nav.offsetHeight > 56) {
            return true;
        }
        return false;
    }

    constructor(private _authService: AuthenticationService,
        private _headerService: HeaderService,
        private _router: Router) {
    }

    getCurrentUrl(): string {
        if (this._router.url.startsWith('/login')
            || this._router.url.startsWith('/signup')) {
            return '/';
        }
        return this._router.url;
    }

    ngAfterViewInit() {
        this._nav = document.querySelector('mdb-navbar nav');
        this._toggler = document.getElementsByClassName('navbar-toggler')[0];
        this._headerService.headerOpen.subscribe((isOpen) => {
            if (isOpen) {
                this.open();
            }
            else {
                this.close();
            }
        });
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }

    open(): void {
        if (!this._isOpen) {
            this._toggler.dispatchEvent(new Event('click'));
            setTimeout(() => {
                window.dispatchEvent(new Event('resize'));
            }, 500);
        }
    }

    close(): void {
        if (this._isOpen) {
            this._toggler.dispatchEvent(new Event('click'));
            setTimeout(() => {
                window.dispatchEvent(new Event('resize'));
            }, 500);
        }
    }
}