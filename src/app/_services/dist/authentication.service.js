"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var APP_USER_PROFILE = "NG_CRM_USER_2.0";
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, backend) {
        this.http = http;
        this.backend = backend;
    }
    AuthenticationService.prototype.login = function (user) {
        return this.backend.login('token', user)
            .map(function (response) {
            // login successful if there's a token in the response
            var data = response;
            var user = data.user;
            if (user && data.access_token) {
                // store user details and token in local storage to keep user logged in between page refreshes
                user.token = data.access_token;
                user.isAuthenticated = true;
                localStorage.setItem(APP_USER_PROFILE, JSON.stringify(user));
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem(APP_USER_PROFILE);
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        var user = this.getUser(); // <User>JSON.parse(localStorage.getItem(APP_USER_PROFILE));
        return user && user.isAuthenticated ? true : false;
    };
    AuthenticationService.prototype.getUser = function () {
        var user = JSON.parse(localStorage.getItem(APP_USER_PROFILE));
        return user;
    };
    AuthenticationService = __decorate([
        core_1.Injectable()
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;

//# sourceMappingURL=authentication.service.js.map
