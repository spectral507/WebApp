webpackJsonp(["main"],{

/***/ "./ClientApp/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/admin.module": [
		"./ClientApp/app/admin/admin.module.ts",
		"admin.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./ClientApp/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./ClientApp/app/access-denied/access-denied.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/access-denied/access-denied.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center mt-5\">\r\n    <span class=\"badge badge-danger\">Нет доступа</span>\r\n</h1>"

/***/ }),

/***/ "./ClientApp/app/access-denied/access-denied.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessDeniedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_components_height_return_height_return_component__ = __webpack_require__("./ClientApp/app/shared/components/height-return/height-return.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccessDeniedComponent = (function (_super) {
    __extends(AccessDeniedComponent, _super);
    function AccessDeniedComponent(_router, host) {
        var _this = _super.call(this, host) || this;
        _this._router = _router;
        setTimeout(function () { return _this._router.navigateByUrl('/'); }, 3000);
        return _this;
    }
    AccessDeniedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-access-denied',
            template: __webpack_require__("./ClientApp/app/access-denied/access-denied.component.html"),
            styles: [__webpack_require__("./ClientApp/app/access-denied/access-denied.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], AccessDeniedComponent);
    return AccessDeniedComponent;
}(__WEBPACK_IMPORTED_MODULE_2__shared_components_height_return_height_return_component__["a" /* HeightReturnComponent */]));



/***/ }),

/***/ "./ClientApp/app/animations/fade-collapse.animaion.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getFadeCollapseTrigger;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");

function getFadeCollapseTrigger() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])('fadeCollapse', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ height: '0', opacity: 0 }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* group */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.2s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ height: '*' })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.4s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 1 }))
            ]),
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ height: '*', opacity: 1 }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* group */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.1s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0 })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.2s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ height: '0px' }))
            ])
        ]),
    ]);
}
;


/***/ }),

/***/ "./ClientApp/app/animations/fade.trigger.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getFadeTrigger;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");

function getFadeTrigger() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])('fade', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ position: 'absolute', top: '2px', opacity: 1, transform: 'translateX(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0, transform: 'translateX(1000%)' })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ display: 'none' })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0, transform: 'translateX(-1000%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 1, transform: 'translateX(0%)' }))
        ])
    ]);
}
;


/***/ }),

/***/ "./ClientApp/app/animations/pagination.trigger.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getPaginationTrigger;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");

var commonStyles = {
    position: 'absolute',
    width: '100%'
};
var initialAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animation */])([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])('tr:nth-of-type(even)', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'translateX(-200%)' })
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])('tr:nth-of-type(odd)', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'translateX(200%)' })
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])('tr', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* stagger */])('50ms', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('600ms cubic-bezier(.07,.82,.39,.98)', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'translateX(0%)' }))
        ])
    ])
]);
var slideFromLeftAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animation */])([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])([commonStyles, { transform: 'translateX(-200%)' }]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('600ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'translateX(0%)' }))
]);
var slideToLeftAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animation */])([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])([commonStyles, { transform: 'translateX(0%)' }]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('600ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'translateX(-200%)' }))
]);
var slideFromRightAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animation */])([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])([commonStyles, { transform: 'translateX(200%)' }]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('600ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'translateX(0%)' }))
]);
var slideToRightAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animation */])([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])([commonStyles, { transform: 'translateX(0%)' }]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('600ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'translateX(200%)' }))
]);
var fadeOutAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animation */])([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])([commonStyles, { opacity: 1 }]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0 }))
]);
var fadeInAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* animation */])([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])([commonStyles, { opacity: 0 }]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms 300ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 1 }))
]);
function getPaginationTrigger() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])('pagination', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('void => initial', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* useAnimation */])(initialAnimation)
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('void => slideLeft', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* useAnimation */])(slideFromRightAnimation)
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('slideLeft => void', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* useAnimation */])(slideToLeftAnimation)
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('void => slideRight', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* useAnimation */])(slideFromLeftAnimation)
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('slideRight => void', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* useAnimation */])(slideToRightAnimation)
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('void => fade', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* useAnimation */])(fadeInAnimation)
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('fade => void', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["o" /* useAnimation */])(fadeOutAnimation)
        ])
    ]);
}
;


/***/ }),

/***/ "./ClientApp/app/animations/return.trigger.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return returnTrigger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");

var returnTrigger = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])('return', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* state */])('initial', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'translateX(0px)' })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* state */])('my', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'translateX({{l1}})' }), { params: { l1: '0px' } }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('* => initial', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('2s ease-out')),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('* => my', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('2s ease-out'))
]);


/***/ }),

/***/ "./ClientApp/app/animations/routing.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getRoutingTrigger;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");

function getRoutingTrigger() {
    var commonStyles = {
        display: 'block',
        position: 'absolute',
        width: '100%'
    };
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])('routing', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('todo => login, todo => signup, todo => accessDenied, todo => notFound, todo => accountInfo, createTodo => todo, editTodo => todo', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(':leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])([commonStyles, { transform: 'translateX(0%)' }])
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(':enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])([commonStyles, { transform: 'translateX(-200%)' }])
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* group */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(':leave', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'translateX(200%)' }))
                ], { optional: true }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(':enter', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'translateX(0%)' }))
                ], { optional: true })
            ]),
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('login => todo, signup => todo, accessDenied => todo, notFound => todo, accountInfo => todo, todo => createTodo, todo => editTodo', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(':leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])([commonStyles, { transform: 'translateX(0%)' }])
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(':enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])([commonStyles, { transform: 'translateX(200%)' }])
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* group */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(':leave', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'translateX(-200%)' }))
                ], { optional: true }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(':enter', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ transform: 'translateX(0%)' }))
                ], { optional: true })
            ]),
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])('* <=> *', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(':leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])([commonStyles, { opacity: 1 }])
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(':enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])([commonStyles, { opacity: 0 }])
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(':leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 0 }))
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* query */])(':enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({ opacity: 1 }))
            ], { optional: true })
        ])
    ]);
}
;


/***/ }),

/***/ "./ClientApp/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__access_denied_access_denied_component__ = __webpack_require__("./ClientApp/app/access-denied/access-denied.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_admin_guard__ = __webpack_require__("./ClientApp/app/guards/admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_authentication_guard__ = __webpack_require__("./ClientApp/app/guards/authentication.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__ = __webpack_require__("./ClientApp/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_logout_logout_component__ = __webpack_require__("./ClientApp/app/components/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_logout_guard__ = __webpack_require__("./ClientApp/app/guards/logout.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_signup_signup_component__ = __webpack_require__("./ClientApp/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guards_todo_guard__ = __webpack_require__("./ClientApp/app/guards/todo.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_todo_list_todo_list_component__ = __webpack_require__("./ClientApp/app/components/todo-list/todo-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_todo_edit_todo_edit_component__ = __webpack_require__("./ClientApp/app/components/todo-edit/todo-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__not_found_not_found_component__ = __webpack_require__("./ClientApp/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_account_info_account_info_component__ = __webpack_require__("./ClientApp/app/components/account-info/account-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_users_guard__ = __webpack_require__("./ClientApp/app/guards/users.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_account_info_guard__ = __webpack_require__("./ClientApp/app/guards/account-info.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: '', redirectTo: 'todos/1', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */], data: { state: 'login' } },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_8__components_signup_signup_component__["a" /* SignupComponent */], data: { state: 'signup' } },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_6__components_logout_logout_component__["a" /* LogoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_logout_guard__["a" /* LogoutGuard */]] },
    {
        path: 'account-info', component: __WEBPACK_IMPORTED_MODULE_13__components_account_info_account_info_component__["a" /* AccountInfoComponent */], data: { state: 'accountInfo' },
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_authentication_guard__["a" /* AuthenticationGuard */], __WEBPACK_IMPORTED_MODULE_15__guards_account_info_guard__["a" /* AccountInfoGuard */]]
    },
    {
        path: 'create-todo', component: __WEBPACK_IMPORTED_MODULE_11__components_todo_edit_todo_edit_component__["a" /* TodoEditComponent */], data: { state: 'createTodo' },
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_authentication_guard__["a" /* AuthenticationGuard */], __WEBPACK_IMPORTED_MODULE_9__guards_todo_guard__["a" /* TodoGuard */]]
    },
    {
        path: 'edit-todo', component: __WEBPACK_IMPORTED_MODULE_11__components_todo_edit_todo_edit_component__["a" /* TodoEditComponent */], data: { state: 'editTodo' },
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_authentication_guard__["a" /* AuthenticationGuard */], __WEBPACK_IMPORTED_MODULE_9__guards_todo_guard__["a" /* TodoGuard */]]
    },
    { path: 'todos', redirectTo: 'todos/1', pathMatch: 'full' },
    {
        path: 'todos/:page', component: __WEBPACK_IMPORTED_MODULE_10__components_todo_list_todo_list_component__["a" /* TodoListComponent */], data: { state: 'todo' },
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_authentication_guard__["a" /* AuthenticationGuard */], __WEBPACK_IMPORTED_MODULE_9__guards_todo_guard__["a" /* TodoGuard */]]
    },
    {
        path: 'admin', loadChildren: './admin/admin.module#AdminModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_admin_guard__["a" /* AdminGuard */], __WEBPACK_IMPORTED_MODULE_14__guards_users_guard__["a" /* UsersGuard */]]
    },
    { path: 'access-denied', component: __WEBPACK_IMPORTED_MODULE_2__access_denied_access_denied_component__["a" /* AccessDeniedComponent */], data: { state: 'accessDenied' } },
    { path: 'not-found', component: __WEBPACK_IMPORTED_MODULE_12__not_found_not_found_component__["a" /* NotFoundComponent */], data: { state: 'notFound' } },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__guards_account_info_guard__["a" /* AccountInfoGuard */],
                __WEBPACK_IMPORTED_MODULE_3__guards_admin_guard__["a" /* AdminGuard */],
                __WEBPACK_IMPORTED_MODULE_4__guards_authentication_guard__["a" /* AuthenticationGuard */],
                __WEBPACK_IMPORTED_MODULE_7__guards_logout_guard__["a" /* LogoutGuard */],
                __WEBPACK_IMPORTED_MODULE_9__guards_todo_guard__["a" /* TodoGuard */],
                __WEBPACK_IMPORTED_MODULE_14__guards_users_guard__["a" /* UsersGuard */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./ClientApp/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.outlet-cont {\r\n    height: auto;\r\n    transition: height 600ms cubic-bezier(.07,.82,.39,.98);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-progress [color]=\"'white'\" [thick]=\"true\"></ng-progress>\r\n<app-header></app-header>\r\n\r\n<div style=\"overflow:hidden;\">\r\n    <div class=\"container py-5 mt-4\">\r\n        <main>\r\n            <div class=\"outlet-cont\" #outletContainer [@routing]=\"getState(outlet)\"\r\n                 (@routing.done)=\"onRoutingAnimationEnd()\" style=\"position:relative;\">\r\n                <router-outlet #outlet=\"outlet\" (activate)=\"onActivate($event)\"></router-outlet>\r\n            </div>\r\n        </main>\r\n    </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./ClientApp/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_routing_animation__ = __webpack_require__("./ClientApp/app/animations/routing.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_router) {
        this._router = _router;
        this._routerEventsSubscription = null;
        this._activatedComponent = null;
        this._routingAnimationsToPerformCount = 1;
        this._viewInitComplete = false;
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this._viewInitComplete = true;
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this._routerEventsSubscription) {
            this._routerEventsSubscription.unsubscribe();
        }
    };
    AppComponent.prototype.getState = function (outlet) {
        return outlet.activatedRouteData.state;
    };
    AppComponent.prototype.onActivate = function (component) {
        var _this = this;
        var height;
        if (this._activatedComponent) {
            height = this._activatedComponent.getHeight();
            if (typeof height === 'number') {
                this.outletContainer.nativeElement.style.height = height + "px";
            }
        }
        else {
            this.outletContainer.nativeElement.style.height = '0px';
        }
        this._routingAnimationsToPerformCount++;
        this._activatedComponent = component;
        if (this._viewInitComplete) {
            height = this._activatedComponent.getHeight();
            if (typeof height === 'number') {
                this.outletContainer.nativeElement.style.height = height + "px";
            }
            else {
                height.subscribe(function (value) {
                    if (_this._activatedComponent == component) {
                        _this.outletContainer.nativeElement.style.height = value + "px";
                    }
                });
            }
        }
    };
    AppComponent.prototype.onRoutingAnimationEnd = function () {
        this._routingAnimationsToPerformCount--;
        if (this._routingAnimationsToPerformCount == 0) {
            this.outletContainer.nativeElement.style.height = 'auto';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('outletContainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AppComponent.prototype, "outletContainer", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./ClientApp/app/app.component.html"),
            styles: [__webpack_require__("./ClientApp/app/app.component.css")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_2__animations_routing_animation__["a" /* getRoutingTrigger */])()]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_bootstrap_md__ = __webpack_require__("./node_modules/angular-bootstrap-md/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_progressbar_http_client__ = __webpack_require__("./node_modules/@ngx-progressbar/http-client/esm5/ngx-progressbar-http-client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_progressbar_core__ = __webpack_require__("./node_modules/@ngx-progressbar/core/esm5/ngx-progressbar-core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("./ClientApp/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_core_module__ = __webpack_require__("./ClientApp/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__access_denied_access_denied_component__ = __webpack_require__("./ClientApp/app/access-denied/access-denied.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("./ClientApp/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__ = __webpack_require__("./ClientApp/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__ = __webpack_require__("./ClientApp/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_logout_logout_component__ = __webpack_require__("./ClientApp/app/components/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_shared_module__ = __webpack_require__("./ClientApp/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_signup_signup_component__ = __webpack_require__("./ClientApp/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__directives_todo_container_directive__ = __webpack_require__("./ClientApp/app/directives/todo-container.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__directives_todo_item_directive__ = __webpack_require__("./ClientApp/app/directives/todo-item.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_todo_list_todo_list_component__ = __webpack_require__("./ClientApp/app/components/todo-list/todo-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_todo_edit_todo_edit_component__ = __webpack_require__("./ClientApp/app/components/todo-edit/todo-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__not_found_not_found_component__ = __webpack_require__("./ClientApp/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_account_info_account_info_component__ = __webpack_require__("./ClientApp/app/components/account-info/account-info.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__access_denied_access_denied_component__["a" /* AccessDeniedComponent */],
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_17__directives_todo_container_directive__["a" /* TodoContainerDirective */],
                __WEBPACK_IMPORTED_MODULE_18__directives_todo_item_directive__["a" /* TodoItemDirective */],
                __WEBPACK_IMPORTED_MODULE_19__components_todo_list_todo_list_component__["a" /* TodoListComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_todo_edit_todo_edit_component__["a" /* TodoEditComponent */],
                __WEBPACK_IMPORTED_MODULE_21__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_account_info_account_info_component__["a" /* AccountInfoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular_bootstrap_md__["a" /* MDBBootstrapModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__ngx_progressbar_http_client__["a" /* NgProgressHttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__ngx_progressbar_core__["b" /* NgProgressModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular_bootstrap_md__["b" /* NavbarModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NO_ERRORS_SCHEMA */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./ClientApp/app/components/account-info/account-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/components/account-info/account-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-10 col-lg-8 col-xl-6 mx-auto\">\r\n        <table *ngIf=\"user != null\" class=\"table table-striped\">\r\n            <tbody>\r\n                <tr>\r\n                    <th scope=\"row\">id</th>\r\n                    <td>{{user.id}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <th scope=\"row\">username</th>\r\n                    <td>{{user.userName || '-'}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <th scope=\"row\">email</th>\r\n                    <td>{{user.email}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <div class=\"text-center\">\r\n            <a routerLink=\"/\" class=\"btn btn-outline-primary\">На главную <i class=\"fa fa-long-arrow-right\"></i></a>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/components/account-info/account-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_height_return_height_return_component__ = __webpack_require__("./ClientApp/app/shared/components/height-return/height-return.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_user_repository_service__ = __webpack_require__("./ClientApp/app/core/user-repository.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountInfoComponent = (function (_super) {
    __extends(AccountInfoComponent, _super);
    function AccountInfoComponent(_userRepositoryService, _cd, host) {
        var _this = _super.call(this, host) || this;
        _this._userRepositoryService = _userRepositoryService;
        _this._cd = _cd;
        return _this;
    }
    Object.defineProperty(AccountInfoComponent.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    AccountInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userRepositoryService.user.subscribe(function (user) {
            _this._user = user;
            _this._cd.markForCheck();
        });
    };
    AccountInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-account-info',
            template: __webpack_require__("./ClientApp/app/components/account-info/account-info.component.html"),
            styles: [__webpack_require__("./ClientApp/app/components/account-info/account-info.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_user_repository_service__["a" /* UserRepositoryService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], AccountInfoComponent);
    return AccountInfoComponent;
}(__WEBPACK_IMPORTED_MODULE_1__shared_components_height_return_height_return_component__["a" /* HeightReturnComponent */]));



/***/ }),

/***/ "./ClientApp/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"height:500px;border:1px solid black;position:relative;\">\r\n    <div #div1 [@return]=\"returnState\" id=\"div1\" style=\"height:100%;width:100%;position:absolute;background-color:lightgray;z-index:1;\"\r\n         (panstart)=\"onPanStart($event)\" (panmove)=\"onPan($event)\" (panend)=\"onPanEnd()\"\r\n         [style.transition]=\"animated\"></div>\r\n    <div style=\"height:100%;width:100%;position:absolute;background-color:blue;top:0px;z-index:0;\"></div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_height_return_height_return_component__ = __webpack_require__("./ClientApp/app/shared/components/height-return/height-return.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_return_trigger__ = __webpack_require__("./ClientApp/app/animations/return.trigger.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent(_host) {
        var _this = _super.call(this, _host) || this;
        _this.x = 0;
        _this.returnState = 'initial';
        _this.animated = '';
        _this.pointerPrevX = 0;
        return _this;
    }
    HomeComponent.prototype.onPanStart = function (e) {
        this.pointerPrevX = e.center.x;
        this.returnState = '';
        this.animated = null;
    };
    HomeComponent.prototype.onPan = function (e) {
        e.preventDefault();
        var deltaX = e.center.x - this.pointerPrevX;
        this.pointerPrevX = e.center.x;
        if (this.x == 100 && deltaX >= 0) {
            return;
        }
        if (this.x == -100 && deltaX <= 0) {
            return;
        }
        var newx = this.x + deltaX;
        if (newx >= 100) {
            if (!this.animated)
                this.animated = 'transform 200ms ease-out';
            this.x = 100;
            this.div1.nativeElement.style.transform = "translateX(" + this.x + "px)";
            return;
        }
        else if (newx <= -100) {
            if (!this.animated)
                this.animated = 'transform 200ms ease-out';
            this.x = -100;
            this.div1.nativeElement.style.transform = "translateX(" + this.x + "px)";
            return;
        }
        else {
            if (this.animated)
                this.animated = null;
            this.x = newx;
            this.div1.nativeElement.style.transform = "translateX(" + this.x + "px)";
        }
    };
    HomeComponent.prototype.onPanEnd = function () {
        this.animated = 'transform 200ms ease-out';
        if (this.x >= 90) {
            this.x = 90;
            this.div1.nativeElement.style.transform = "translateX(" + this.x + "px)";
        }
        else if (this.x <= -90) {
            this.x = -90;
            this.div1.nativeElement.style.transform = "translateX(" + this.x + "px)";
        }
        else {
            this.x = 0;
            this.div1.nativeElement.style.transform = "translateX(" + this.x + "px)";
        }
        //this.x = 0;
        //this.pointerPrevX = 0;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('div1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomeComponent.prototype, "div1", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./ClientApp/app/components/home/home.component.html"),
            styles: [__webpack_require__("./ClientApp/app/components/home/home.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_2__animations_return_trigger__["a" /* returnTrigger */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], HomeComponent);
    return HomeComponent;
}(__WEBPACK_IMPORTED_MODULE_1__shared_components_height_return_height_return_component__["a" /* HeightReturnComponent */]));



/***/ }),

/***/ "./ClientApp/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-10 col-md-8 col-lg-6 col-xl-4 mx-auto\">\r\n        <h5 class=\"card-header h5 text-center mb-3\">Вход</h5>\r\n        <form novalidate [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"md-form\">\r\n                <i class=\"fa fa-envelope prefix grey-text\"></i>\r\n                <input formControlName=\"userNameOrEmail\" type=\"text\" id=\"defaultForm-email\" class=\"form-control\"\r\n                       [class.counter-danger]=\"(formSubmitted && userNameOrEmailControl.invalid) || form.errors?.unauthorized\"\r\n                       [class.counter-success]=\"formSubmitted && userNameOrEmailControl.valid && !form.errors?.unauthorized\" mdbActive>\r\n                <label for=\"defaultForm-email\">*Имя пользователя или email</label>\r\n                <div *ngIf=\"formSubmitted\" style=\"margin-left:3rem;\">\r\n                    <small [@fadeCollapse]=\"\" *ngFor=\"let msg of getUserNameOrEmailMessages()\" class=\"text-danger d-block\">\r\n                        {{msg}}\r\n                    </small>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"md-form\">\r\n                <i class=\"fa fa-lock prefix grey-text\"></i>\r\n                <input formControlName=\"password\" type=\"password\" id=\"defaultForm-pass\" class=\"form-control\"\r\n                       [class.counter-danger]=\"(formSubmitted && passwordControl.invalid) || form.errors?.unauthorized\"\r\n                       [class.counter-success]=\"formSubmitted && passwordControl.valid && !form.errors?.unauthorized\" mdbActive>\r\n                <label for=\"defaultForm-pass\">*Пароль</label>\r\n                <div *ngIf=\"formSubmitted\" style=\"margin-left:3rem;\">\r\n                    <small [@fadeCollapse]=\"\" *ngFor=\"let msg of getPasswordMessages()\" class=\"text-danger d-block\">\r\n                        {{msg}}\r\n                    </small>\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"formSubmitted\" style=\"margin-left:3rem;\">\r\n                <small [@fadeCollapse]=\"\" *ngFor=\"let msg of getFormMessages()\" class=\"text-danger d-block\">\r\n                    {{msg}}\r\n                </small>\r\n            </div>\r\n\r\n            <div [@fadeCollapse]=\"\" *ngIf=\"authComplete\" class=\"animated flash text-center text-success d-block mb-4\">\r\n                Вы успешно вошли!\r\n            </div>\r\n\r\n            <div class=\"text-center mb-3\">\r\n                <button type=\"submit\" class=\"btn btn-primary waves-light\"\r\n                        [disabled]=\"(formSubmitted && form.invalid) || authInProgress\" mdbRippleRadius>\r\n                    Войти <i class=\"fa fa-sign-in\"></i>\r\n                </button>\r\n                <a *ngIf=\"!authInProgress\" routerLink=\"/\" class=\"btn btn-outline-primary waves-light\" mdbRippleRadius>\r\n                    Отмена\r\n                </a>\r\n                <a *ngIf=\"authInProgress\" class=\"btn btn-outline-primary disabled waves-light\" mdbRippleRadius>\r\n                    Отмена\r\n                </a>\r\n            </div>\r\n        </form>\r\n\r\n        <div class=\"modal-footer\">\r\n            <div class=\"options\">\r\n                <p>\r\n                    Нет аккаунта?\r\n                    <a *ngIf=\"!authInProgress\" [routerLink]=\"['/signup']\" [queryParams]=\"{ return: returnUrl }\">\r\n                        Создайте новый\r\n                    </a>\r\n                    <a *ngIf=\"authInProgress\" class=\"disabled\">Создайте новый</a>\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_authentication_service__ = __webpack_require__("./ClientApp/app/core/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_fade_collapse_animaion__ = __webpack_require__("./ClientApp/app/animations/fade-collapse.animaion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_components_height_return_height_return_component__ = __webpack_require__("./ClientApp/app/shared/components/height-return/height-return.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_errors_unauthorized_error__ = __webpack_require__("./ClientApp/app/shared/errors/unauthorized.error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_header_service__ = __webpack_require__("./ClientApp/app/core/header.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent(_authService, _cd, _headerService, _router, host, route) {
        var _this = _super.call(this, host) || this;
        _this._authService = _authService;
        _this._cd = _cd;
        _this._headerService = _headerService;
        _this._router = _router;
        _this.form = null;
        _this.formSubmitted = false;
        _this.authInProgress = false;
        _this.authComplete = false;
        _this.returnUrl = null;
        _this.returnUrl = route.snapshot.queryParams.returnUrl
            || route.snapshot.queryParams.returnurl
            || route.snapshot.queryParams.return
            || null;
        _this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            userNameOrEmail: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
        return _this;
    }
    Object.defineProperty(LoginComponent.prototype, "userNameOrEmailControl", {
        get: function () {
            return this.form.controls.userNameOrEmail;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "passwordControl", {
        get: function () {
            return this.form.controls.password;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.getFormMessages = function () {
        var messages = [];
        if (this.form.errors) {
            for (var error in this.form.errors) {
                switch (error) {
                    case 'unauthorized':
                        messages.push('Введено неверное имя пользователя/email/пароль');
                        break;
                    default:
                        messages.push('Произошла неизвестная ошибка');
                        break;
                }
            }
        }
        return messages;
    };
    LoginComponent.prototype.getUserNameOrEmailMessages = function () {
        var messages = [];
        if (this.form.controls.userNameOrEmail.errors) {
            for (var error in this.form.controls.userNameOrEmail.errors) {
                switch (error) {
                    case 'required':
                        messages.push('Введите ваше имя пользователя или email');
                        break;
                    default:
                        messages.push('Произошла неизвестная ошибка');
                        break;
                }
            }
        }
        return messages;
    };
    LoginComponent.prototype.getPasswordMessages = function () {
        var messages = [];
        if (this.form.controls.password.errors) {
            for (var error in this.form.controls.password.errors) {
                switch (error) {
                    case 'required':
                        messages.push('Введите ваш пароль');
                        break;
                    default:
                        messages.push('Произошла неизвестная ошибка');
                        break;
                }
            }
        }
        return messages;
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.formSubmitted = true;
        if (this.form.valid) {
            this.authInProgress = true;
            this._authService.login(this.userNameOrEmailControl.value, this.passwordControl.value)
                .subscribe(function () {
                _this.authComplete = true;
                setTimeout(function () {
                    _this._router.navigateByUrl(_this.returnUrl || '/');
                }, 1500);
                _this._headerService.close();
                _this._cd.markForCheck();
            }, function (error) {
                if (error instanceof __WEBPACK_IMPORTED_MODULE_6__shared_errors_unauthorized_error__["a" /* UnauthorizedError */]) {
                    if (!_this.form.errors) {
                        _this.form.setErrors({ 'unauthorized': true });
                    }
                    else {
                        _this.form.errors['unauthorized'] = true;
                    }
                }
                _this.authInProgress = false;
                _this._cd.markForCheck();
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./ClientApp/app/components/login/login.component.html"),
            styles: [__webpack_require__("./ClientApp/app/components/login/login.component.css")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_4__animations_fade_collapse_animaion__["a" /* getFadeCollapseTrigger */])()],
            changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__core_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_7__core_header_service__["a" /* HeaderService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]])
    ], LoginComponent);
    return LoginComponent;
}(__WEBPACK_IMPORTED_MODULE_5__shared_components_height_return_height_return_component__["a" /* HeightReturnComponent */]));



/***/ }),

/***/ "./ClientApp/app/components/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LogoutComponent = (function () {
    function LogoutComponent() {
    }
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-logout',
            template: ''
        })
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/components/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto\">\r\n        <h5 class=\"card-header h5 text-center mb-3\">Регистрация</h5>\r\n        <form novalidate [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"md-form\">\r\n                <i class=\"fa fa-user prefix grey-text\"></i>\r\n                <input formControlName=\"userName\" type=\"text\" id=\"orangeForm-name\" class=\"form-control\"\r\n                       [class.counter-danger]=\"formSubmitted && userNameControl.invalid\"\r\n                       [class.counter-success]=\"formSubmitted && userNameControl.valid\" mdbActive>\r\n                <label for=\"orangeForm-name\">Имя</label>\r\n                <div *ngIf=\"formSubmitted\" style=\"margin-left:3rem;\">\r\n                    <small [@fadeCollapse]=\"\" *ngFor=\"let msg of getUserNameMessages()\" class=\"text-danger d-block\">\r\n                        {{msg}}\r\n                    </small>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"md-form\">\r\n                <i class=\"fa fa-envelope prefix grey-text\"></i>\r\n                <input formControlName=\"email\" type=\"text\" id=\"orangeForm-email\" class=\"form-control\"\r\n                       [class.counter-danger]=\"formSubmitted && emailControl.invalid\"\r\n                       [class.counter-success]=\"formSubmitted && emailControl.valid\" mdbActive>\r\n                <label for=\"orangeForm-email\">*Email</label>\r\n                <div *ngIf=\"formSubmitted\" style=\"margin-left:3rem;\">\r\n                    <small [@fadeCollapse]=\"\" *ngFor=\"let msg of getEmailMessages()\" class=\"text-danger d-block\">\r\n                        {{msg}}\r\n                    </small>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"md-form\">\r\n                <i class=\"fa fa-lock prefix grey-text\"></i>\r\n                <input formControlName=\"password\" type=\"password\" id=\"orangeForm-pass\" class=\"form-control\"\r\n                       [class.counter-danger]=\"formSubmitted && passwordControl.invalid\"\r\n                       [class.counter-success]=\"formSubmitted && passwordControl.valid\" mdbActive>\r\n                <label for=\"orangeForm-pass\">*Пароль</label>\r\n                <div *ngIf=\"formSubmitted\" style=\"margin-left:3rem;\">\r\n                    <small [@fadeCollapse]=\"\" *ngFor=\"let msg of getPasswordMessages()\" class=\"text-danger d-block\">\r\n                        {{msg}}\r\n                    </small>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"md-form\">\r\n                <i class=\"fa fa-lock prefix grey-text\"></i>\r\n                <input formControlName=\"passwordConfirm\" type=\"password\" id=\"orangeForm-pass-confirm\" class=\"form-control\"\r\n                       [class.counter-danger]=\"formSubmitted && passwordConfirmControl.invalid\"\r\n                       [class.counter-success]=\"formSubmitted && passwordConfirmControl.valid\" mdbActive>\r\n                <label for=\"orangeForm-pass-confirm\">*Подтвердите пароль</label>\r\n                <div *ngIf=\"formSubmitted\" style=\"margin-left:3rem;\">\r\n                    <small [@fadeCollapse]=\"\" *ngFor=\"let msg of getPasswordConfirmMessages()\" class=\"text-danger d-block\">\r\n                        {{msg}}\r\n                    </small>\r\n                </div>\r\n            </div>\r\n\r\n            <div [@fadeCollapse]=\"\" *ngIf=\"accountCreated\" class=\"animated flash text-center text-success d-block mb-4\">\r\n                Аккаунт успешно создан!\r\n            </div>\r\n\r\n            <div class=\"text-center\">\r\n                <button type=\"submit\" class=\"btn btn-deep-orange waves-light\"\r\n                        [disabled]=\"(formSubmitted && form.invalid) || accountCreationInProgress\" mdbRippleRadius>\r\n                    Зарегистрироваться\r\n                </button>\r\n                <a *ngIf=\"!accountCreationInProgress\" routerLink=\"/\" class=\"btn btn-outline-primary waves-light\" mdbRippleRadius>\r\n                    Отмена\r\n                </a>\r\n                <a *ngIf=\"accountCreationInProgress\" class=\"btn btn-outline-primary disabled waves-light\" mdbRippleRadius>\r\n                    Отмена\r\n                </a>\r\n            </div>\r\n        </form>\r\n\r\n        <div class=\"modal-footer\">\r\n            <div class=\"options\">\r\n                <p>\r\n                    Уже есть аккаунт?\r\n                    <a *ngIf=\"!accountCreationInProgress\" [routerLink]=\"['/login']\" [queryParams]=\"{ return: returnUrl }\">\r\n                        Авторизуйтесь\r\n                    </a>\r\n                    <a *ngIf=\"accountCreationInProgress\" class=\"disabled\">Авторизуйтесь</a>\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/components/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_fade_collapse_animaion__ = __webpack_require__("./ClientApp/app/animations/fade-collapse.animaion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components_height_return_height_return_component__ = __webpack_require__("./ClientApp/app/shared/components/height-return/height-return.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_errors_uprocessable_entity_error__ = __webpack_require__("./ClientApp/app/shared/errors/uprocessable-entity.error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_user_repository_service__ = __webpack_require__("./ClientApp/app/core/user-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_authentication_service__ = __webpack_require__("./ClientApp/app/core/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_header_service__ = __webpack_require__("./ClientApp/app/core/header.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SignupComponent = (function (_super) {
    __extends(SignupComponent, _super);
    function SignupComponent(_userRepositoryService, _authService, _cd, _headerService, _router, host, route) {
        var _this = _super.call(this, host) || this;
        _this._userRepositoryService = _userRepositoryService;
        _this._authService = _authService;
        _this._cd = _cd;
        _this._headerService = _headerService;
        _this._router = _router;
        _this.formSubmitted = false;
        _this.accountCreationInProgress = false;
        _this.accountCreated = false;
        _this.returnUrl = null;
        _this.returnUrl = route.snapshot.queryParams.returnUrl
            || route.snapshot.queryParams.returnurl
            || route.snapshot.queryParams.return
            || null;
        _this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            userName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([_this.validateUserName, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(25)])),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email])),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(25), _this.validatePassword])),
            passwordConfirm: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('')
        });
        _this.passwordConfirmControl.setValidators(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, _this.compareControlValues(_this.passwordControl)]));
        _this.passwordControl.valueChanges.subscribe(function () {
            _this.passwordConfirmControl.updateValueAndValidity();
        });
        return _this;
    }
    Object.defineProperty(SignupComponent.prototype, "userNameControl", {
        get: function () {
            return this.form.controls.userName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "emailControl", {
        get: function () {
            return this.form.controls.email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "passwordControl", {
        get: function () {
            return this.form.controls.password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "passwordConfirmControl", {
        get: function () {
            return this.form.controls.passwordConfirm;
        },
        enumerable: true,
        configurable: true
    });
    SignupComponent.prototype.getUserNameMessages = function () {
        var messages = [];
        if (this.userNameControl.errors) {
            if (this.userNameControl.errors.noalphanumeric) {
                messages.push('Имя пользователя может содержать только английские буквы и цифры');
            }
            else if (this.userNameControl.errors.minlength) {
                messages.push("\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 " + this.userNameControl.errors.minlength.requiredLength + " \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");
            }
            else if (this.userNameControl.errors.maxlength) {
                messages.push('Имя пользователя слишком длинное');
            }
            else if (this.userNameControl.errors.duplicate) {
                messages.push('Это имя пользователя уже занято');
            }
            else {
                messages.push('Произошла неизвестная ошибка');
            }
        }
        return messages;
    };
    SignupComponent.prototype.getEmailMessages = function () {
        var messages = [];
        if (this.emailControl.errors) {
            if (this.emailControl.errors.required) {
                messages.push('Введите ваш электронный адрес');
            }
            else if (this.form.controls.email.errors.email) {
                messages.push('Введён электронный адрес неверного формата');
            }
            else {
                messages.push('Произошла неизвестная ошибка');
            }
            return messages;
        }
    };
    SignupComponent.prototype.getPasswordMessages = function () {
        var messages = [];
        if (this.passwordControl.errors) {
            if (this.passwordControl.errors.required) {
                messages.push('Введите пароль');
            }
            if (messages.length > 0)
                return messages;
            if (this.passwordControl.errors.alphanumeric) {
                messages.push('Пароль должен содержать хотя бы один не буквенно-цифровой символ');
            }
            if (this.passwordControl.errors.digit) {
                messages.push('Пароль должен содержать хотя бы одну цифру');
            }
            if (this.passwordControl.errors.uppercase) {
                messages.push('Пароль должен содержать хотя бы одну заглавную английскую букву');
            }
            if (messages.length > 0)
                return messages;
            if (this.passwordControl.errors.minlength) {
                messages.push("\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 " + this.passwordControl.errors.minlength.requiredLength + " \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");
            }
            if (messages.length > 0)
                return messages;
            if (this.passwordControl.errors.maxlength) {
                messages.push("\u041F\u0430\u0440\u043E\u043B\u044C \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0434\u043B\u0438\u043D\u043D\u044B\u0439");
            }
            if (messages.length > 0)
                return messages;
            messages.push('Произошла неизвестная ошибка');
        }
        return messages;
    };
    SignupComponent.prototype.getPasswordConfirmMessages = function () {
        var messages = [];
        if (this.passwordConfirmControl.errors) {
            if (this.passwordConfirmControl.errors.required) {
                messages.push('Подтвердите пароль');
            }
            if (messages.length > 0)
                return messages;
            if (this.passwordConfirmControl.errors.match) {
                messages.push('Пароли не совпадают');
            }
            if (messages.length > 0)
                return messages;
            messages.push('Произошла неизвестная ошибка');
        }
        return messages;
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.formSubmitted = true;
        if (this.form.valid) {
            this.accountCreationInProgress = true;
            var name_1 = this.userNameControl.value;
            var email_1 = this.emailControl.value;
            var password_1 = this.passwordControl.value;
            this._userRepositoryService.createUser(name_1, email_1, password_1)
                .subscribe(function () {
                _this.accountCreated = true;
                _this._authService.login(name_1 || email_1, password_1)
                    .subscribe(function () {
                    _this._headerService.close();
                    setTimeout(function () {
                        _this._router.navigateByUrl(_this.returnUrl || '/');
                    }, 2000);
                });
                _this._cd.markForCheck();
            }, function (error) {
                if (error instanceof __WEBPACK_IMPORTED_MODULE_5__shared_errors_uprocessable_entity_error__["a" /* UnprocessableEntityError */]) {
                    if (error.details.UserName && error.details.UserName.findIndex(function (msg) { return msg === 'DuplicateUserName'; }) != -1) {
                        if (!_this.userNameControl.errors) {
                            _this.userNameControl.setErrors({ 'duplicate': true });
                        }
                        else {
                            _this.userNameControl.errors.duplicate = true;
                        }
                    }
                    _this.accountCreationInProgress = false;
                    _this._cd.markForCheck();
                }
            });
        }
    };
    SignupComponent.prototype.validateUserName = function (control) {
        if (/\W/.test(control.value)) {
            return { 'noalphanumeric': true };
        }
        return null;
    };
    SignupComponent.prototype.validatePassword = function (control) {
        var errors = null;
        if (!/\W/.test(control.value)) {
            if (!errors)
                errors = {};
            errors['alphanumeric'] = true;
        }
        if (!/[0-9]/.test(control.value)) {
            if (!errors)
                errors = {};
            errors['digit'] = true;
        }
        if (!/[A-Z]/.test(control.value)) {
            if (!errors)
                errors = {};
            errors['uppercase'] = true;
        }
        return errors;
    };
    SignupComponent.prototype.compareControlValues = function (passwordControl) {
        return function (control) {
            if (control.value === passwordControl.value) {
                return null;
            }
            else {
                return { 'match': true };
            }
        };
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("./ClientApp/app/components/signup/signup.component.html"),
            styles: [__webpack_require__("./ClientApp/app/components/signup/signup.component.css")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__animations_fade_collapse_animaion__["a" /* getFadeCollapseTrigger */])()],
            changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__core_user_repository_service__["a" /* UserRepositoryService */],
            __WEBPACK_IMPORTED_MODULE_7__core_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_8__core_header_service__["a" /* HeaderService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]])
    ], SignupComponent);
    return SignupComponent;
}(__WEBPACK_IMPORTED_MODULE_4__shared_components_height_return_height_return_component__["a" /* HeightReturnComponent */]));



/***/ }),

/***/ "./ClientApp/app/components/todo-edit/todo-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/components/todo-edit/todo-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-10 col-md-8 col-lg-6 col-xl-4 mx-auto\">\r\n        <h5 class=\"card-header h5 text-center mb-3\">{{header}}</h5>\r\n        <form novalidate [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"md-form\">\r\n                <input formControlName=\"name\" mdbActive type=\"text\" id=\"name\" class=\"form-control\"\r\n                       [class.counter-danger]=\"formSubmitted && nameControl.invalid\"\r\n                       [class.counter-success]=\"formSubmitted && nameControl.valid\">\r\n                <label for=\"name\" class=\"\">Название</label>\r\n                <div *ngIf=\"formSubmitted\">\r\n                    <small [@fadeCollapse]=\"\" *ngFor=\"let msg of getNameMessages()\" class=\"text-danger d-block\">\r\n                        {{msg}}\r\n                    </small>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"md-form\">\r\n                <textarea formControlName=\"description\" mdbActive type=\"text\" id=\"description\" class=\"md-textarea\"\r\n                          [class.counter-danger]=\"formSubmitted && descriptionControl.invalid\"\r\n                          [class.counter-success]=\"formSubmitted && descriptionControl.valid\"></textarea>\r\n                <label for=\"description\">*Детали</label>\r\n                <div *ngIf=\"formSubmitted\">\r\n                    <small [@fadeCollapse]=\"\" *ngFor=\"let msg of getDescriptionMessages()\" class=\"text-danger d-block\">\r\n                        {{msg}}\r\n                    </small>\r\n                </div>\r\n            </div>\r\n\r\n            <div [@fadeCollapse]=\"\" *ngIf=\"success\" class=\"animated flash text-center text-success d-block mb-4\">\r\n                {{successMessage}}\r\n            </div>\r\n\r\n            <div class=\"text-center mb-3\">\r\n                <button type=\"submit\" [disabled]=\"(formSubmitted && form.invalid) || inProgress\" class=\"btn btn-primary waves-light\" mdbRippleRadius>\r\n                    Готово\r\n                </button>\r\n                <a *ngIf=\"!inProgress\" routerLink=\"{{returnUrl}}\" class=\"btn btn-outline-primary waves-light\" mdbRippleRadius>\r\n                    Отмена\r\n                </a>\r\n                <a *ngIf=\"inProgress\" class=\"btn btn-outline-primary disabled waves-light\" mdbRippleRadius>\r\n                    Отмена\r\n                </a>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/components/todo-edit/todo-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_components_height_return_height_return_component__ = __webpack_require__("./ClientApp/app/shared/components/height-return/height-return.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_todo_repository_service__ = __webpack_require__("./ClientApp/app/core/todo-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animations_fade_collapse_animaion__ = __webpack_require__("./ClientApp/app/animations/fade-collapse.animaion.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TodoEditComponent = (function (_super) {
    __extends(TodoEditComponent, _super);
    function TodoEditComponent(_todoRepositoryService, _router, _route, _cd, host) {
        var _this = _super.call(this, host) || this;
        _this._todoRepositoryService = _todoRepositoryService;
        _this._router = _router;
        _this._route = _route;
        _this._cd = _cd;
        _this.form = null;
        _this.formSubmitted = false;
        _this.mode = null;
        _this.inProgress = false;
        _this.header = '';
        _this.success = false;
        _this.successMessage = null;
        _this._todo = null;
        _this.returnUrl = null;
        return _this;
    }
    Object.defineProperty(TodoEditComponent.prototype, "nameControl", {
        get: function () {
            return this.form.controls.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodoEditComponent.prototype, "descriptionControl", {
        get: function () {
            return this.form.controls.description;
        },
        enumerable: true,
        configurable: true
    });
    TodoEditComponent.prototype.ngOnInit = function () {
        this.returnUrl = this._route.snapshot.queryParams.returnUrl
            || this._route.snapshot.queryParams.returnurl
            || this._route.snapshot.queryParams.return
            || 'todos/1';
        if (this._route.snapshot.url[0].path === 'edit-todo') {
            this.mode = 'edit';
            this.header = 'Редактировать todo';
            if (this._route.snapshot.queryParams.id) {
                var id = parseInt(this._route.snapshot.queryParams.id);
                if (isNaN(id)) {
                    this._router.navigateByUrl(this.returnUrl);
                }
                else {
                    var todo = this._todoRepositoryService.getTodo(id);
                    if (todo == null) {
                        this._router.navigateByUrl('not-found');
                    }
                    else {
                        this._todo = todo;
                    }
                }
            }
            else {
                this._router.navigateByUrl(this.returnUrl);
            }
        }
        else {
            this.mode = 'create';
            this.header = 'Создать todo';
        }
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(50)])),
            description: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(500)]))
        });
        if (this.mode === 'edit' && this._todo) {
            this.nameControl.setValue(this._todo.name);
            this.descriptionControl.setValue(this._todo.description);
        }
    };
    TodoEditComponent.prototype.getNameMessages = function () {
        var messages = [];
        if (this.form.controls.name.errors) {
            for (var error in this.form.controls.name.errors) {
                switch (error) {
                    case 'maxlength':
                        messages.push('Название слишком длинное');
                        break;
                    default:
                        messages.push('Произошла неизвестная ошибка');
                        break;
                }
            }
        }
        return messages;
    };
    TodoEditComponent.prototype.getDescriptionMessages = function () {
        var messages = [];
        if (this.form.controls.description.errors) {
            for (var error in this.form.controls.description.errors) {
                switch (error) {
                    case 'required':
                        messages.push('Введите описание');
                        break;
                    case 'maxlength':
                        messages.push('Описание слишком длинное');
                        break;
                    default:
                        messages.push('Произошла неизвестная ошибка');
                        break;
                }
            }
        }
        return messages;
    };
    TodoEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.formSubmitted = true;
        if (this.form.valid) {
            this.inProgress = true;
            if (this.mode === 'create') {
                this._todoRepositoryService.createTodo(this.nameControl.value, this.descriptionControl.value)
                    .subscribe(function () {
                    _this.success = true;
                    _this.successMessage = 'Todo создан!';
                    setTimeout(function () {
                        _this._router.navigateByUrl(_this.returnUrl || '/');
                    }, 2000);
                    _this._cd.markForCheck();
                }, function (error) {
                    _this.inProgress = false;
                    _this._cd.markForCheck();
                });
            }
            else {
                var changes = [];
                if (this.nameControl.dirty) {
                    changes.push({ op: 'replace', path: 'name', value: this.nameControl.value });
                }
                if (this.descriptionControl.dirty) {
                    changes.push({ op: 'replace', path: 'description', value: this.descriptionControl.value });
                }
                if (changes.length == 0) {
                    this._router.navigateByUrl(this.returnUrl);
                }
                else {
                    this._todoRepositoryService.updateTodo(this._todo.id, changes)
                        .subscribe(function () {
                        _this.success = true;
                        _this.successMessage = 'Todo изменён!';
                        setTimeout(function () {
                            _this._router.navigateByUrl(_this.returnUrl || '/');
                        }, 2000);
                        _this._cd.markForCheck();
                    }, function (error) {
                        _this.inProgress = false;
                        _this._cd.markForCheck();
                    });
                }
            }
        }
    };
    TodoEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-todo-edit',
            template: __webpack_require__("./ClientApp/app/components/todo-edit/todo-edit.component.html"),
            animations: [Object(__WEBPACK_IMPORTED_MODULE_5__animations_fade_collapse_animaion__["a" /* getFadeCollapseTrigger */])()],
            styles: [__webpack_require__("./ClientApp/app/components/todo-edit/todo-edit.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__core_todo_repository_service__["a" /* TodoRepositoryService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], TodoEditComponent);
    return TodoEditComponent;
}(__WEBPACK_IMPORTED_MODULE_3__shared_components_height_return_height_return_component__["a" /* HeightReturnComponent */]));



/***/ }),

/***/ "./ClientApp/app/components/todo-list/todo-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/components/todo-list/todo-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-8 col-lg-7 col-xl-6 mx-auto\">\r\n        <app-pagination *ngIf=\"!todosEmpty\" [page]=\"currentPage\" [totalPages]=\"totalPages\" [disabled]=\"paginationDisabled\"\r\n                        [link]=\"['/todos']\"></app-pagination>\r\n        <div class=\"items-outer-container\" [style.height]=\"outerContainerHeight\">\r\n            <ng-template [todos]=\"paginatedTodos\" appTodoContainer>\r\n                <div [@pagination]=\"paginationState\" (@pagination.start)=\"onPaginationStart($event)\"\r\n                     (@pagination.done)=\"onPaginationDone($event)\">\r\n                    <ng-template [todos]=\"paginatedTodos\" let-todo appTodoItem>\r\n                        <div class=\"card m-3\">\r\n                            <div class=\"card-body text-center\">\r\n                                <h4 class=\"card-title mb-0\">\r\n                                    {{todo.name}}\r\n                                </h4>\r\n                                <h4 style=\"position:relative;\">\r\n                                    <span [@fade]=\"\" *ngIf=\"!todo.isDone\" class=\"badge badge-danger\">\r\n                                        <i class=\"fa fa-clock-o\"></i>\r\n                                    </span>\r\n                                    <span [@fade]=\"\" *ngIf=\"todo.isDone\" class=\"badge badge-success\">\r\n                                        <i class=\"fa fa-check\"></i>\r\n                                    </span>\r\n                                </h4>\r\n                                <p class=\"card-text mt-4 mb-0\">{{todo.description}}</p>\r\n                                <h4></h4>\r\n                            </div>\r\n                            <div class=\"text-center\">\r\n                                <button (click)=\"doTodo(todo.id)\" *ngIf=\"!todo.isDone\" class=\"btn btn-sm btn-success waves-light\" mdbRippleRadius><i class=\"fa fa-check\"></i></button>\r\n                                <button (click)=\"deleteTodo(todo.id)\" class=\"btn btn-sm btn-danger waves-light\" mdbRippleRadius><i class=\"fa fa-close\"></i></button>\r\n                                <a [routerLink]=\"['/edit-todo']\" [queryParams]=\"{ return:getCurrentUrl(), id: todo.id }\" class=\"btn btn-sm btn-primary waves-light\" mdbRippleRadius><i class=\"fa fa-edit\"></i></a>\r\n                            </div>\r\n                        </div>\r\n                    </ng-template>\r\n                </div>\r\n            </ng-template>\r\n        </div>\r\n        <app-pagination *ngIf=\"!todosEmpty\" [page]=\"currentPage\" [totalPages]=\"totalPages\" [disabled]=\"paginationDisabled\"\r\n                        [link]=\"['/todos']\"></app-pagination>\r\n        <h5 *ngIf=\"todosEmpty\" class=\"text-center mb-1\">\r\n            Нажмите чтобы добавить todo\r\n        </h5>\r\n        <div *ngIf=\"todosEmpty\" class=\"text-center\"><i class=\"fa fa-angle-down fa-2x\"></i></div>\r\n        <div class=\"text-center\">\r\n            <a [routerLink]=\"['/create-todo']\" [queryParams]=\"{ return:getCurrentUrl() }\" class=\"btn btn-primary waves-light\" mdbRippleRadius><i class=\"fa fa-plus\"></i></a>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/components/todo-list/todo-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert__ = __webpack_require__("./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_pagination_trigger__ = __webpack_require__("./ClientApp/app/animations/pagination.trigger.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components_height_return_height_return_component__ = __webpack_require__("./ClientApp/app/shared/components/height-return/height-return.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_todo_repository_service__ = __webpack_require__("./ClientApp/app/core/todo-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animations_fade_trigger__ = __webpack_require__("./ClientApp/app/animations/fade.trigger.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TodoListComponent = (function (_super) {
    __extends(TodoListComponent, _super);
    function TodoListComponent(_todoRepositoryService, _route, _cd, _router, host) {
        var _this = _super.call(this, host) || this;
        _this._todoRepositoryService = _todoRepositoryService;
        _this._route = _route;
        _this._cd = _cd;
        _this._router = _router;
        _this.currentPage = 1;
        _this.totalPages = 1;
        _this.itemsPerPage = 10;
        _this.paginationDisabled = false;
        _this.paginationState = "fade";
        _this.paginationTransitionCount = 0;
        _this.outerContainerHeight = 'auto';
        _this.todosEmpty = false;
        _this.firstRun = true;
        return _this;
    }
    TodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todosSubscription = this._todoRepositoryService.todos.subscribe(function (todos) {
            _this.paginationState = 'fade';
            _this._cd.detectChanges();
            _this._todos = todos;
            if (_this._todos.length === 0)
                _this.todosEmpty = true;
            _this.totalPages = _this.getTotalPages(_this._todos, _this.itemsPerPage);
            if (!_this.firstRun) {
                _this.paginatedTodos = _this.getPaginatedTodos(_this._todos, _this.currentPage, _this.itemsPerPage);
                if (_this.paginatedTodos.length === 0 && _this.currentPage > 1) {
                    _this._router.navigate(['/todos', _this.currentPage - 1]);
                }
                _this._cd.detectChanges();
            }
            else {
                _this.firstRun = false;
            }
        });
        this.paramsSubscription = this._route.params.subscribe(function (params) {
            var page = 1;
            if (params.page) {
                page = parseInt(params.page);
                if (isNaN(page))
                    page = 1;
            }
            if (Math.abs(_this.currentPage - page) > 1) {
                _this.paginationState = 'fade';
            }
            else if (_this.currentPage > page) {
                _this.paginationState = 'slideRight';
            }
            else {
                _this.paginationState = 'slideLeft';
            }
            _this._cd.detectChanges();
            _this.currentPage = page;
            if (_this._todos) {
                _this.paginatedTodos = _this.getPaginatedTodos(_this._todos, _this.currentPage, _this.itemsPerPage);
                _this._cd.detectChanges();
            }
        });
    };
    TodoListComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
    };
    TodoListComponent.prototype.ngOnDestroy = function () {
        this._cd.detach();
        this.paramsSubscription.unsubscribe();
        this.todosSubscription.unsubscribe();
    };
    TodoListComponent.prototype.onPaginationStart = function (e) {
        this.paginationTransitionCount++;
        if (e.toState === 'void') {
            this.outerContainerHeight = this.getOuterHeight(e.element);
            this._cd.detectChanges();
        }
        if (e.fromState === 'void') {
            this.outerContainerHeight = this.getOuterHeight(e.element);
            this._cd.detectChanges();
        }
    };
    TodoListComponent.prototype.onPaginationDone = function (e) {
        this.paginationTransitionCount--;
        if (this.paginationTransitionCount === 0) {
            this.outerContainerHeight = 'auto';
            if (!this._cd['destroyed'])
                this._cd.detectChanges();
        }
    };
    TodoListComponent.prototype.getCurrentUrl = function () {
        return "/todos/" + this.currentPage;
    };
    TodoListComponent.prototype.deleteTodo = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_sweetalert___default()({
            title: 'Подтвердите',
            text: 'Удалить todo',
            icon: 'warning',
            dangerMode: true,
            buttons: {
                cancel: {
                    text: "Отмена",
                    value: null,
                    visible: true,
                    className: "btn btn-outline-primary",
                    closeModal: true,
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
            .then(function (value) {
            if (value) {
                _this._todoRepositoryService.deleteTodo(id).subscribe(function () {
                    __WEBPACK_IMPORTED_MODULE_2_sweetalert___default()({
                        title: 'Готово',
                        text: 'Todo удалён',
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
                    _this._cd.detectChanges();
                });
            }
        });
    };
    TodoListComponent.prototype.doTodo = function (id) {
        var _this = this;
        this._todoRepositoryService.doTodo(id).subscribe(function () {
            var todo = _this._todos.find(function (todo) {
                return todo.id === id;
            });
            todo.isDone = true;
            _this._cd.markForCheck();
        });
    };
    TodoListComponent.prototype.getTotalPages = function (todos, itemsPerPage) {
        return Math.ceil(todos.length / itemsPerPage);
    };
    TodoListComponent.prototype.getPaginatedTodos = function (todos, page, itemsPerPage) {
        return todos.slice((page - 1) * itemsPerPage, page * itemsPerPage);
    };
    TodoListComponent.prototype.getOuterHeight = function (elem) {
        var elemHeight, elemMargin;
        elemHeight = parseInt(document.defaultView.getComputedStyle(elem, '').getPropertyValue('height'));
        elemMargin = parseInt(document.defaultView.getComputedStyle(elem, '').getPropertyValue('margin-top'))
            + parseInt(document.defaultView.getComputedStyle(elem, '').getPropertyValue('margin-bottom'));
        return elemHeight + elemMargin + "px";
    };
    TodoListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-todo-list',
            template: __webpack_require__("./ClientApp/app/components/todo-list/todo-list.component.html"),
            styles: [__webpack_require__("./ClientApp/app/components/todo-list/todo-list.component.css")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__animations_pagination_trigger__["a" /* getPaginationTrigger */])(), Object(__WEBPACK_IMPORTED_MODULE_6__animations_fade_trigger__["a" /* getFadeTrigger */])()],
            changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__core_todo_repository_service__["a" /* TodoRepositoryService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */]])
    ], TodoListComponent);
    return TodoListComponent;
}(__WEBPACK_IMPORTED_MODULE_4__shared_components_height_return_height_return_component__["a" /* HeightReturnComponent */]));



/***/ }),

/***/ "./ClientApp/app/core/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_errors_app_error__ = __webpack_require__("./ClientApp/app/shared/errors/app.error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_errors_bad_request_error__ = __webpack_require__("./ClientApp/app/shared/errors/bad-request.error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_errors_unauthorized_error__ = __webpack_require__("./ClientApp/app/shared/errors/unauthorized.error.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AccountService = (function () {
    function AccountService(_httpClient) {
        this._httpClient = _httpClient;
        this._loginUrl = '/api/account/login';
        this._logoutUrl = '/api/account/logout';
        this._stateUrl = '/api/account/state';
    }
    AccountService.prototype.login = function (userNameOrEmail, password) {
        return this._httpClient
            .post(this._loginUrl, { userNameOrEmail: userNameOrEmail, password: password })
            .catch(function (errorResponse) {
            if (errorResponse.status == 400) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_6__shared_errors_bad_request_error__["a" /* BadRequestError */](errorResponse.error));
            }
            else if (errorResponse.status == 401) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_7__shared_errors_unauthorized_error__["a" /* UnauthorizedError */]());
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_5__shared_errors_app_error__["a" /* AppError */]('��������� ����������� ������'));
            }
        });
    };
    AccountService.prototype.logout = function () {
        this._httpClient.post(this._logoutUrl, null).subscribe(function () { });
    };
    AccountService.prototype.getAuthenticationState = function () {
        return this._httpClient
            .post(this._stateUrl, null)
            .catch(function (errorResponse) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_5__shared_errors_app_error__["a" /* AppError */]('��������� ����������� ������'));
        });
    };
    AccountService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./ClientApp/app/core/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_service__ = __webpack_require__("./ClientApp/app/core/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todo_repository_service__ = __webpack_require__("./ClientApp/app/core/todo-repository.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthenticationService = (function () {
    function AuthenticationService(_accountService, _todoRepo, _router) {
        this._accountService = _accountService;
        this._todoRepo = _todoRepo;
        this._router = _router;
        this._userAuthStateLoaded = false;
        this._user = { isAuthenticated: false, details: null };
    }
    Object.defineProperty(AuthenticationService.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (userNameOrEmail, password) {
        var _this = this;
        this.reset();
        return this._accountService
            .login(userNameOrEmail, password)
            .do(function (user) {
            _this._user = user;
        });
    };
    AuthenticationService.prototype.logout = function () {
        this.reset();
        this._accountService.logout();
        this._todoRepo.clearTodos();
        this._router.navigateByUrl('/');
    };
    AuthenticationService.prototype.getAuthState = function () {
        var _this = this;
        if (this._userAuthStateLoaded) {
            return this._user.isAuthenticated;
        }
        return this._accountService
            .getAuthenticationState()
            .map(function (user) {
            _this._user = user;
            _this._userAuthStateLoaded = true;
            if (user.isAuthenticated) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    AuthenticationService.prototype.reset = function () {
        this._userAuthStateLoaded = false;
        this._user.isAuthenticated = false;
        this._user.details = null;
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_5__todo_repository_service__["a" /* TodoRepositoryService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./ClientApp/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_bootstrap_md__ = __webpack_require__("./node_modules/angular-bootstrap-md/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_service__ = __webpack_require__("./ClientApp/app/core/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authentication_service__ = __webpack_require__("./ClientApp/app/core/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_repository_service__ = __webpack_require__("./ClientApp/app/core/user-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_account_menu_account_menu_component__ = __webpack_require__("./ClientApp/app/core/header/account-menu/account-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__ = __webpack_require__("./ClientApp/app/core/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_component__ = __webpack_require__("./ClientApp/app/core/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__todo_repository_service__ = __webpack_require__("./ClientApp/app/core/todo-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_service__ = __webpack_require__("./ClientApp/app/core/header.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1_angular_bootstrap_md__["a" /* MDBBootstrapModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__header_account_menu_account_menu_component__["a" /* AccountMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__header_header_component__["a" /* HeaderComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NO_ERRORS_SCHEMA */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__header_account_menu_account_menu_component__["a" /* AccountMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__header_header_component__["a" /* HeaderComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__account_service__["a" /* AccountService */],
                __WEBPACK_IMPORTED_MODULE_5__authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_10__todo_repository_service__["a" /* TodoRepositoryService */],
                __WEBPACK_IMPORTED_MODULE_6__user_repository_service__["a" /* UserRepositoryService */],
                __WEBPACK_IMPORTED_MODULE_11__header_service__["a" /* HeaderService */]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./ClientApp/app/core/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/core/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer stylish-color center-on-small-only\">\r\n    <div class=\"footer-copyright\">\r\n        <div class=\"container-fluid\">\r\n            <i class=\"fa fa-copyright\"></i> 2018 <a class=\"white-text\"> TodoApplication </a>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./ClientApp/app/core/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./ClientApp/app/core/footer/footer.component.html"),
            styles: [__webpack_require__("./ClientApp/app/core/footer/footer.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./ClientApp/app/core/header.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderService = (function () {
    function HeaderService() {
        this._headerOpen = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    Object.defineProperty(HeaderService.prototype, "headerOpen", {
        get: function () {
            return this._headerOpen.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    HeaderService.prototype.open = function () {
        this._headerOpen.next(true);
    };
    HeaderService.prototype.close = function () {
        this._headerOpen.next(false);
    };
    HeaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], HeaderService);
    return HeaderService;
}());



/***/ }),

/***/ "./ClientApp/app/core/header/account-menu/account-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/core/header/account-menu/account-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<li class=\"nav-item dropdown\" #dropdown=\"bs-dropdown\" dropdown>\r\n    <a dropdownToggle class=\"nav-link dropdown-toggle waves-light\" mdbRippleRadius>\r\n        Basic dropdown<span class=\"caret\"></span>\r\n    </a>\r\n    <div *dropdownMenu class=\"dropdown-menu dropdown dropdown-stylish-color dropdown-primary\" role=\"menu\">\r\n        <a class=\"dropdown-item\"><span mdbRippleRadius class=\"waves-light\">Action</span></a>\r\n        <a class=\"dropdown-item\"><span class=\"waves-light\" mdbRippleRadius>Another action</span></a>\r\n        <a class=\"dropdown-item\"><span class=\"waves-light\" mdbRippleRadius>Something else here</span></a>\r\n        <div class=\"divider dropdown-divider\"></div>\r\n        <a class=\"dropdown-item\"><span class=\"waves-light\" mdbRippleRadius>Separated link</span></a>\r\n    </div>\r\n</li>"

/***/ }),

/***/ "./ClientApp/app/core/header/account-menu/account-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountMenuComponent = (function () {
    function AccountMenuComponent() {
    }
    AccountMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-account-menu',
            template: __webpack_require__("./ClientApp/app/core/header/account-menu/account-menu.component.html"),
            styles: [__webpack_require__("./ClientApp/app/core/header/account-menu/account-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountMenuComponent);
    return AccountMenuComponent;
}());



/***/ }),

/***/ "./ClientApp/app/core/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/core/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <mdb-navbar SideClass=\"navbar navbar-expand-md navbar-dark stylish-color\" [containerInside]=\"true\">\r\n        <logo>\r\n            <a routerLink=\"/\" class=\"logo navbar-brand white-text\"><strong>Todo</strong></a>\r\n        </logo>\r\n        <links>\r\n            <ul class=\"navbar-nav ml-auto\">\r\n                <li *ngIf=\"!authenticated; else accountMenu\" class=\"nav-item waves-light\" mdbRippleRadius>\r\n                    <a [routerLink]=\"['/login']\" [queryParams]=\"{ return: getCurrentUrl() }\" class=\"nav-link\"><i class=\"fa fa-sign-in\"></i> <span>Вход</span></a>\r\n                </li>\r\n            </ul>\r\n        </links>\r\n    </mdb-navbar>\r\n</header>\r\n\r\n<ng-template #accountMenu>\r\n    <li class=\"nav-item waves-light\" mdbRippleRadius>\r\n        <a routerLink=\"/account-info\" (click)=\"close()\" class=\"nav-link\"><i class=\"fa fa-user\"></i> {{userDetails.userName}}</a>\r\n    </li>\r\n    <li *ngIf=\"userDetails.isAdministrator\" class=\"nav-item waves-light\" mdbRippleRadius>\r\n        <a class=\"nav-link\" (click)=\"close()\" [routerLink]=\"['/admin']\"><i class=\"fa fa-gear\"></i> Администрирование</a>\r\n    </li>\r\n    <li class=\"nav-item waves-light\" mdbRippleRadius>\r\n        <a class=\"nav-link\" (click)=\"close()\" [routerLink]=\"['/logout']\"><i class=\"fa fa-sign-out\"></i> Выход</a>\r\n    </li>\r\n</ng-template>"

/***/ }),

/***/ "./ClientApp/app/core/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("./ClientApp/app/core/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_service__ = __webpack_require__("./ClientApp/app/core/header.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(_authService, _headerService, _router) {
        this._authService = _authService;
        this._headerService = _headerService;
        this._router = _router;
    }
    Object.defineProperty(HeaderComponent.prototype, "authenticated", {
        get: function () {
            return this._authService.user.isAuthenticated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderComponent.prototype, "userDetails", {
        get: function () {
            return this._authService.user.details;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderComponent.prototype, "_isOpen", {
        get: function () {
            if (this._nav.offsetWidth <= 767 && this._nav.offsetHeight > 56) {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent.prototype.getCurrentUrl = function () {
        if (this._router.url.startsWith('/login')
            || this._router.url.startsWith('/signup')) {
            return '/';
        }
        return this._router.url;
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._nav = document.querySelector('mdb-navbar nav');
        this._toggler = document.getElementsByClassName('navbar-toggler')[0];
        this._headerService.headerOpen.subscribe(function (isOpen) {
            if (isOpen) {
                _this.open();
            }
            else {
                _this.close();
            }
        });
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    };
    HeaderComponent.prototype.open = function () {
        if (!this._isOpen) {
            this._toggler.dispatchEvent(new Event('click'));
            setTimeout(function () {
                window.dispatchEvent(new Event('resize'));
            }, 500);
        }
    };
    HeaderComponent.prototype.close = function () {
        if (this._isOpen) {
            this._toggler.dispatchEvent(new Event('click'));
            setTimeout(function () {
                window.dispatchEvent(new Event('resize'));
            }, 500);
        }
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./ClientApp/app/core/header/header.component.html"),
            styles: [__webpack_require__("./ClientApp/app/core/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__header_service__["a" /* HeaderService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./ClientApp/app/core/todo-repository.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoRepositoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_errors_bad_request_error__ = __webpack_require__("./ClientApp/app/shared/errors/bad-request.error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_errors_app_error__ = __webpack_require__("./ClientApp/app/shared/errors/app.error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_errors_unauthorized_error__ = __webpack_require__("./ClientApp/app/shared/errors/unauthorized.error.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var TodoRepositoryService = (function () {
    function TodoRepositoryService(_httpClient) {
        this._httpClient = _httpClient;
        this.todosLoaded = false;
        this._todos = [];
        this._todoUrl = null;
        this._todoUrl = '/api/todos';
        this._todosSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
    }
    Object.defineProperty(TodoRepositoryService.prototype, "todos", {
        get: function () {
            return this._todosSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    TodoRepositoryService.prototype.loadTodos = function () {
        var _this = this;
        return this._httpClient
            .get(this._todoUrl)
            .do(function (todos) {
            _this._todos = todos;
            _this.todosLoaded = true;
            _this._todosSubject.next(_this._todos);
        })
            .map(function () { });
    };
    TodoRepositoryService.prototype.getTodo = function (id) {
        if (this.todosLoaded) {
            return this._todos.find(function (t) { return t.id === id; });
        }
    };
    TodoRepositoryService.prototype.createTodo = function (name, description) {
        var _this = this;
        var data = { name: name, description: description };
        return this._httpClient
            .post(this._todoUrl, data)
            .do(function (id) {
            var todo = {
                id: id,
                name: data.name,
                description: data.description,
                isDone: false
            };
            _this._todos.push(todo);
            _this._todosSubject.next(_this._todos);
        })
            .catch(function (errorResponse) {
            if (errorResponse.status == 400) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_8__shared_errors_bad_request_error__["a" /* BadRequestError */](errorResponse.error));
            }
            else if (errorResponse.status == 401) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_10__shared_errors_unauthorized_error__["a" /* UnauthorizedError */]());
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_9__shared_errors_app_error__["a" /* AppError */]('��������� ����������� ������'));
            }
        });
    };
    TodoRepositoryService.prototype.updateTodo = function (id, changes) {
        var _this = this;
        return this._httpClient
            .patch(this._todoUrl + "/" + id, changes)
            .do(function () {
            var todo = _this._todos.find(function (todo) { return todo.id === id; });
            for (var i = 0; i < changes.length; i++) {
                todo[changes[i].path] = changes[i].value;
            }
            _this._todosSubject.next(_this._todos);
        })
            .catch(function (errorResponse) {
            if (errorResponse.status == 400) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_8__shared_errors_bad_request_error__["a" /* BadRequestError */](errorResponse.error));
            }
            else if (errorResponse.status == 401) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_10__shared_errors_unauthorized_error__["a" /* UnauthorizedError */]());
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_9__shared_errors_app_error__["a" /* AppError */]('��������� ����������� ������'));
            }
        });
    };
    TodoRepositoryService.prototype.deleteTodo = function (id) {
        var _this = this;
        return this._httpClient
            .delete(this._todoUrl + "/" + id)
            .do(function () {
            var index = _this._todos.findIndex(function (todo) {
                return todo.id === id;
            });
            _this._todos.splice(index, 1);
            _this._todosSubject.next(_this._todos);
        });
    };
    TodoRepositoryService.prototype.doTodo = function (id) {
        var _this = this;
        return this._httpClient
            .post(this._todoUrl + "/do/" + id, null)
            .do(function () {
            var todo = _this._todos.find(function (todo) {
                return todo.id === id;
            });
            todo.isDone = true;
        });
    };
    TodoRepositoryService.prototype.clearTodos = function () {
        this._todos = [];
        this.todosLoaded = false;
    };
    TodoRepositoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], TodoRepositoryService);
    return TodoRepositoryService;
}());



/***/ }),

/***/ "./ClientApp/app/core/user-repository.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRepositoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_errors_access_denied_error__ = __webpack_require__("./ClientApp/app/shared/errors/access-denied.error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_errors_app_error__ = __webpack_require__("./ClientApp/app/shared/errors/app.error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_errors_bad_request_error__ = __webpack_require__("./ClientApp/app/shared/errors/bad-request.error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_errors_unauthorized_error__ = __webpack_require__("./ClientApp/app/shared/errors/unauthorized.error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_errors_uprocessable_entity_error__ = __webpack_require__("./ClientApp/app/shared/errors/uprocessable-entity.error.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var UserRepositoryService = (function () {
    function UserRepositoryService(_httpClient) {
        this._httpClient = _httpClient;
        this._usersUrl = null;
        this._usersUrl = '/api/users';
        this._usersSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this._userSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
    }
    Object.defineProperty(UserRepositoryService.prototype, "users", {
        get: function () {
            return this._usersSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserRepositoryService.prototype, "user", {
        get: function () {
            return this._userSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    UserRepositoryService.prototype.createUser = function (userName, email, password) {
        var _this = this;
        var data = {
            userName: userName, email: email, password: password
        };
        return this._httpClient
            .post(this._usersUrl, data)
            .map(function (resp) {
            if (_this._users) {
                var user = {
                    id: resp.id,
                    userName: userName,
                    email: email,
                    isAdministrator: false
                };
                _this._users.push(user);
                _this._usersSubject.next(_this._users);
            }
        })
            .catch(function (errorResponse) {
            if (errorResponse.status == 400) {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_10__shared_errors_bad_request_error__["a" /* BadRequestError */](errorResponse.error));
            }
            else if (errorResponse.status == 422) {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_12__shared_errors_uprocessable_entity_error__["a" /* UnprocessableEntityError */](errorResponse.error));
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_9__shared_errors_app_error__["a" /* AppError */]('��������� ����������� ������'));
            }
        });
    };
    UserRepositoryService.prototype.loadUser = function (id) {
        var _this = this;
        return this._httpClient
            .get(this._usersUrl + "/" + id)
            .map(function (user) {
            _this._user = user;
            _this._userSubject.next(_this._user);
        })
            .catch(function (errorResponse) {
            if (errorResponse.status == 401) {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_11__shared_errors_unauthorized_error__["a" /* UnauthorizedError */]());
            }
            else if (errorResponse.status == 403) {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_8__shared_errors_access_denied_error__["a" /* AccessDeniedError */]());
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_9__shared_errors_app_error__["a" /* AppError */]('��������� ����������� ������'));
            }
        });
    };
    UserRepositoryService.prototype.loadUsers = function () {
        var _this = this;
        return this._httpClient
            .get(this._usersUrl)
            .map(function (users) {
            _this._users = users;
            _this._usersSubject.next(_this._users);
        })
            .catch(function (errorResponse) {
            if (errorResponse.status == 401) {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_11__shared_errors_unauthorized_error__["a" /* UnauthorizedError */]());
            }
            else if (errorResponse.status == 403) {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_8__shared_errors_access_denied_error__["a" /* AccessDeniedError */]());
            }
            else {
                console.log(errorResponse);
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_9__shared_errors_app_error__["a" /* AppError */]('��������� ����������� ������'));
            }
        });
    };
    UserRepositoryService.prototype.deleteUser = function (id) {
        var _this = this;
        return this._httpClient
            .delete(this._usersUrl + "/" + id)
            .map(function () {
            if (_this._users) {
                var index = _this._users.findIndex(function (user) {
                    return user.id === id;
                });
                _this._users.splice(index, 1);
                _this._usersSubject.next(_this._users);
            }
        });
    };
    UserRepositoryService.prototype.clearUsers = function () {
        this._users = [];
        this._usersSubject.next(this._users);
    };
    UserRepositoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], UserRepositoryService);
    return UserRepositoryService;
}());



/***/ }),

/***/ "./ClientApp/app/directives/todo-container.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoContainerDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoContainerDirective = (function () {
    function TodoContainerDirective(_container, _template) {
        this._container = _container;
        this._template = _template;
    }
    TodoContainerDirective.prototype.ngOnChanges = function () {
        this._container.clear();
        this._container.createEmbeddedView(this._template);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], TodoContainerDirective.prototype, "todos", void 0);
    TodoContainerDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appTodoContainer]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */]])
    ], TodoContainerDirective);
    return TodoContainerDirective;
}());



/***/ }),

/***/ "./ClientApp/app/directives/todo-item.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoItemDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoItemDirective = (function () {
    function TodoItemDirective(_container, _template) {
        this._container = _container;
        this._template = _template;
    }
    TodoItemDirective.prototype.ngOnChanges = function () {
        this._container.clear();
        for (var i in this.todos) {
            this._container.createEmbeddedView(this._template, new TodoItemContext(this.todos[i]));
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], TodoItemDirective.prototype, "todos", void 0);
    TodoItemDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appTodoItem]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* TemplateRef */]])
    ], TodoItemDirective);
    return TodoItemDirective;
}());

var TodoItemContext = (function () {
    function TodoItemContext($implicit) {
        this.$implicit = $implicit;
    }
    return TodoItemContext;
}());


/***/ }),

/***/ "./ClientApp/app/guards/account-info.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountInfoGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_user_repository_service__ = __webpack_require__("./ClientApp/app/core/user-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_authentication_service__ = __webpack_require__("./ClientApp/app/core/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountInfoGuard = (function () {
    function AccountInfoGuard(_userRepo, _authService, _router) {
        this._userRepo = _userRepo;
        this._authService = _authService;
        this._router = _router;
    }
    AccountInfoGuard.prototype.canActivate = function (next, state) {
        if (this._authService.user.details && this._authService.user.details.id) {
            var id = this._authService.user.details.id;
            return this._userRepo.loadUser(id).map(function () { return true; });
        }
        this._router.navigateByUrl('/');
    };
    AccountInfoGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__core_user_repository_service__["a" /* UserRepositoryService */],
            __WEBPACK_IMPORTED_MODULE_4__core_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AccountInfoGuard);
    return AccountInfoGuard;
}());



/***/ }),

/***/ "./ClientApp/app/guards/admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_authentication_service__ = __webpack_require__("./ClientApp/app/core/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminGuard = (function () {
    function AdminGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        var authState = this._authService.getAuthState();
        if (authState instanceof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */]) {
            return authState.map(function (isAuthenticated) {
                if (isAuthenticated && _this._authService.user.details.isAdministrator) {
                    return true;
                }
                else if (!isAuthenticated) {
                    _this._router.navigate(['/login'], { queryParams: { return: state.url } });
                    return false;
                }
                else {
                    _this._router.navigate(['/access-denied']);
                    return false;
                }
            });
        }
        else if (authState && this._authService.user.details.isAdministrator) {
            return true;
        }
        else if (authState && !this._authService.user.details.isAdministrator) {
            this._router.navigate(['/access-denied']);
        }
        else if (!authState) {
            this._router.navigate(['/login'], { queryParams: { return: state.url } });
        }
        return false;
    };
    AdminGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__core_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./ClientApp/app/guards/authentication.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_authentication_service__ = __webpack_require__("./ClientApp/app/core/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationGuard = (function () {
    function AuthenticationGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthenticationGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        var authState = this._authService.getAuthState();
        if (authState instanceof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */]) {
            return authState.do(function (isAuthenticated) {
                if (!isAuthenticated)
                    _this._router.navigate(['/login'], { queryParams: { return: state.url } });
            });
        }
        else {
            return authState;
        }
    };
    AuthenticationGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__core_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthenticationGuard);
    return AuthenticationGuard;
}());



/***/ }),

/***/ "./ClientApp/app/guards/logout.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_authentication_service__ = __webpack_require__("./ClientApp/app/core/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_todo_repository_service__ = __webpack_require__("./ClientApp/app/core/todo-repository.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_user_repository_service__ = __webpack_require__("./ClientApp/app/core/user-repository.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LogoutGuard = (function () {
    function LogoutGuard(_authService, _todoRepositoryService, _userRepositoryService, _router) {
        this._authService = _authService;
        this._todoRepositoryService = _todoRepositoryService;
        this._userRepositoryService = _userRepositoryService;
        this._router = _router;
    }
    LogoutGuard.prototype.canActivate = function (next, state) {
        this._authService.logout();
        this._todoRepositoryService.clearTodos();
        this._userRepositoryService.clearUsers();
        this._router.navigateByUrl('/login');
        return false;
    };
    LogoutGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__core_todo_repository_service__["a" /* TodoRepositoryService */],
            __WEBPACK_IMPORTED_MODULE_4__core_user_repository_service__["a" /* UserRepositoryService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LogoutGuard);
    return LogoutGuard;
}());



/***/ }),

/***/ "./ClientApp/app/guards/todo.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_todo_repository_service__ = __webpack_require__("./ClientApp/app/core/todo-repository.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoGuard = (function () {
    function TodoGuard(_todoRepositoryService) {
        this._todoRepositoryService = _todoRepositoryService;
    }
    TodoGuard.prototype.canActivate = function (next, state) {
        if (this._todoRepositoryService.todosLoaded)
            return true;
        return this._todoRepositoryService.loadTodos().map(function () { return true; });
    };
    TodoGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_todo_repository_service__["a" /* TodoRepositoryService */]])
    ], TodoGuard);
    return TodoGuard;
}());



/***/ }),

/***/ "./ClientApp/app/guards/users.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_user_repository_service__ = __webpack_require__("./ClientApp/app/core/user-repository.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersGuard = (function () {
    function UsersGuard(_userRepo) {
        this._userRepo = _userRepo;
    }
    UsersGuard.prototype.canActivate = function (next, state) {
        return this._userRepo.loadUsers().map(function () { return true; });
    };
    UsersGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_user_repository_service__["a" /* UserRepositoryService */]])
    ], UsersGuard);
    return UsersGuard;
}());



/***/ }),

/***/ "./ClientApp/app/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center mt-5\">\r\n    <span class=\"badge badge-danger\">�� �������</span>\r\n</h1>"

/***/ }),

/***/ "./ClientApp/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_height_return_height_return_component__ = __webpack_require__("./ClientApp/app/shared/components/height-return/height-return.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotFoundComponent = (function (_super) {
    __extends(NotFoundComponent, _super);
    function NotFoundComponent(_router, host) {
        var _this = _super.call(this, host) || this;
        _this._router = _router;
        setTimeout(function () { return _this._router.navigateByUrl('/'); }, 3000);
        return _this;
    }
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("./ClientApp/app/not-found/not-found.component.html"),
            styles: [__webpack_require__("./ClientApp/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], NotFoundComponent);
    return NotFoundComponent;
}(__WEBPACK_IMPORTED_MODULE_1__shared_components_height_return_height_return_component__["a" /* HeightReturnComponent */]));



/***/ }),

/***/ "./ClientApp/app/shared/components/height-return/height-return.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/shared/components/height-return/height-return.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/shared/components/height-return/height-return.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeightReturnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_AsyncSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/AsyncSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeightReturnComponent = (function () {
    function HeightReturnComponent(_host) {
        this._host = _host;
        this.displayBlock = true;
        this._height = null;
        this._viewInitComplete = false;
    }
    HeightReturnComponent.prototype.ngAfterViewInit = function () {
        this._viewInitComplete = true;
        if (this._height) {
            this._height.next(this._host.nativeElement.offsetHeight);
            this._height.complete();
        }
    };
    HeightReturnComponent.prototype.getHeight = function () {
        if (this._viewInitComplete) {
            return this._host.nativeElement.offsetHeight;
        }
        else {
            if (!this._height) {
                this._height = new __WEBPACK_IMPORTED_MODULE_1_rxjs_AsyncSubject__["a" /* AsyncSubject */]();
            }
            return this._height;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('class.d-block'),
        __metadata("design:type", Boolean)
    ], HeightReturnComponent.prototype, "displayBlock", void 0);
    HeightReturnComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-height-return',
            template: __webpack_require__("./ClientApp/app/shared/components/height-return/height-return.component.html"),
            styles: [__webpack_require__("./ClientApp/app/shared/components/height-return/height-return.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], HeightReturnComponent);
    return HeightReturnComponent;
}());



/***/ }),

/***/ "./ClientApp/app/shared/components/pagination/pagination.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/shared/components/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"d-flex\">\r\n    <ul class=\"pagination pagination-circle pg-blue mx-auto\">\r\n        <li *ngIf=\"!(paginationData.leftArrow.disabled || disabled); else disabledLeftArrow\" class=\"page-item\">\r\n            <a class=\"page-link\" routerLink=\"{{getLink(paginationData.leftArrow.page)}}\" mdbRippleRadius>\r\n                &laquo;\r\n            </a>\r\n        </li>\r\n        <ng-template #disabledLeftArrow>\r\n            <li class=\"page-item\">\r\n                <a class=\"page-link disabled\" mdbRippleRadius>\r\n                    &laquo;\r\n                </a>\r\n            </li>\r\n        </ng-template>\r\n\r\n        <li *ngFor=\"let p of paginationData.pages; trackBy: getPageText\" class=\"page-item\" [class.active]=\"p.current\">\r\n            <a class=\"page-link\" routerLink=\"{{getLink(p.page)}}\" mdbRippleRadius>{{p.text}}</a>\r\n        </li>\r\n\r\n        <li *ngIf=\"!(paginationData.rightArrow.disabled || disabled); else disabledRightArrow\" class=\"page-item\">\r\n            <a class=\"page-link\" routerLink=\"{{getLink(paginationData.rightArrow.page)}}\" mdbRippleRadius>\r\n                &raquo;\r\n            </a>\r\n        </li>\r\n        <ng-template #disabledRightArrow>\r\n            <li class=\"page-item\">\r\n                <a class=\"page-link disabled\" mdbRippleRadius>\r\n                    &raquo;\r\n                </a>\r\n            </li>\r\n        </ng-template>\r\n    </ul>\r\n</nav>"

/***/ }),

/***/ "./ClientApp/app/shared/components/pagination/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginationComponent = (function () {
    function PaginationComponent() {
        this.page = 1;
        this.totalPages = 1;
        this.disabled = false;
        this.link = [];
    }
    PaginationComponent.prototype.ngOnChanges = function () {
        this.paginationData = this.getPaginationData(this.page, this.totalPages);
    };
    PaginationComponent.prototype.getPageText = function (index, el) {
        return el.text;
    };
    PaginationComponent.prototype.getLink = function (page) {
        return this.link.join('/') + "/" + page;
    };
    PaginationComponent.prototype.getPaginationData = function (page, totalPages) {
        var pagination = {
            leftArrow: { disabled: false, page: 0 },
            rightArrow: { disabled: false, page: 0 },
            pages: []
        };
        if (page <= 1) {
            pagination.leftArrow.disabled = true;
        }
        else {
            pagination.leftArrow.page = page - 1;
        }
        if (page >= totalPages) {
            pagination.rightArrow.disabled = true;
        }
        else {
            pagination.rightArrow.page = page + 1;
        }
        if (totalPages < 8) {
            for (var i = 1; i <= totalPages; i++) {
                pagination.pages.push({
                    text: i.toString(), page: i, current: page === i ? true : false
                });
            }
        }
        else {
            if (page <= 4) {
                for (var i = 1; i <= 5; i++) {
                    pagination.pages.push({
                        text: i.toString(), page: i, current: page === i ? true : false
                    });
                }
                pagination.pages.push({ text: '...', page: 6, current: false });
                pagination.pages.push({ text: totalPages.toString(), page: totalPages, current: false });
            }
            else if (totalPages - page <= 3) {
                pagination.pages.push({ text: '1', page: 1, current: false });
                pagination.pages.push({ text: '...', page: totalPages - 5, current: false });
                for (var i = 4; i >= 0; i--) {
                    var currPage = totalPages - i;
                    pagination.pages.push({
                        text: currPage.toString(),
                        page: currPage,
                        current: currPage === page ? true : false
                    });
                }
            }
            else {
                pagination.pages.push({ text: '1', page: 1, current: false });
                pagination.pages.push({ text: '...', page: page - 2, current: false });
                pagination.pages.push({ text: (page - 1).toString(), page: page - 1, current: false });
                pagination.pages.push({ text: page.toString(), page: page, current: true });
                pagination.pages.push({ text: (page + 1).toString(), page: page + 1, current: false });
                pagination.pages.push({ text: '...', page: page + 2, current: false });
                pagination.pages.push({ text: totalPages.toString(), page: totalPages, current: false });
            }
        }
        return pagination;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "page", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "totalPages", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], PaginationComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], PaginationComponent.prototype, "link", void 0);
    PaginationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pagination',
            template: __webpack_require__("./ClientApp/app/shared/components/pagination/pagination.component.html"),
            styles: [__webpack_require__("./ClientApp/app/shared/components/pagination/pagination.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./ClientApp/app/shared/errors/access-denied.error.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessDeniedError; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_error__ = __webpack_require__("./ClientApp/app/shared/errors/app.error.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AccessDeniedError = (function (_super) {
    __extends(AccessDeniedError, _super);
    function AccessDeniedError(message) {
        return _super.call(this, message) || this;
    }
    return AccessDeniedError;
}(__WEBPACK_IMPORTED_MODULE_0__app_error__["a" /* AppError */]));



/***/ }),

/***/ "./ClientApp/app/shared/errors/app.error.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppError; });
var AppError = (function () {
    function AppError(message) {
        this.message = message;
    }
    return AppError;
}());



/***/ }),

/***/ "./ClientApp/app/shared/errors/bad-request.error.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadRequestError; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_error__ = __webpack_require__("./ClientApp/app/shared/errors/app.error.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BadRequestError = (function (_super) {
    __extends(BadRequestError, _super);
    function BadRequestError(details, message) {
        var _this = _super.call(this, message) || this;
        _this.details = details;
        return _this;
    }
    return BadRequestError;
}(__WEBPACK_IMPORTED_MODULE_0__app_error__["a" /* AppError */]));



/***/ }),

/***/ "./ClientApp/app/shared/errors/unauthorized.error.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnauthorizedError; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_error__ = __webpack_require__("./ClientApp/app/shared/errors/app.error.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var UnauthorizedError = (function (_super) {
    __extends(UnauthorizedError, _super);
    function UnauthorizedError(message) {
        return _super.call(this, message) || this;
    }
    return UnauthorizedError;
}(__WEBPACK_IMPORTED_MODULE_0__app_error__["a" /* AppError */]));



/***/ }),

/***/ "./ClientApp/app/shared/errors/uprocessable-entity.error.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnprocessableEntityError; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_error__ = __webpack_require__("./ClientApp/app/shared/errors/app.error.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var UnprocessableEntityError = (function (_super) {
    __extends(UnprocessableEntityError, _super);
    function UnprocessableEntityError(details, message) {
        var _this = _super.call(this, message) || this;
        _this.details = details;
        return _this;
    }
    return UnprocessableEntityError;
}(__WEBPACK_IMPORTED_MODULE_0__app_error__["a" /* AppError */]));



/***/ }),

/***/ "./ClientApp/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_pagination_pagination_component__ = __webpack_require__("./ClientApp/app/shared/components/pagination/pagination.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__components_pagination_pagination_component__["a" /* PaginationComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__components_pagination_pagination_component__["a" /* PaginationComponent */]],
            providers: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./ClientApp/boot.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__ = __webpack_require__("./node_modules/@angularclass/hmr/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./ClientApp/app/app.module.ts");
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;




var hmrBootStrap = function () { return __awaiter(_this, void 0, void 0, function () {
    var ngModule;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                module['hot'].accept();
                return [4 /*yield*/, bootstrap()];
            case 1:
                ngModule = _a.sent();
                module['hot'].dispose(function () {
                    var makeVisible = Object(__WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__["createNewHosts"])(ngModule.injector.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ApplicationRef */]).components.map(function (c) { return c.location.nativeElement; }));
                    ngModule.destroy();
                    makeVisible();
                });
                return [2 /*return*/];
        }
    });
}); };
var bootstrap = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
};
if (true) {
    hmrBootStrap();
}
else {
    bootstrap();
}


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/webpack-hot-middleware/client.js?path=__webpack_hmr&dynamicPublicPath=true");
module.exports = __webpack_require__("./ClientApp/boot.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map