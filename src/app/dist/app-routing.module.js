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
var dashboard_1 = require("./dashboard");
var about_1 = require("./about");
var _guard_1 = require("./_guard");
var notfoundpage_1 = require("./notfoundpage");
var login_1 = require("./login");
var loading_1 = require("./loading");
// import { EmployeeComponent } from './employee';
var employes_component_1 = require("./employes/employes.component");
var mewemploye_component_1 = require("./mewemploye/mewemploye.component");
var admin_component_1 = require("./admin/admin.component");
var register_component_1 = require("./register/register.component");
// const routes: Routes = [];
var routes = [
    {
        path: "login",
        component: login_1.LoginComponent
    },
    {
        path: "loading",
        component: loading_1.LoadingComponent
    },
    {
        path: "dashboard",
        component: dashboard_1.DashboardComponent,
        canActivate: [_guard_1.AuthGuard]
    },
    {
        path: "about",
        component: about_1.AboutComponent,
        canActivate: [_guard_1.AuthGuard]
    },
    {
        path: "customers",
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./customer/customer.module'); }).then(function (m) { return m.CustomerModule; });
        },
        canActivate: [_guard_1.AuthGuard]
    },
    {
        path: "orders",
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./order/order.module'); }).then(function (m) { return m.OrderModule; });
        },
        canActivate: [_guard_1.AuthGuard]
    },
    {
        path: "products",
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./product/product.module'); }).then(function (m) { return m.ProductModule; });
        },
        canActivate: [_guard_1.AuthGuard]
    },
    {
        path: "employes",
        component: employes_component_1.EmployesComponent,
        canActivate: [_guard_1.AuthGuard]
    },
    {
        path: "customer",
        component: mewemploye_component_1.MewemployeComponent,
        canActivate: [_guard_1.AuthGuard]
    },
    {
        path: "user",
        component: admin_component_1.AdminComponent,
        canActivate: [_guard_1.AuthGuard]
    },
    { component: register_component_1.RegisterComponent, path: 'register' },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: "**",
        component: notfoundpage_1.NotFoundPageComponent
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, { useHash: false })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;

//# sourceMappingURL=app-routing.module.js.map
