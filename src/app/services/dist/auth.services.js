"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.apiurl = 'http://localhost:3000/user';
    }
    AuthService.prototype.RegisterUser = function (inputdata) {
        return this.http.post(this.apiurl, inputdata);
    };
    AuthService.prototype.GetUserbyCode = function (id) {
        return this.http.get(this.apiurl + '/' + id);
    };
    AuthService.prototype.Getall = function () {
        return this.http.get(this.apiurl);
    };
    AuthService.prototype.updateuser = function (id, inputdata) {
        return this.http.put(this.apiurl + '/' + id, inputdata);
    };
    AuthService.prototype.getuserrole = function () {
        return this.http.get('http://localhost:3000/role');
    };
    AuthService.prototype.isloggedin = function () {
        return sessionStorage.getItem('username') != null;
    };
    AuthService.prototype.getrole = function () {
        var _a;
        return sessionStorage.getItem('role') != null ? (_a = sessionStorage.getItem('role')) === null || _a === void 0 ? void 0 : _a.toString() : '';
    };
    AuthService.prototype.GetAllCustomer = function () {
        return this.http.get('http://localhost:3000/customer');
    };
    AuthService.prototype.Getaccessbyrole = function (role, menu) {
        return this.http.get('http://localhost:3000/roleaccess?role=' + role + '&menu=' + menu);
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;

//# sourceMappingURL=auth.services.js.map
