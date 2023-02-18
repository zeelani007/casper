"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var CustomerDetailGuard = /** @class */ (function () {
    function CustomerDetailGuard(router) {
        this.router = router;
    }
    CustomerDetailGuard.prototype.canActivate = function (route) {
        var id = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            alert('Invalid customer Id');
            // start a new navigation to redirect to list page
            this.router.navigate(['/customers']);
            // abort current navigation
            return false;
        }
        ;
        return true;
    };
    CustomerDetailGuard = __decorate([
        core_1.Injectable()
    ], CustomerDetailGuard);
    return CustomerDetailGuard;
}());
exports.CustomerDetailGuard = CustomerDetailGuard;
var CustomerEditGuard = /** @class */ (function () {
    function CustomerEditGuard() {
    }
    CustomerEditGuard.prototype.canDeactivate = function (component) {
        if (component.customerForm.dirty) {
            var customerName = component.customerForm.get('firstname').value || 'New Customer';
            return confirm("Navigate away and lose all changes to " + customerName + "?");
        }
        return true;
    };
    CustomerEditGuard = __decorate([
        core_1.Injectable()
    ], CustomerEditGuard);
    return CustomerEditGuard;
}());
exports.CustomerEditGuard = CustomerEditGuard;

//# sourceMappingURL=customer-guard.service.js.map
