"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/map");
require("rxjs/add/observable/of");
var CustomerService = /** @class */ (function () {
    function CustomerService(http, backend) {
        this.http = http;
        this.backend = backend;
        this.basicAction = 'customers/';
    }
    CustomerService.prototype.getCustomers = function () {
        return this.backend.getAll(this.basicAction)
            .map(this.extractData)["catch"](this.handleError);
    };
    CustomerService.prototype.getCustomer = function (id) {
        if (id === 0) {
            return Observable_1.Observable.of(this.initializeCustomer());
        }
        ;
        var action = "" + this.basicAction + id;
        return this.backend.getById(action)
            .map(this.extractData)["catch"](this.handleError);
    };
    CustomerService.prototype.deleteCustomer = function (id) {
        var action = "" + this.basicAction + id;
        return this.backend["delete"](action)["catch"](this.handleError);
    };
    CustomerService.prototype.saveCustomer = function (customer) {
        if (customer.id === 0) {
            return this.createCustomer(customer);
        }
        return this.updateCustomer(customer);
    };
    CustomerService.prototype.createCustomer = function (customer) {
        customer.id = undefined;
        return this.backend.create(this.basicAction, customer)
            .map(this.extractData)["catch"](this.handleError);
    };
    CustomerService.prototype.updateCustomer = function (customer) {
        var action = "" + this.basicAction + customer.id;
        return this.backend.update(action, customer)
            .map(function () { return customer; })["catch"](this.handleError);
    };
    CustomerService.prototype.extractData = function (response) {
        var body = response.json ? response.json() : response;
        return body.data ? body.data : (body || {});
    };
    CustomerService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable["throw"](error.json() || 'Server error');
    };
    CustomerService.prototype.initializeCustomer = function () {
        // Return an initialized object
        return {
            id: 0,
            avatar: null,
            firstname: null,
            lastname: null,
            rewards: 0,
            email: null,
            membership: false,
            mobile: null,
            phone: null
        };
    };
    CustomerService = __decorate([
        core_1.Injectable()
    ], CustomerService);
    return CustomerService;
}());
exports.CustomerService = CustomerService;

//# sourceMappingURL=customer.service.js.map
