"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var table_1 = require("@angular/material/table");
var emp_add_edit_component_1 = require("../emp-add-edit/emp-add-edit.component");
var core_2 = require("@angular/core");
var EmployesComponent = /** @class */ (function () {
    function EmployesComponent(_dialog, _empService, _coreService) {
        this._dialog = _dialog;
        this._empService = _empService;
        this._coreService = _coreService;
        this.displayedColumns = [
            'id',
            'firstName',
            'lastName',
            'email',
            'dob',
            'gender',
            'education',
            'company',
            'experience',
            'package',
            'action',
        ];
    }
    EmployesComponent.prototype.ngOnInit = function () {
        this.getEmployeeList();
    };
    EmployesComponent.prototype.openAddEditEmpForm = function () {
        var _this = this;
        var dialogRef = this._dialog.open(emp_add_edit_component_1.EmpAddEditComponent);
        dialogRef.afterClosed().subscribe({
            next: function (val) {
                if (val) {
                    _this.getEmployeeList();
                }
            }
        });
    };
    EmployesComponent.prototype.getEmployeeList = function () {
        var _this = this;
        this._empService.getEmployeeList().subscribe({
            next: function (res) {
                _this.dataSource = new table_1.MatTableDataSource(res);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
            },
            error: console.log
        });
    };
    EmployesComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    EmployesComponent.prototype.deleteEmployee = function (id) {
        var _this = this;
        this._empService.deleteEmployee(id).subscribe({
            next: function (res) {
                _this._coreService.openSnackBar('Employee deleted!', 'done');
                _this.getEmployeeList();
            },
            error: console.log
        });
    };
    EmployesComponent.prototype.openEditForm = function (data) {
        var _this = this;
        var dialogRef = this._dialog.open(emp_add_edit_component_1.EmpAddEditComponent, {
            data: data
        });
        dialogRef.afterClosed().subscribe({
            next: function (val) {
                if (val) {
                    _this.getEmployeeList();
                }
            }
        });
    };
    __decorate([
        core_2.ViewChild(paginator_1.MatPaginator)
    ], EmployesComponent.prototype, "paginator");
    __decorate([
        core_2.ViewChild(sort_1.MatSort)
    ], EmployesComponent.prototype, "sort");
    EmployesComponent = __decorate([
        core_1.Component({
            selector: 'app-employes',
            templateUrl: './employes.component.html',
            styleUrls: ['./employes.component.css']
        })
    ], EmployesComponent);
    return EmployesComponent;
}());
exports.EmployesComponent = EmployesComponent;

//# sourceMappingURL=employes.component.js.map
