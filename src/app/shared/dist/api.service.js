"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
// import { map } from 'rxjs';
var ApiService = /** @class */ (function () {
    function ApiService(_http) {
        this._http = _http;
    }
    // Post Method For Add Student
    ApiService.prototype.postStudent = function (data) {
        return this._http.post("http://localhost:3000/customer", data).pipe((function (res) {
            return res;
        }));
    };
    // Get Method For All Student
    ApiService.prototype.getStudent = function () {
        return this._http.get("http://localhost:3000/customer").pipe((function (res) {
            return res;
        }));
    };
    // Put Method For Update Student
    ApiService.prototype.putStudent = function (data, id) {
        return this._http.put("http://localhost:3000/customer/" + id, data).pipe((function (res) {
            return res;
        }));
    };
    // Delete Method For Update Student
    ApiService.prototype.deleteStudent = function (id) {
        return this._http["delete"]("http://localhost:3000/customer/" + id).pipe((function (res) {
            return res;
        }));
    };
    ApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;

//# sourceMappingURL=api.service.js.map
