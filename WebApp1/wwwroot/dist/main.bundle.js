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

/***/ "./ClientApp/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__first_first_component__ = __webpack_require__("./ClientApp/app/first/first.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__second_second_component__ = __webpack_require__("./ClientApp/app/second/second.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'first', component: __WEBPACK_IMPORTED_MODULE_2__first_first_component__["a" /* FirstComponent */] },
    { path: 'second', component: __WEBPACK_IMPORTED_MODULE_3__second_second_component__["a" /* SecondComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-login></app-login>\r\n<app-register></app-register>\r\n\r\n<main class=\"text-center py-5 mt-3\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <p align=\"justify\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n    <button type=\"button\" (click)=\"login()\">login()</button>\r\n    <button type=\"button\" (click)=\"logout()\">logout()</button>\r\n    <button type=\"button\" (click)=\"auth()\">auth()</button>\r\n    <a class=\"btn btn-sm btn-warning\" routerLink=\"/\">/</a>\r\n    <a class=\"btn btn-sm btn-warning\" routerLink=\"/first\">/first</a>\r\n    <a class=\"btn btn-sm btn-warning\" routerLink=\"/second\">/second</a>\r\n</main>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./ClientApp/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_account_service__ = __webpack_require__("./ClientApp/app/core/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_login_service__ = __webpack_require__("./ClientApp/app/core/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//TODO: remove


var AppComponent = (function () {
    function AppComponent(_authRepo, _loginService) {
        this._authRepo = _authRepo;
        this._loginService = _loginService;
    }
    AppComponent.prototype.auth = function () {
        this._loginService.login('/first');
    };
    AppComponent.prototype.login = function () {
        this._authRepo.login('Admin', 'Secret#123')
            .subscribe(function () {
            console.log('=> login complete');
        }, function (error) {
            console.log('=> login error');
            for (var err in error) {
                console.log('   => ', err);
                for (var i in error[err]) {
                    console.log('     ', error[err][i]);
                }
            }
        });
    };
    AppComponent.prototype.logout = function () {
        this._authRepo.logout();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./ClientApp/app/app.component.html"),
            styles: [__webpack_require__("./ClientApp/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_2__core_login_service__["a" /* LoginService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_bootstrap_md__ = __webpack_require__("./node_modules/angular-bootstrap-md/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./ClientApp/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_core_module__ = __webpack_require__("./ClientApp/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./ClientApp/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__first_first_component__ = __webpack_require__("./ClientApp/app/first/first.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__second_second_component__ = __webpack_require__("./ClientApp/app/second/second.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// TODO: remove FirstComponent, SecondComponent




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__first_first_component__["a" /* FirstComponent */],
                __WEBPACK_IMPORTED_MODULE_7__second_second_component__["a" /* SecondComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2_angular_bootstrap_md__["a" /* MDBBootstrapModule */].forRoot()
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NO_ERRORS_SCHEMA */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var loginUrl = '/api/account/login';
var logoutUrl = '/api/account/logout';
var AccountService = (function () {
    function AccountService(_httpClient) {
        this._httpClient = _httpClient;
    }
    AccountService.prototype.login = function (userNameOrEmail, password) {
        return this._httpClient
            .post(loginUrl, { userNameOrEmail: userNameOrEmail, password: password })
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
        this._httpClient.post(logoutUrl, null).subscribe(function () { });
    };
    AccountService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./ClientApp/app/core/app-footer/app-footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/core/app-footer/app-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer fixed-bottom blue lighten-1 center-on-small-only\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <h5 class=\"title\">Footer Content</h5>\r\n                <p>Here you can use rows and columns here to organize your footer content.</p>\r\n            </div>\r\n\r\n            <div class=\"col-md-6\">\r\n                <h5 class=\"title\">Links</h5>\r\n                <ul>\r\n                    <li><a href=\"#\">Link 1</a></li>\r\n                    <li><a href=\"#\">Link 2</a></li>\r\n                    <li><a href=\"#\">Link 3</a></li>\r\n                    <li><a href=\"#\">Link 4</a></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"footer-copyright\">\r\n        <div class=\"container-fluid\">\r\n            <i class=\"fa fa-copyright\"></i> 2017 Copyright: <a href=\"#\"> Copyright owner </a>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./ClientApp/app/core/app-footer/app-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppFooterComponent = (function () {
    function AppFooterComponent() {
    }
    AppFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./ClientApp/app/core/app-footer/app-footer.component.html"),
            styles: [__webpack_require__("./ClientApp/app/core/app-footer/app-footer.component.css")]
        })
    ], AppFooterComponent);
    return AppFooterComponent;
}());



/***/ }),

/***/ "./ClientApp/app/core/app-header/app-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/core/app-header/app-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <mdb-navbar SideClass=\"navbar fixed-top navbar-expand-lg navbar-dark blue lighten-1\" [containerInside]=\"true\">\r\n        <logo>\r\n            <a class=\"logo navbar-brand\" href=\"#\"><strong>Navbar</strong></a>\r\n        </logo>\r\n        <links>\r\n            <ul class=\"navbar-nav mr-auto\">\r\n                <li class=\"nav-item active waves-light\">\r\n                    <a class=\"nav-link\">Link1</a>\r\n                </li>\r\n                <li class=\"nav-item waves-light\" mdbRippleRadius>\r\n                    <a class=\"nav-link\">Link2</a>\r\n                </li>\r\n                <li class=\"nav-item waves-light\" mdbRippleRadius>\r\n                    <a class=\"nav-link\">Link3</a>\r\n                </li>\r\n            </ul>\r\n            <ul class=\"navbar-nav ml-auto\">\r\n                <li class=\"nav-item waves-light\" mdbRippleRadius>\r\n                    <a class=\"nav-link\" (click)=\"login()\"><i class=\"fa fa-sign-in\"></i> <span>Log In</span></a>\r\n                </li>\r\n            </ul>\r\n        </links>\r\n    </mdb-navbar>\r\n</header>"

/***/ }),

/***/ "./ClientApp/app/core/app-header/app-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__("./ClientApp/app/core/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppHeaderComponent = (function () {
    function AppHeaderComponent(_loginService) {
        this._loginService = _loginService;
    }
    AppHeaderComponent.prototype.login = function () {
        this._loginService.login();
    };
    AppHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./ClientApp/app/core/app-header/app-header.component.html"),
            styles: [__webpack_require__("./ClientApp/app/core/app-header/app-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());



/***/ }),

/***/ "./ClientApp/app/core/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var loginUrl = '/api/account/login';
var logoutUrl = '/api/account/logout';
//TODO: change
var AuthenticationService = (function () {
    function AuthenticationService(httpClient) {
        this.httpClient = httpClient;
        this.resetAuthenticationState();
    }
    AuthenticationService.prototype.login = function (userNameOrEmail, password) {
        var _this = this;
        this.resetAuthenticationState();
        return this.httpClient
            .post(loginUrl, { userNameOrEmail: userNameOrEmail, password: password })
            .do(function () {
            _this.authenticated = true;
            _this.userNameOrEmail = userNameOrEmail;
        })
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
    AuthenticationService.prototype.logout = function () {
        this.resetAuthenticationState();
        this.httpClient.post(logoutUrl, null).subscribe(function () { });
    };
    AuthenticationService.prototype.resetAuthenticationState = function () {
        this.authenticated = false;
        this.userNameOrEmail = null;
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./ClientApp/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_bootstrap_md__ = __webpack_require__("./node_modules/angular-bootstrap-md/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_header_app_header_component__ = __webpack_require__("./ClientApp/app/core/app-header/app-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_footer_app_footer_component__ = __webpack_require__("./ClientApp/app/core/app-footer/app-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("./ClientApp/app/core/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register_component__ = __webpack_require__("./ClientApp/app/core/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__authentication_service__ = __webpack_require__("./ClientApp/app/core/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_service__ = __webpack_require__("./ClientApp/app/core/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__register_service__ = __webpack_require__("./ClientApp/app/core/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__account_service__ = __webpack_require__("./ClientApp/app/core/account.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_angular_bootstrap_md__["a" /* MDBBootstrapModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* ReactiveFormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_header_app_header_component__["a" /* AppHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_footer_app_footer_component__["a" /* AppFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__register_register_component__["a" /* RegisterComponent */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NO_ERRORS_SCHEMA */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__app_header_app_header_component__["a" /* AppHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_footer_app_footer_component__["a" /* AppFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__register_register_component__["a" /* RegisterComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__account_service__["a" /* AccountService */],
                __WEBPACK_IMPORTED_MODULE_9__authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_10__login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_11__register_service__["a" /* RegisterService */]
            ]
        })
    ], CoreModule);
    return CoreModule;
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

/***/ "./ClientApp/app/core/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/core/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div mdbModal #loginModal=\"mdb-modal\" class=\"modal fade\" id=\"modalLogin\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog cascading-modal\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header blue lighten-1 white-text\">\r\n                <h4 class=\"title\"><i class=\"fa fa-user\"></i> Log in</h4>\r\n                <button type=\"button\" class=\"close waves-effect waves-light\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">×</span>\r\n                </button>\r\n            </div>\r\n            <form class=\"modal-body\" novalidate [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n                <div class=\"md-form form-sm\">\r\n                    <i class=\"fa fa-envelope prefix\"></i>\r\n                    <input mdbActive type=\"text\" id=\"form30\" class=\"form-control\" formControlName=\"login\">\r\n                    <label for=\"form30\">Your username or email</label>\r\n                    <div class=\"text-center\">\r\n                        <small *ngFor=\"let msg of getValidationMessages('login')\" class=\"text-danger d-block\">{{msg}}</small>\r\n                    </div>\r\n                </div>\r\n                <div class=\"md-form form-sm\">\r\n                    <i class=\"fa fa-lock prefix\"></i>\r\n                    <input mdbActive type=\"password\" id=\"form31\" class=\"form-control\" formControlName=\"password\">\r\n                    <label for=\"form31\">Your password</label>\r\n                    <div class=\"text-center\">\r\n                        <small *ngFor=\"let msg of getValidationMessages('password')\" class=\"text-danger d-block\">{{msg}}</small>\r\n                    </div>\r\n                </div>\r\n                <div class=\"text-center\">\r\n                    <small *ngFor=\"let msg of getFormValidationMessages()\" class=\"text-danger d-block\">{{msg}}</small>\r\n                </div>\r\n                <div class=\"text-center mt-2\">\r\n                    <button type=\"submit\" class=\"btn btn-info waves-light\" mdbRippleRadius>Log in <i class=\"fa fa-sign-in ml-1\"></i></button>\r\n                </div>\r\n            </form>\r\n            <div class=\"modal-footer\">\r\n                <div class=\"options text-center text-md-right mt-1\">\r\n                    <p>Not a member? <a (click)=\"register()\">Sign Up</a></p>\r\n                    <p>Forgot <a>Password?</a></p>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-outline-info ml-auto\" data-dismiss=\"modal\" (click)=\"hideModal()\" mdbRippleRadius>Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/core/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_bootstrap_md__ = __webpack_require__("./node_modules/angular-bootstrap-md/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("./ClientApp/app/core/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_service__ = __webpack_require__("./ClientApp/app/core/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_service__ = __webpack_require__("./ClientApp/app/core/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
    function LoginComponent(_accountService, _loginService, _registerService, _router) {
        var _this = this;
        this._accountService = _accountService;
        this._loginService = _loginService;
        this._registerService = _registerService;
        this._router = _router;
        this._loginEventsSubscription = this._loginService.loginEvents.subscribe(function (returnUrl) {
            _this.showModal();
            if (returnUrl) {
                _this._returnUrl = returnUrl;
            }
        });
        this._loginForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            login: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].minLength(6)]))
        });
        this.reset();
    }
    Object.defineProperty(LoginComponent.prototype, "isModalShown", {
        get: function () {
            return this._loginModal.isShown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "loginForm", {
        get: function () {
            return this._loginForm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "loginControl", {
        get: function () {
            return this._loginForm.controls.login;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "passwordControl", {
        get: function () {
            return this._loginForm.controls.password;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._loginModal.onHide.subscribe(function () {
            _this.reset();
        });
    };
    LoginComponent.prototype.reset = function () {
        this._loginFormSubmitted = false;
        this._returnUrl = null;
        this._loginForm.reset();
    };
    LoginComponent.prototype.showModal = function () {
        this._loginModal.show();
    };
    LoginComponent.prototype.hideModal = function () {
        this._loginModal.hide();
    };
    LoginComponent.prototype.register = function () {
        this.hideModal();
        this._registerService.register();
    };
    LoginComponent.prototype.getValidationMessages = function (key) {
        var messages = [];
        if (this._loginFormSubmitted &&
            this._loginForm.controls[key].errors) {
            for (var error in this._loginForm.controls[key].errors) {
                switch (error) {
                    case 'required':
                        messages.push('The field is required.');
                        break;
                    case 'minlength':
                        messages.push('The field is at least 6 characters long.');
                        break;
                    default:
                        messages.push('Unknown error.');
                        break;
                }
            }
        }
        return messages;
    };
    LoginComponent.prototype.getFormValidationMessages = function () {
        if (this._loginFormSubmitted &&
            this._loginForm.errors &&
            this._loginForm.errors['']) {
            return this._loginForm.errors[''];
        }
        return [];
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this._loginFormSubmitted = true;
        if (this._loginForm.valid) {
            this._accountService.login(this._loginForm.controls.login.value, this._loginForm.controls.password.value)
                .subscribe(function () {
                if (_this._returnUrl) {
                    _this._router.navigateByUrl(_this._returnUrl);
                }
                _this.hideModal();
            }, function (error) {
                if (error) {
                    if (!_this._loginForm.errors) {
                        _this._loginForm.setErrors(error);
                    }
                }
            });
        }
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this._loginEventsSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('loginModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_angular_bootstrap_md__["b" /* ModalDirective */])
    ], LoginComponent.prototype, "_loginModal", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./ClientApp/app/core/login/login.component.html"),
            styles: [__webpack_require__("./ClientApp/app/core/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_3__register_service__["a" /* RegisterService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./ClientApp/app/core/register.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
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


var RegisterService = (function () {
    function RegisterService() {
        this._registerEvents = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    Object.defineProperty(RegisterService.prototype, "registerEvents", {
        get: function () {
            return this._registerEvents.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    RegisterService.prototype.register = function () {
        this._registerEvents.next();
    };
    RegisterService.prototype.ngOnDestroy = function () {
        this._registerEvents.unsubscribe();
    };
    RegisterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./ClientApp/app/core/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/core/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div mdbModal #registerModal=\"mdb-modal\" class=\"modal fade\" id=\"modalRegister\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog cascading-modal\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header blue lighten-1 white-text\">\r\n                <h4 class=\"title\"><i class=\"fa fa-user-plus\"></i> Register</h4>\r\n                <button type=\"button\" class=\"close waves-effect waves-light\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n                    <span aria-hidden=\"true\">×</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"md-form form-sm\">\r\n                    <i class=\"fa fa-envelope prefix\"></i>\r\n                    <input mdbActive type=\"text\" id=\"form32\" class=\"form-control\">\r\n                    <label for=\"form32\">Your email</label>\r\n                </div>\r\n                <div class=\"md-form form-sm\">\r\n                    <i class=\"fa fa-lock prefix\"></i>\r\n                    <input mdbActive type=\"password\" id=\"form33\" class=\"form-control\">\r\n                    <label for=\"form33\">Your password</label>\r\n                </div>\r\n                <div class=\"md-form form-sm\">\r\n                    <i class=\"fa fa-lock prefix\"></i>\r\n                    <input mdbActive type=\"password\" id=\"form34\" class=\"form-control\">\r\n                    <label for=\"form34\">Repeat password</label>\r\n                </div>\r\n                <div class=\"text-center mt-2\">\r\n                    <button class=\"btn btn-info waves-light\" mdbRippleRadius>Sign up <i class=\"fa fa-sign-in ml-1\"></i></button>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <div class=\"options text-center text-md-right mt-1\">\r\n                    <p>Already have an account? <a (click)=\"login()\">Log In</a></p>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-outline-info ml-auto\" data-dismiss=\"modal\" (click)=\"hideModal()\" mdbRippleRadius>Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/core/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_bootstrap_md__ = __webpack_require__("./node_modules/angular-bootstrap-md/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("./ClientApp/app/core/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_service__ = __webpack_require__("./ClientApp/app/core/register.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(_loginService, _registerService) {
        var _this = this;
        this._loginService = _loginService;
        this._registerService = _registerService;
        this._registerEventsSubscription = this._registerService.registerEvents.subscribe(function () {
            _this.showModal();
        });
    }
    Object.defineProperty(RegisterComponent.prototype, "isModalShown", {
        get: function () {
            return this._registerModal.isShown;
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.showModal = function () {
        this._registerModal.show();
    };
    RegisterComponent.prototype.hideModal = function () {
        this._registerModal.hide();
    };
    RegisterComponent.prototype.login = function () {
        this.hideModal();
        this._loginService.login();
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        this._registerEventsSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('registerModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_angular_bootstrap_md__["b" /* ModalDirective */])
    ], RegisterComponent.prototype, "_registerModal", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./ClientApp/app/core/register/register.component.html"),
            styles: [__webpack_require__("./ClientApp/app/core/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_3__register_service__["a" /* RegisterService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./ClientApp/app/first/first.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n    first works!\r\n</p>\r\n"

/***/ }),

/***/ "./ClientApp/app/first/first.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/first/first.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstComponent; });
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

var FirstComponent = (function () {
    function FirstComponent() {
    }
    FirstComponent.prototype.ngOnInit = function () {
    };
    FirstComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-first',
            template: __webpack_require__("./ClientApp/app/first/first.component.html"),
            styles: [__webpack_require__("./ClientApp/app/first/first.component.scss")]
        })
        //TODO: remove
        ,
        __metadata("design:paramtypes", [])
    ], FirstComponent);
    return FirstComponent;
}());



/***/ }),

/***/ "./ClientApp/app/second/second.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n    second works!\r\n</p>\r\n"

/***/ }),

/***/ "./ClientApp/app/second/second.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/second/second.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondComponent; });
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

var SecondComponent = (function () {
    function SecondComponent() {
    }
    SecondComponent.prototype.ngOnInit = function () {
    };
    SecondComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-second',
            template: __webpack_require__("./ClientApp/app/second/second.component.html"),
            styles: [__webpack_require__("./ClientApp/app/second/second.component.scss")]
        })
        // TODO: remove
        ,
        __metadata("design:paramtypes", [])
    ], SecondComponent);
    return SecondComponent;
}());



/***/ }),

/***/ "./ClientApp/boot.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__("./ClientApp/app/app.module.ts");


var bootApplication = function () {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
};
if (true) {
    module["hot"].accept();
    module["hot"].dispose(function () {
        var oldRootElem = document.querySelector("app-root");
        var newRootElem = document.createElement("app-root");
        oldRootElem.parentNode.insertBefore(newRootElem, oldRootElem);
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().destroy();
    });
}
if (document.readyState === "complete") {
    bootApplication();
}
else {
    document.addEventListener("DOMContentLoaded", bootApplication);
}


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/webpack-hot-middleware/client.js?path=__webpack_hmr&dynamicPublicPath=true");
module.exports = __webpack_require__("./ClientApp/boot.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map