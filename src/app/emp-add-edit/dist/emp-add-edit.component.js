"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var EmpAddEditComponent = /** @class */ (function () {
    function EmpAddEditComponent(_fb, _empService, _dialogRef, data, _coreService) {
        this._fb = _fb;
        this._empService = _empService;
        this._dialogRef = _dialogRef;
        this.data = data;
        this._coreService = _coreService;
        this.profile = [
            'UI DESIGNER',
            'GRAPHIC DESIGNER',
            'BACKEND DEVELOPER',
            'DIGITAL MARKETING',
            'FRONT-END DEVELOPER',
        ];
        this.company = [
            'Kasper Infotech pvt ltd',
        ];
        this.empForm = this._fb.group({
            firstName: '',
            lastName: '',
            email: '',
            dob: '',
            gender: '',
            profile: '',
            company: '',
            experience: '',
            package: ''
        });
    }
    EmpAddEditComponent.prototype.ngOnInit = function () {
        this.empForm.patchValue(this.data);
    };
    EmpAddEditComponent.prototype.onFormSubmit = function () {
        var _this = this;
        if (this.empForm.valid) {
            if (this.data) {
                this._empService
                    .updateEmployee(this.data.id, this.empForm.value)
                    .subscribe({
                    next: function (val) {
                        _this._coreService.openSnackBar('Employee detail updated!');
                        _this._dialogRef.close(true);
                    },
                    error: function (err) {
                        console.error(err);
                    }
                });
            }
            else {
                this._empService.addEmployee(this.empForm.value).subscribe({
                    next: function (val) {
                        _this._coreService.openSnackBar('Employee added successfully');
                        _this._dialogRef.close(true);
                    },
                    error: function (err) {
                        console.error(err);
                    }
                });
            }
        }
    };
    EmpAddEditComponent = __decorate([
        core_1.Component({
            selector: 'app-emp-add-edit',
            templateUrl: './emp-add-edit.component.html',
            styleUrls: ['./emp-add-edit.component.css']
        }),
        __param(3, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], EmpAddEditComponent);
    return EmpAddEditComponent;
}());
exports.EmpAddEditComponent = EmpAddEditComponent;

//# sourceMappingURL=emp-add-edit.component.js.map
