"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var customer_list_component_1 = require("./customer-list.component");
var customer_guard_service_1 = require("./customer-guard.service");
var customer_form_component_1 = require("./customer-form.component");
var customer_service_1 = require("./customer.service");
var shared_module_1 = require("../shared/shared.module");
var material_module_1 = require("../shared/material.module");
var CustomerModule = /** @class */ (function () {
    function CustomerModule() {
    }
    CustomerModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                // ReactiveFormsModule,
                material_module_1.MaterialModule,
                router_1.RouterModule.forChild([
                    { path: "", component: customer_list_component_1.CustomerListComponent },
                    {
                        path: "new/",
                        canDeactivate: [customer_guard_service_1.CustomerEditGuard],
                        component: customer_form_component_1.CustomerFormComponent
                    },
                    {
                        path: "edit/:id",
                        canDeactivate: [customer_guard_service_1.CustomerEditGuard],
                        component: customer_form_component_1.CustomerFormComponent
                    }
                ])
            ],
            declarations: [
                /**
                 * Components / Directives/ Pipes
                 */
                customer_list_component_1.CustomerListComponent,
                customer_form_component_1.CustomerFormComponent
            ],
            providers: [customer_service_1.CustomerService, customer_guard_service_1.CustomerDetailGuard, customer_guard_service_1.CustomerEditGuard,
            ],
            // entryComponents: [MatOption],
            exports: [
                customer_list_component_1.CustomerListComponent,
                customer_form_component_1.CustomerFormComponent,
            ]
        })
    ], CustomerModule);
    return CustomerModule;
}());
exports.CustomerModule = CustomerModule;

//# sourceMappingURL=customer.module.js.map
