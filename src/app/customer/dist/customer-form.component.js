"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/observable/fromEvent");
require("rxjs/add/observable/merge");
var Observable_1 = require("rxjs/Observable");
var number_validator_1 = require("../shared/number.validator");
var generic_validator_1 = require("../shared/generic-validator");
var layout_1 = require("@angular/cdk/layout");
var CustomerFormComponent = /** @class */ (function () {
    function CustomerFormComponent(fb, route, router, customerService, breakpointObserver) {
        var _this = this;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.customerService = customerService;
        this.breakpointObserver = breakpointObserver;
        this.pageTitle = 'Update Customer';
        this.customer = {};
        this.imageWidth = 100;
        this.imageMargin = 2;
        this.fieldColspan = 3;
        // Use with the generic validation message class
        this.displayMessage = {};
        // Defines all of the validation messages for the form.
        // These could instead be retrieved from a file or database.
        this.validationMessages = {
            firstname: {
                required: 'Customer first name is required.',
                minlength: 'Customer first name must be at least one characters.',
                maxlength: 'Customer first name cannot exceed 100 characters.'
            },
            lastname: {
                required: 'Customer last name is required.',
                minlength: 'Customer last name must be at least one characters.',
                maxlength: 'Customer last name cannot exceed 100 characters.'
            },
            email: {
                required: 'Customer email is required.',
                minlength: 'Customer email must be at least one characters.',
                maxlength: 'Customer email cannot exceed 200 characters.'
            },
            rewards: {
                range: 'Rewards of the customer must be between 0 (lowest) and 150 (highest).'
            },
            phone: { maxlength: 'Customer phone cannot exceed 12 characters.' },
            mobile: { maxlength: 'Customer mobile cannot exceed 12 characters.' }
        };
        breakpointObserver.observe([
            layout_1.Breakpoints.HandsetLandscape,
            layout_1.Breakpoints.HandsetPortrait
        ]).subscribe(function (result) {
            // console.log(result)
            _this.onScreensizeChange(result);
        });
        this.genericValidator = new generic_validator_1.GenericValidator(this.validationMessages);
    }
    CustomerFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerForm = this.fb.group({
            firstname: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(100)]],
            lastname: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(100)]],
            email: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(200)]],
            rewards: ['', number_validator_1.NumberValidators.range(0, 150)],
            phone: ['', forms_1.Validators.maxLength(12)],
            mobile: ['', forms_1.Validators.maxLength(12)],
            membership: false
        });
        // Read the customer Id from the route parameter
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getCustomer(id);
        });
        this.sub.add(null);
    };
    CustomerFormComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CustomerFormComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Watch for the blur event from any input element on the form.
        var controlBlurs = this.formInputElements
            .map(function (formControl) { return Observable_1.Observable.fromEvent(formControl.nativeElement, 'blur'); });
        // Merge the blur event observable with the valueChanges observable
        Observable_1.Observable.merge.apply(Observable_1.Observable, __spreadArrays([this.customerForm.valueChanges], controlBlurs)).debounceTime(500).subscribe(function (value) {
            _this.displayMessage = _this.genericValidator.processMessages(_this.customerForm);
        });
    };
    CustomerFormComponent.prototype.getCustomer = function (id) {
        var _this = this;
        this.customerService.getCustomer(id)
            .subscribe(function (customer) { return _this.onCustomerRetrieved(customer); }, function (error) { return _this.errorMessage = error; });
    };
    CustomerFormComponent.prototype.onCustomerRetrieved = function (customer) {
        if (this.customerForm) {
            this.customerForm.reset();
        }
        this.customer = customer;
        if (this.customer.id === 0) {
            this.pageTitle = 'New Customer';
        }
        else {
            this.pageTitle = "Customer: " + this.customer.firstname + " " + this.customer.lastname;
        }
        // Update the data on the form
        this.customerForm.patchValue({
            firstname: this.customer.firstname,
            lastname: this.customer.lastname,
            email: this.customer.email,
            rewards: this.customer.rewards,
            phone: this.customer.phone,
            mobile: this.customer.mobile,
            membership: this.customer.membership
        });
    };
    CustomerFormComponent.prototype.deleteCustomer = function () {
        var _this = this;
        if (this.customer.id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete();
        }
        else {
            if (confirm("Really delete the customer: " + this.customer.firstname + "?")) {
                this.customerService.deleteCustomer(this.customer.id)
                    .subscribe(function () { return _this.onSaveComplete(); }, function (error) { return _this.errorMessage = error; });
            }
        }
    };
    CustomerFormComponent.prototype.toggleImage = function () {
        event.preventDefault();
        this.showImage = !this.showImage;
    };
    CustomerFormComponent.prototype.saveCustomer = function () {
        var _this = this;
        if (this.customerForm.dirty && this.customerForm.valid) {
            // Copy the form values over the customer object values
            var customer = Object.assign({}, this.customer, this.customerForm.value);
            this.customerService.saveCustomer(customer)
                .subscribe(function () { return _this.onSaveComplete(); }, function (error) { return _this.errorMessage = error; });
        }
        else if (!this.customerForm.dirty) {
            this.onSaveComplete();
        }
    };
    CustomerFormComponent.prototype.onSaveComplete = function () {
        // Reset the form to clear the flags
        this.customerForm.reset();
        this.router.navigate(['/customers']);
    };
    CustomerFormComponent.prototype.onScreensizeChange = function (result) {
        // debugger
        var isLess600 = this.breakpointObserver.isMatched('(max-width: 599px)');
        var isLess1000 = this.breakpointObserver.isMatched('(max-width: 959px)');
        console.log(" isLess600  " + isLess600 + " \n            isLess1000 " + isLess1000 + "  ");
        if (isLess1000) {
            if (isLess600) {
                this.fieldColspan = 12;
            }
            else {
                this.fieldColspan = 6;
            }
        }
        else {
            this.fieldColspan = 3;
        }
    };
    __decorate([
        core_1.ViewChildren(forms_1.FormControlName, { read: core_1.ElementRef })
    ], CustomerFormComponent.prototype, "formInputElements");
    CustomerFormComponent = __decorate([
        core_1.Component({
            selector: 'customer-form',
            templateUrl: './customer-form.component.html',
            styles: ["\n    .title-spacer {\n        flex: 1 1 auto;\n      }\n    .form-field{\n        width: 100%;\n        margin-left: 20px;\n        margin-right: 20px;\n    }\n    .avatar-field {\n        left: 0;\n        margin: 0 auto;\n        position: absolute;\n        margin-left: 50px;\n    }\n    "]
        })
    ], CustomerFormComponent);
    return CustomerFormComponent;
}());
exports.CustomerFormComponent = CustomerFormComponent;

//# sourceMappingURL=customer-form.component.js.map
