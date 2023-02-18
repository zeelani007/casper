"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var LoginComponent = /** @class */ (function () {
    // isloading = true;
    // isAuthenticated = false;
    function LoginComponent(route, router, authenticationService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.isAuth = new core_1.EventEmitter();
        this.model = {};
        this.isValidating = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // this.authenticationService.logout();
        this.model.username = "afroz@gmail.com";
        this.model.password = "123456";
        this.returnUrl =
            this.route.snapshot.queryParams["returnUrl"] || "loading";
        // this.isloading = false;
        // this.isAuthenticated =  false;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.isValidating = true;
        // this.isloading = true;
        this.authenticationService.login(this.model).subscribe(function () {
            // this.isAuthenticated =  true;
            console.log(" next action here ... ");
        }, function (error) {
            console.log(error);
            _this.isValidating = false;
        }, function () {
            _this.isValidating = false;
            console.log("login " + _this.returnUrl);
            _this.isAuth.emit(true);
            _this.router.navigate([_this.returnUrl]);
        });
    };
    __decorate([
        core_1.Output()
    ], LoginComponent.prototype, "isAuth");
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login-form",
            templateUrl: "./login.component.html",
            styleUrls: ["./login.component.scss"]
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=login.component.js.map
