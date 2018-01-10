webpackJsonp(["main"],{

/***/ "./ClientApp/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./ClientApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ClientApp/app/account/account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".outlet-container {\r\n    /*border: 2px solid blue;*/\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n    account works!\r\n</p>\r\n<div>{{getState(outlet)}}</div>\r\n<div #outletContainer [@accountRouting]=\"getState(outlet)\" class=\"outlet-container\">\r\n    <router-outlet #outlet=\"outlet\"></router-outlet>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_account_outlet_resize_service__ = __webpack_require__("./ClientApp/app/account/shared/account-outlet-resize.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_root_outlet_resize_service__ = __webpack_require__("./ClientApp/app/shared/root-outlet-resize.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_account_routing_trigger__ = __webpack_require__("./ClientApp/app/animations/account-routing.trigger.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountComponent = (function () {
    function AccountComponent(_host, _rootOutletResizeService, _accountOutletResizeService, _cd) {
        this._host = _host;
        this._rootOutletResizeService = _rootOutletResizeService;
        this._accountOutletResizeService = _accountOutletResizeService;
        this._cd = _cd;
        this.animated = true;
        this._shouldUpdateOutletHeight = false;
    }
    AccountComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._accountOutletResizeService.height.subscribe(function (value) {
            _this.outletContainer.nativeElement.style.height = value ? value + "px" : 'auto';
            _this._shouldUpdateOutletHeight = true;
        });
    };
    AccountComponent.prototype.ngAfterViewChecked = function () {
        if (this._shouldUpdateOutletHeight) {
            this.updateOutletHeight();
            this._shouldUpdateOutletHeight = false;
        }
    };
    AccountComponent.prototype.getState = function (outlet) {
        return outlet.activatedRouteData.state;
    };
    AccountComponent.prototype.updateOutletHeight = function () {
        this._rootOutletResizeService.setHeight(this._host.nativeElement.offsetHeight);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('class.animated-container'),
        __metadata("design:type", Boolean)
    ], AccountComponent.prototype, "animated", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('outletContainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AccountComponent.prototype, "outletContainer", void 0);
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-account',
            template: __webpack_require__("./ClientApp/app/account/account.component.html"),
            styles: [__webpack_require__("./ClientApp/app/account/account.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_3__animations_account_routing_trigger__["a" /* accountRoutingTrigger */]],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_account_outlet_resize_service__["a" /* AccountOutletResizeService */]],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_2__shared_root_outlet_resize_service__["a" /* RootOutletResizeService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_account_outlet_resize_service__["a" /* AccountOutletResizeService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./ClientApp/app/account/account.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_bootstrap_md__ = __webpack_require__("./node_modules/angular-bootstrap-md/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_component__ = __webpack_require__("./ClientApp/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("./ClientApp/app/account/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__ = __webpack_require__("./ClientApp/app/account/signup/signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AccountModule = (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1_angular_bootstrap_md__["a" /* MDBBootstrapModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__account_component__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__["a" /* SignupComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NO_ERRORS_SCHEMA */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__account_component__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */]
            ]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./ClientApp/app/account/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/account/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-10 col-md-8 col-lg-6 col-xl-4 m-auto\">\r\n        <form>\r\n            <p class=\"h5 text-center mb-4\">Вход</p>\r\n\r\n            <div class=\"md-form\">\r\n                <i class=\"fa fa-envelope prefix grey-text\"></i>\r\n                <input type=\"text\" id=\"defaultForm-email\" class=\"form-control\" mdbActive>\r\n                <label for=\"defaultForm-email\">Email</label>\r\n            </div>\r\n\r\n            <div class=\"md-form\">\r\n                <i class=\"fa fa-lock prefix grey-text\"></i>\r\n                <input type=\"password\" id=\"defaultForm-pass\" class=\"form-control\" mdbActive>\r\n                <label for=\"defaultForm-pass\">Пароль</label>\r\n            </div>\r\n\r\n            <div class=\"text-center\">\r\n                <button class=\"btn btn-default waves-light\" mdbRippleRadius>Войти</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/account/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_account_outlet_resize_service__ = __webpack_require__("./ClientApp/app/account/shared/account-outlet-resize.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(_host, _accountOutletResizeService) {
        this._host = _host;
        this._accountOutletResizeService = _accountOutletResizeService;
        this.animated = true;
    }
    LoginComponent.prototype.ngAfterViewInit = function () {
        this.updateOutletHeight();
    };
    LoginComponent.prototype.updateOutletHeight = function () {
        this._accountOutletResizeService.setHeight(this._host.nativeElement.offsetHeight);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('class.animated-container'),
        __metadata("design:type", Boolean)
    ], LoginComponent.prototype, "animated", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./ClientApp/app/account/login/login.component.html"),
            styles: [__webpack_require__("./ClientApp/app/account/login/login.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__shared_account_outlet_resize_service__["a" /* AccountOutletResizeService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./ClientApp/app/account/shared/account-outlet-resize.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountOutletResizeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountOutletResizeService = (function () {
    function AccountOutletResizeService() {
        this._height = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](0);
    }
    Object.defineProperty(AccountOutletResizeService.prototype, "height", {
        get: function () {
            return this._height.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AccountOutletResizeService.prototype.setHeight = function (value) {
        this._height.next(value);
    };
    AccountOutletResizeService.prototype.ngOnDestroy = function () {
        this._height.unsubscribe();
    };
    AccountOutletResizeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AccountOutletResizeService);
    return AccountOutletResizeService;
}());



/***/ }),

/***/ "./ClientApp/app/account/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/account/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-10 col-md-8 col-lg-6 col-xl-4 m-auto\">\r\n        <form>\r\n            <p class=\"h5 text-center mb-4\">Регистрация</p>\r\n\r\n            <div class=\"md-form\">\r\n                <i class=\"fa fa-user prefix grey-text\"></i>\r\n                <input type=\"text\" id=\"orangeForm-name\" class=\"form-control\" mdbActive>\r\n                <label for=\"orangeForm-name\">Имя</label>\r\n            </div>\r\n            <div class=\"md-form\">\r\n                <i class=\"fa fa-envelope prefix grey-text\"></i>\r\n                <input type=\"text\" id=\"orangeForm-email\" class=\"form-control\" mdbActive>\r\n                <label for=\"orangeForm-email\">Email</label>\r\n            </div>\r\n\r\n            <div class=\"md-form\">\r\n                <i class=\"fa fa-lock prefix grey-text\"></i>\r\n                <input type=\"password\" id=\"orangeForm-pass\" class=\"form-control\" mdbActive>\r\n                <label for=\"orangeForm-pass\">Пароль</label>\r\n            </div>\r\n\r\n            <div class=\"text-center\">\r\n                <button class=\"btn btn-deep-orange waves-light\" mdbRippleRadius>Зарегистрироваться</button>\r\n            </div>\r\n\r\n        </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/account/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_account_outlet_resize_service__ = __webpack_require__("./ClientApp/app/account/shared/account-outlet-resize.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = (function () {
    function SignupComponent(_host, _accountOutletResizeService, _changeDetectorRef) {
        this._host = _host;
        this._accountOutletResizeService = _accountOutletResizeService;
        this._changeDetectorRef = _changeDetectorRef;
        this.animated = true;
    }
    SignupComponent.prototype.ngAfterViewInit = function () {
        this.updateOutletHeight();
    };
    SignupComponent.prototype.updateOutletHeight = function () {
        this._accountOutletResizeService.setHeight(this._host.nativeElement.offsetHeight);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('class.animated-container'),
        __metadata("design:type", Boolean)
    ], SignupComponent.prototype, "animated", void 0);
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("./ClientApp/app/account/signup/signup.component.html"),
            styles: [__webpack_require__("./ClientApp/app/account/signup/signup.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__shared_account_outlet_resize_service__["a" /* AccountOutletResizeService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./ClientApp/app/animations/account-routing.trigger.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return accountRoutingTrigger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");

var accountRoutingTrigger = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('accountRouting', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('* <=> *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 1 })
        ], { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 0 })
        ], { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('200ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 0 })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 0 })
        ], { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('200ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 1 }))
        ], { optional: true })
    ])
]);


/***/ }),

/***/ "./ClientApp/app/animations/root-routing.trigger.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rootRoutingTrigger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");

var rootRoutingTrigger = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('rootRouting', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('home => account', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(0%)' })
        ], { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(-100%)' })
        ], { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* group */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(0%)' }))
            ], { optional: true })
        ])
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('account => home', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(0%)' })
        ], { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(100%)' })
        ], { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* group */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(0%)' }))
            ], { optional: true })
        ])
    ])
]);


/***/ }),

/***/ "./ClientApp/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_account_component__ = __webpack_require__("./ClientApp/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./ClientApp/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_login_login_component__ = __webpack_require__("./ClientApp/app/account/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_signup_signup_component__ = __webpack_require__("./ClientApp/app/account/signup/signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */], data: { state: 'home' } },
    {
        path: 'account',
        component: __WEBPACK_IMPORTED_MODULE_2__account_account_component__["a" /* AccountComponent */],
        children: [
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__account_login_login_component__["a" /* LoginComponent */], data: { state: 'login' } },
            { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_5__account_signup_signup_component__["a" /* SignupComponent */], data: { state: 'signup' } }
        ],
        data: { state: 'account' }
    }
    //{ path: 'access-denied', component: AccessDeniedComponent },
    //{ path: 'admin', loadChildren: './admin/admin.module#AdminModule' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            providers: []
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
exports.push([module.i, ".outlet-container {\r\n    overflow: hidden;\r\n    /*border: 2px solid red;*/\r\n    transition: height 600ms cubic-bezier(.07,.82,.39,.99);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-progress [color]=\"'white'\" [thick]=\"true\"></ng-progress>\r\n<app-header></app-header>\r\n\r\n<div class=\"container py-5 mt-4\">\r\n    <main>\r\n        <div>\r\n            <a routerLink=\"/\" class=\"btn btn-sm btn-primary\">home</a>\r\n            <a routerLink=\"/account\" class=\"btn btn-sm btn-primary\">account</a>\r\n            <a routerLink=\"/account/login\" class=\"btn btn-sm btn-primary\">account/login</a>\r\n            <a routerLink=\"/account/signup\" class=\"btn btn-sm btn-primary\">account/signup</a>\r\n        </div>\r\n        <div>{{getState(outlet)}}</div>\r\n        <div #outletContainer [@rootRouting]=\"getState(outlet)\" class=\"outlet-container\" [style.height]=\"outletContainerHeight\">\r\n            <router-outlet #outlet=\"outlet\"></router-outlet>\r\n        </div>\r\n    </main>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./ClientApp/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_root_outlet_resize_service__ = __webpack_require__("./ClientApp/app/shared/root-outlet-resize.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_root_routing_trigger__ = __webpack_require__("./ClientApp/app/animations/root-routing.trigger.ts");
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
    function AppComponent(_rootOutletResizeService) {
        this._rootOutletResizeService = _rootOutletResizeService;
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._rootOutletResizeService.height.subscribe(function (value) {
            _this.outletContainer.nativeElement.style.height = value ? value + "px" : 'auto';
        });
    };
    AppComponent.prototype.getState = function (outlet) {
        return outlet.activatedRouteData.state;
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
            animations: [__WEBPACK_IMPORTED_MODULE_2__animations_root_routing_trigger__["a" /* rootRoutingTrigger */]],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_root_outlet_resize_service__["a" /* RootOutletResizeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_root_outlet_resize_service__["a" /* RootOutletResizeService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_progressbar_http_client__ = __webpack_require__("./node_modules/@ngx-progressbar/http-client/esm5/ngx-progressbar-http-client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_progressbar_core__ = __webpack_require__("./node_modules/@ngx-progressbar/core/esm5/ngx-progressbar-core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__account_account_module__ = __webpack_require__("./ClientApp/app/account/account.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./ClientApp/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_core_module__ = __webpack_require__("./ClientApp/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_module__ = __webpack_require__("./ClientApp/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_app_error_handler_service__ = __webpack_require__("./ClientApp/app/core/app-error-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("./ClientApp/app/app.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__account_account_module__["a" /* AccountModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngx_progressbar_http_client__["a" /* NgProgressHttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngx_progressbar_core__["b" /* NgProgressModule */].forRoot()
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_10__core_app_error_handler_service__["a" /* AppErrorHandlerService */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./ClientApp/app/core/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
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
                throw errorResponse.error;
            }
            else if (errorResponse.status == 401) {
                throw { '': ['Invalid login or/and password.'] };
            }
            else {
                throw { '': ['Unknown error.'] };
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
            throw { '': ['Unknown error.'] };
        });
    };
    AccountService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./ClientApp/app/core/app-error-handler.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppErrorHandlerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_not_authorized_error__ = __webpack_require__("./ClientApp/app/shared/not-authorized.error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__("./ClientApp/app/core/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_access_denied_error__ = __webpack_require__("./ClientApp/app/shared/access-denied.error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authentication_service__ = __webpack_require__("./ClientApp/app/core/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppErrorHandlerService = (function () {
    function AppErrorHandlerService(_injector) {
        this._injector = _injector;
        console.log(this._injector);
    }
    AppErrorHandlerService.prototype.handleError = function (error) {
        //TODO: remove
        console.log('=> AppErrorHandlerService START:');
        console.log(error);
        if (error instanceof Error && error['rejection']) {
            if (error['rejection'] instanceof __WEBPACK_IMPORTED_MODULE_2__shared_not_authorized_error__["a" /* NotAuthorizedError */]) {
                console.log('=> AppErrorHandlerService NotAuthorizedError');
                var router = this._injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]);
                var loginService = this._injector.get(__WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]);
                var authService = this._injector.get(__WEBPACK_IMPORTED_MODULE_5__authentication_service__["a" /* AuthenticationService */]);
                authService.reset();
                var route = error['rejection'].message || router.url;
                loginService.login(route);
            }
            else if (error['rejection'] instanceof __WEBPACK_IMPORTED_MODULE_4__shared_access_denied_error__["a" /* AccessDeniedError */]) {
                console.log('=> AppErrorHandlerService AccessDeniedError');
                var router = this._injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]);
                router.navigateByUrl('access-denied');
            }
        }
    };
    AppErrorHandlerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
    ], AppErrorHandlerService);
    return AppErrorHandlerService;
}());



/***/ }),

/***/ "./ClientApp/app/core/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_service__ = __webpack_require__("./ClientApp/app/core/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
    function AuthenticationService(_accountService, _router) {
        this._accountService = _accountService;
        this._router = _router;
        this._user = { isAuthenticated: false, details: null };
        this.updateState();
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
            // TODO: remove
            console.log('=> Authentication Service: logged in', _this._user);
        }, function (error) {
            // TODO: remove
            console.log('=> Authentication Service: error');
        });
    };
    AuthenticationService.prototype.logout = function () {
        this.reset();
        this._accountService.logout();
        this._router.navigateByUrl('');
    };
    AuthenticationService.prototype.updateState = function () {
        var _this = this;
        this.reset();
        this._accountService
            .getAuthenticationState()
            .subscribe(function (user) {
            _this._user = user;
        }, function (error) {
            // TODO: remove
            console.log('=> Authentication Service: error');
        });
    };
    //TODO: change
    AuthenticationService.prototype.reset = function () {
        this._user.isAuthenticated = false;
        this._user.details = null;
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__ = __webpack_require__("./ClientApp/app/core/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__("./ClientApp/app/core/header/header.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_1_angular_bootstrap_md__["a" /* MDBBootstrapModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NO_ERRORS_SCHEMA */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */]
            ],
            providers: []
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

module.exports = "<footer class=\"page-footer stylish-color center-on-small-only\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <h5 class=\"title\">Footer Content</h5>\r\n                <p>Here you can use rows and columns here to organize your footer content.</p>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <h5 class=\"title\">Links</h5>\r\n                <ul>\r\n                    <li><a class=\"white-text\">Link 1</a></li>\r\n                    <li><a class=\"white-text\">Link 2</a></li>\r\n                    <li><a class=\"white-text\">Link 3</a></li>\r\n                    <li><a class=\"white-text\">Link 4</a></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"footer-copyright\">\r\n        <div class=\"container-fluid\">\r\n            <i class=\"fa fa-copyright\"></i> 2017 Copyright: <a class=\"white-text\"> Copyright owner </a>\r\n        </div>\r\n    </div>\r\n</footer>"

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

module.exports = "<header>\r\n    <mdb-navbar SideClass=\"navbar fixed-top navbar-expand-lg navbar-dark stylish-color\" [containerInside]=\"true\">\r\n        <logo>\r\n            <a class=\"logo navbar-brand white-text\"><strong>Navbar</strong></a>\r\n        </logo>\r\n        <links>\r\n            <ul class=\"navbar-nav mr-auto\">\r\n                <li class=\"nav-item active waves-light\">\r\n                    <a class=\"nav-link\">Link1</a>\r\n                </li>\r\n                <li class=\"nav-item waves-light\" mdbRippleRadius>\r\n                    <a class=\"nav-link\">Link2</a>\r\n                </li>\r\n                <li class=\"nav-item waves-light\" mdbRippleRadius>\r\n                    <a class=\"nav-link\">Link3</a>\r\n                </li>\r\n            </ul>\r\n            <ul class=\"navbar-nav ml-auto\">\r\n                <li class=\"nav-item waves-light\" mdbRippleRadius>\r\n                    <a class=\"nav-link\"><i class=\"fa fa-sign-in\"></i> <span>Log In</span></a>\r\n                </li>\r\n            </ul>\r\n        </links>\r\n    </mdb-navbar>\r\n</header>"

/***/ }),

/***/ "./ClientApp/app/core/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./ClientApp/app/core/header/header.component.html"),
            styles: [__webpack_require__("./ClientApp/app/core/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./ClientApp/app/core/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
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


var LoginService = (function () {
    function LoginService() {
        this._loginEvents = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    Object.defineProperty(LoginService.prototype, "loginEvents", {
        get: function () {
            return this._loginEvents.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    LoginService.prototype.login = function (returnUrl) {
        this._loginEvents.next(returnUrl);
    };
    LoginService.prototype.ngOnDestroy = function () {
        this._loginEvents.unsubscribe();
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./ClientApp/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n    home works!\r\n</p>\r\n"

/***/ }),

/***/ "./ClientApp/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_root_outlet_resize_service__ = __webpack_require__("./ClientApp/app/shared/root-outlet-resize.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(_host, _rootOutletResizeService) {
        this._host = _host;
        this._rootOutletResizeService = _rootOutletResizeService;
        this.animated = true;
    }
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.checkHeight();
    };
    HomeComponent.prototype.checkHeight = function () {
        this._rootOutletResizeService.setHeight(this._host.nativeElement.offsetHeight);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('class.animated-container'),
        __metadata("design:type", Boolean)
    ], HomeComponent.prototype, "animated", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./ClientApp/app/home/home.component.html"),
            styles: [__webpack_require__("./ClientApp/app/home/home.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__shared_root_outlet_resize_service__["a" /* RootOutletResizeService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./ClientApp/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("./ClientApp/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./ClientApp/app/shared/access-denied.error.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessDeniedError; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_error_error__ = __webpack_require__("./ClientApp/app/shared/app-error.error.ts");
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
}(__WEBPACK_IMPORTED_MODULE_0__app_error_error__["a" /* AppError */]));



/***/ }),

/***/ "./ClientApp/app/shared/app-error.error.ts":
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

/***/ "./ClientApp/app/shared/not-authorized.error.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotAuthorizedError; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_error_error__ = __webpack_require__("./ClientApp/app/shared/app-error.error.ts");
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

var NotAuthorizedError = (function (_super) {
    __extends(NotAuthorizedError, _super);
    function NotAuthorizedError(message) {
        return _super.call(this, message) || this;
    }
    return NotAuthorizedError;
}(__WEBPACK_IMPORTED_MODULE_0__app_error_error__["a" /* AppError */]));



/***/ }),

/***/ "./ClientApp/app/shared/root-outlet-resize.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootOutletResizeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RootOutletResizeService = (function () {
    function RootOutletResizeService() {
        this._height = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](0);
    }
    Object.defineProperty(RootOutletResizeService.prototype, "height", {
        get: function () {
            return this._height.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    RootOutletResizeService.prototype.setHeight = function (value) {
        this._height.next(value);
    };
    RootOutletResizeService.prototype.ngOnDestroy = function () {
        this._height.unsubscribe();
    };
    RootOutletResizeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], RootOutletResizeService);
    return RootOutletResizeService;
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