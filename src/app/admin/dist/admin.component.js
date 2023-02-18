"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var AdminComponent = /** @class */ (function () {
    function AdminComponent(route) {
        this.route = route;
        this.isadmin = false;
        this.isMenuVisible = false;
        var role = sessionStorage.getItem('role');
        if (role == 'admin') {
            this.isadmin = true;
        }
    }
    AdminComponent.prototype.ngDoCheck = function () {
        var currentroute = this.route.url;
        var role = sessionStorage.getItem('role');
        if (currentroute == '/login' || currentroute == '/register') {
            this.isMenuVisible = false;
        }
        else {
            this.isMenuVisible = true;
        }
        if (role == 'admin') {
            this.isadmin = true;
        }
        else {
            this.isadmin = false;
        }
    };
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'app-admin',
            templateUrl: './admin.component.html',
            styleUrls: ['./admin.component.css']
        })
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;

//# sourceMappingURL=admin.component.js.map
