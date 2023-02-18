"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var EmployeeService = /** @class */ (function () {
    function EmployeeService(_http) {
        this._http = _http;
    }
    EmployeeService.prototype.addEmployee = function (data) {
        return this._http.post('http://localhost:3000/employees', data);
    };
    EmployeeService.prototype.updateEmployee = function (id, data) {
        return this._http.put("http://localhost:3000/employees/" + id, data);
    };
    EmployeeService.prototype.getEmployeeList = function () {
        return this._http.get('http://localhost:3000/employees');
    };
    EmployeeService.prototype.deleteEmployee = function (id) {
        return this._http["delete"]("http://localhost:3000/employees/" + id);
    };
    EmployeeService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;

//# sourceMappingURL=employee.services.js.map
