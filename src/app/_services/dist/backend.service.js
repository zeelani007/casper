"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var demo_db_1 = require("./demo.db");
// import { AuthenticationService } from '.';
var BackendService = /** @class */ (function () {
    function BackendService(http, location) {
        this.http = http;
        this.location = location;
        this.baseUrl = "";
        // console.log(http);
        // this.location.prepareExternalUrl(this.baseUrl);
        this.ds = Object.assign({}, demo_db_1["default"]) || {};
        console.log(this.ds);
    }
    BackendService.prototype.getModel = function (action) {
        if (action.includes('?') && action.includes('/')) {
            return action.indexOf('?') > action.indexOf('/') ? action.substring(0, action.indexOf('/')) : action.substring(0, action.indexOf('?'));
        }
        else {
            return action.includes('?') ? action.substring(0, action.indexOf('?')) : action.substring(0, action.indexOf('/'));
        }
    };
    BackendService.prototype.getId = function (action, model) {
        action = action.substr(model.length + 1);
        return action.length > 0 && (action.includes('?') ? action.substring(0, action.indexOf('?')) : action);
    };
    BackendService.prototype.getExpand = function (action, model) {
        action = action.substr(action.indexOf('?'));
        return action.includes('_expand') ? (action.includes('&') ?
            action.substring('_expand='.length + 1, action.indexOf('&')) :
            action.substring('_expand='.length + 1)) : undefined;
    };
    BackendService.prototype.getEmbed = function (action) {
        return action.includes('?') ? action.substring(action.indexOf('/'), action.indexOf('?')) : action.substring(action.indexOf('/'));
    };
    BackendService.prototype.getData = function (action) {
        var self = this;
        return new Promise(function (resolve, reject) {
            var model = self.getModel(action);
            var idStr = self.getId(action, model);
            var id = isNaN(idStr) ? undefined : parseInt(idStr);
            var exp = self.getExpand(action, model);
            var expandModel = exp ? exp === "category" ? "categories" : exp + "s" : exp;
            var embed = self.getEmbed(action);
            console.log(model);
            var result;
            var expand, expandId;
            console.log(expandModel);
            if (model in self.ds) {
                if (id) {
                    result = self.ds[model][self.ds[model].findIndex(function (d) { return d.id === id; })];
                    if (expandModel) {
                        expand = expandModel === "categories" ? "category" : expandModel.substr(0, expandModel.length - 1);
                        expandId = result[expand + "Id"];
                        result[expand] = self.ds[expandModel][self.ds[expandModel].findIndex(function (d) { return d.id === expandId; })];
                    }
                }
                else {
                    result = self.ds[model].map(function (m) {
                        if (expandModel) {
                            expand = expandModel === "categories" ? "category" : expandModel.substr(0, expandModel.length - 1);
                            expandId = m[expand + "Id"];
                            m[expand] = self.ds[expandModel][self.ds[expandModel].findIndex(function (d) { return d.id === expandId; })];
                        }
                        return m;
                    });
                }
            }
            setTimeout(resolve, 200, { data: result });
        });
    };
    BackendService.prototype.getAll = function (action) {
        return Rx_1.Observable.fromPromise(this.getData(action));
    };
    BackendService.prototype.getByQuery = function (action) {
        return Rx_1.Observable.fromPromise(this.getData(action));
    };
    BackendService.prototype.getById = function (action) {
        // const url = `${this.baseUrl}${action}`
        // return this.http.get(url, this.jwt()).map((response: Response) => response.json());
        return Rx_1.Observable.fromPromise(this.getData(action));
    };
    BackendService.prototype.create = function (action, data) {
        return Rx_1.Observable.fromPromise(new Promise(function (resolve, reject) {
            var model = this.getModel(action);
            data.id = this.ds[model] + 1;
            this.ds[model].push(data);
            setTimeout(resolve, 200, { data: data });
        }));
    };
    BackendService.prototype.update = function (action, data) {
        return Rx_1.Observable.fromPromise(new Promise(function (resolve, reject) {
            var model = this.getModel(action);
            var idx = this.ds[model].findIndex(function (d) { return d.id === data.id; });
            this.ds[model][idx] = Object.assign({}, data);
            setTimeout(resolve, 200, { data: data });
        }));
    };
    BackendService.prototype["delete"] = function (action) {
        return Rx_1.Observable.fromPromise(new Promise(function (resolve, reject) {
            var model = this.getModel(action);
            var id = this.getId();
            id && this.ds[model].splice(this.ds[model].findIndex(function (d) { return d.id === id; }));
            setTimeout(resolve, 200, { status: 200 });
        }));
    };
    BackendService.prototype.login = function (action, user) {
        var self = this;
        console.log(this.ds);
        return Rx_1.Observable.fromPromise(new Promise(function (resolve, reject) {
            var _a = self.ds.token, access_token = _a.access_token, user = _a.user;
            setTimeout(resolve, 200, {
                // data: {
                access_token: access_token,
                user: user
                // }
            });
        }));
    };
    BackendService = __decorate([
        core_1.Injectable()
    ], BackendService);
    return BackendService;
}());
exports.BackendService = BackendService;

//# sourceMappingURL=backend.service.js.map
