import { ActivatedRoute, Router } from '@angular/router';
import { AnimationEvent } from '@angular/animations';
import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import swal from 'sweetalert';

import { getPaginationTrigger } from '../../animations/pagination.trigger';
import { HeightReturnComponent } from '../../shared/components/height-return/height-return.component';
import { Pagination } from '../../shared/models/pagination.model';
import { UserDetails } from '../../shared/models/user-details.model';
import { UserRepositoryService } from '../../core/user-repository.service';

@Component({
    selector: 'app-users',
    templateUrl: 'users.component.html',
    styleUrls: ['users.component.css'],
    animations: [getPaginationTrigger()],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent extends HeightReturnComponent {

    paginatedUsers: UserDetails[] = [];

    currentPage: number = 1;
    totalPages: number = 1;
    itemsPerPage: number = 10;
    paginationDisabled: boolean = false;

    paginationState: string = 'fade';

    paginationTransitionCount: number = 0;
    outerContainerHeight: string = 'auto';

    paramsSubscription: Subscription;
    usersSubscription: Subscription;

    private _users: UserDetails[] = [];

    constructor(private _userRepositoryService: UserRepositoryService,
        private _cd: ChangeDetectorRef,
        private _route: ActivatedRoute,
        private _router: Router,
        host: ElementRef) {

        super(host);
    }

    ngOnInit(): void {
        this.usersSubscription = this._userRepositoryService.users
            .subscribe((users) => {
                this.paginationState = 'fade';
                this._cd.detectChanges();
                this._users = users;

                this.totalPages = this.getTotalPages(this._users, this.itemsPerPage);
                this.paginatedUsers = this.getPaginatedUsers(this._users, this.currentPage, this.itemsPerPage);
                if (this.paginatedUsers.length === 0 && this.currentPage > 1) {
                    this._router.navigate(['/admin', 'users', this.currentPage - 1]);
                }
                this._cd.detectChanges();
            });

        this.paramsSubscription = this._route.params.subscribe(params => {
            let page: number = 1;
            if (params.page) {
                page = parseInt(params.page);
                if (isNaN(page)) page = 1;
            }

            if (Math.abs(this.currentPage - page) > 1) {
                this.paginationState = 'fade';
            }
            else if (this.currentPage > page) {
                this.paginationState = 'slideRight';
            }
            else {
                this.paginationState = 'slideLeft';
            }
            this._cd.detectChanges();
            this.currentPage = page;

            if (this._users) {
                this.paginatedUsers = this.getPaginatedUsers(this._users, this.currentPage, this.itemsPerPage);
                this._cd.detectChanges();
            }
        });
    }

    deleteUser(id: string): void {
        swal({
            title: 'Подтвердите',
            text: 'Удалить пользователя и все его данные',
            icon: 'warning',
            dangerMode: true,
            buttons: {
                cancel: {
                    text: "Отмена",
                    value: null,
                    visible: true,
                    className: "btn btn-outline-primary",
                    closeModal: true
                },
                confirm: {
                    text: "OK",
                    value: true,
                    visible: true,
                    className: "btn btn-primary",
                    closeModal: true
                }
            }
        })
            .then(value => {
                if (value) {
                    this._userRepositoryService
                        .deleteUser(id)
                        .subscribe(() => {
                            this.totalPages = this.getTotalPages(this._users, this.itemsPerPage);
                            this.paginatedUsers = this.getPaginatedUsers(this._users, this.currentPage, this.itemsPerPage);
                            swal({
                                title: 'Готово',
                                text: 'Пользователь удалён',
                                icon: 'success',
                                buttons: {
                                    confirm: {
                                        text: "OK",
                                        value: true,
                                        visible: true,
                                        className: "btn btn-primary",
                                        closeModal: true
                                    }
                                }
                            });
                            this._cd.detectChanges();
                        });
                }
            });
    }

    ngAfterViewInit(): void {
        super.ngAfterViewInit();
    }

    ngOnDestroy() {
        this._cd.detach();
        this.paramsSubscription.unsubscribe();
        this.usersSubscription.unsubscribe();
    }

    onPaginationStart(e: AnimationEvent) {
        this.paginationTransitionCount++;
        if (e.toState === 'void') {
            this.outerContainerHeight = this.getOuterHeight(e.element);
            this._cd.detectChanges();
        }
        if (e.fromState === 'void') {
            this.outerContainerHeight = this.getOuterHeight(e.element);
            this._cd.detectChanges();
        }
    }

    onPaginationDone(e: AnimationEvent) {
        this.paginationTransitionCount--;
        if (this.paginationTransitionCount === 0) {
            this.outerContainerHeight = 'auto';
            if (!this._cd['destroyed']) this._cd.detectChanges();
        }
    }

    private getTotalPages(users: UserDetails[], itemsPerPage): number {
        return Math.ceil(users.length / itemsPerPage);
    }

    private getPaginatedUsers(users: UserDetails[], page: number, itemsPerPage: number): UserDetails[] {
        return users.slice((page - 1) * itemsPerPage, page * itemsPerPage);
    }

    private getOuterHeight(elem: HTMLElement): string {
        let elemHeight: number, elemMargin: number;
        elemHeight = parseInt(document.defaultView.getComputedStyle(elem, '').getPropertyValue('height'));
        elemMargin = parseInt(document.defaultView.getComputedStyle(elem, '').getPropertyValue('margin-top'))
            + parseInt(document.defaultView.getComputedStyle(elem, '').getPropertyValue('margin-bottom'));
        return `${elemHeight + elemMargin}px`;
    }
}