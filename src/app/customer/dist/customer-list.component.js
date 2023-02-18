"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var shared_1 = require("../shared");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var table_1 = require("@angular/material/table");
var CustomerListComponent = /** @class */ (function () {
    function CustomerListComponent(customerService, 
    // private pagerService: PagerService,
    dialog, snackBar) {
        this.customerService = customerService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.pageTitle = 'Customers';
        this.imageWidth = 30;
        this.imageMargin = 2;
        this.showImage = false;
        this.listFilter = {};
        this.displayedColumns = ["avatar", "firstname", "lastname", "rewards", "email", "membership", "id"];
        this.dataSource = null;
        this.pager = {};
        this.searchFilter = {
            firstname: "",
            lastname: "",
            email: ""
        };
    }
    CustomerListComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    CustomerListComponent.prototype.freshDataList = function (customers) {
        this.customers = customers;
        this.dataSource = new table_1.MatTableDataSource(this.customers);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    CustomerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerService.getCustomers()
            .subscribe(function (customers) {
            _this.freshDataList(customers);
        }, function (error) { return _this.errorMessage = error; });
        this.searchFilter = {};
        this.listFilter = {};
    };
    CustomerListComponent.prototype.getCustomers = function (pageNum) {
        var _this = this;
        this.customerService.getCustomers()
            .subscribe(function (customers) {
            _this.freshDataList(customers);
        }, function (error) { return _this.errorMessage = error; });
    };
    CustomerListComponent.prototype.searchCustomers = function (filters) {
        var _this = this;
        if (filters) {
            this.customerService.getCustomers()
                .subscribe(function (customers) {
                _this.customers = customers;
                console.log(_this.customers.length);
                _this.customers = _this.customers.filter(function (customer) {
                    var match = true;
                    Object.keys(filters).forEach(function (k) {
                        match = match && filters[k] ?
                            customer[k].toLocaleLowerCase().indexOf(filters[k].toLocaleLowerCase()) > -1 : match;
                    });
                    return match;
                });
                _this.freshDataList(customers);
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    CustomerListComponent.prototype.resetListFilter = function () {
        this.listFilter = {};
        this.getCustomers();
    };
    CustomerListComponent.prototype.reset = function () {
        this.listFilter = {};
        this.searchFilter = {};
        this.getCustomers();
    };
    CustomerListComponent.prototype.resetSearchFilter = function (searchPanel) {
        searchPanel.toggle();
        this.searchFilter = {};
        this.getCustomers();
    };
    CustomerListComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 1500
        });
    };
    CustomerListComponent.prototype.openDialog = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(shared_1.ConfirmDialog, { data: { title: 'Dialog', message: 'Are you sure to delete this item?' } });
        dialogRef.disableClose = true;
        dialogRef.afterClosed().subscribe(function (result) {
            _this.selectedOption = result;
            if (_this.selectedOption === dialogRef.componentInstance.ACTION_CONFIRM) {
                _this.customerService.deleteCustomer(id).subscribe(function () {
                    _this.customerService.getCustomers()
                        .subscribe(function (customers) {
                        _this.freshDataList(customers);
                    }, function (error) { return _this.errorMessage = error; });
                    _this.openSnackBar("The item has been deleted successfully. ", "Close");
                }, function (error) {
                    _this.errorMessage = error;
                    console.log(_this.errorMessage);
                    _this.openSnackBar("This item has not been deleted successfully. Please try again.", "Close");
                });
            }
        });
    };
    __decorate([
        core_1.ViewChild(paginator_1.MatPaginator)
    ], CustomerListComponent.prototype, "paginator");
    __decorate([
        core_1.ViewChild(sort_1.MatSort)
    ], CustomerListComponent.prototype, "sort");
    CustomerListComponent = __decorate([
        core_1.Component({
            selector: 'customer-list',
            templateUrl: './customer-list.component.html',
            styleUrls: ['./customer-list.component.css'],
            providers: [shared_1.ConfirmDialog]
        })
    ], CustomerListComponent);
    return CustomerListComponent;
}());
exports.CustomerListComponent = CustomerListComponent;

//# sourceMappingURL=customer-list.component.js.map
