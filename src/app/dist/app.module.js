"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var material_module_1 = require("./shared/material.module");
var shared_module_1 = require("./shared/shared.module");
var login_1 = require("./login");
var _services_1 = require("./_services");
var http_1 = require("@angular/common/http");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var ng2_charts_1 = require("ng2-charts");
var about_1 = require("./about");
var notfoundpage_1 = require("./notfoundpage");
var dialog_component_1 = require("./shared/dialog.component");
var loading_1 = require("./loading");
var _guard_1 = require("./_guard");
var employes_component_1 = require("./employes/employes.component");
var emp_add_edit_component_1 = require("./emp-add-edit/emp-add-edit.component");
var core_component_1 = require("./core/core.component");
var toolbar_1 = require("@angular/material/toolbar");
var mewemploye_component_1 = require("./mewemploye/mewemploye.component");
var mewempform_component_1 = require("./mewempform/mewempform.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                login_1.LoginComponent,
                dashboard_component_1.DashboardComponent,
                about_1.AboutComponent,
                notfoundpage_1.NotFoundPageComponent,
                dialog_component_1.ConfirmDialog,
                loading_1.LoadingComponent,
                app_component_1.AppComponent,
                employes_component_1.EmployesComponent,
                emp_add_edit_component_1.EmpAddEditComponent,
                core_component_1.CoreComponent,
                mewemploye_component_1.MewemployeComponent,
                mewempform_component_1.MewempformComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                shared_module_1.SharedModule,
                material_module_1.MaterialModule,
                http_1.HttpClientModule,
                // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
                ng2_charts_1.ChartsModule,
                app_routing_module_1.AppRoutingModule,
                toolbar_1.MatToolbarModule,
            ],
            providers: [
                _guard_1.AuthGuard,
                _services_1.BackendService,
                _services_1.AuthenticationService,
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
