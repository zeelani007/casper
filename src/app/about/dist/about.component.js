"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var newLocal = "\n    .title {\n      font-weight:bold;\n      font-size: 24px;\n    }\n    .about-card {\n      display: grid;\n      justify-content: center;\n      text-align: center;\n    }\n    .subheader{\n      font-size: 46px;\n      color:darkcyan;\n      padding-top: 50px;\n      padding-bottom: 50px\n    }\n    .content {\n      padding: 26px;\n      font-size: 18px;\n      text-align: left;\n      line-height: 2em;\n    }\n  ";
var AboutComponent = /** @class */ (function () {
    function AboutComponent(route) {
        this.route = route;
        this.pageTitle = "About";
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            /**
             * Your resolved data from route.
             */
            _this.localState = data.yourData;
        });
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: "about",
            styles: [
                newLocal
            ],
            template: "\n    <div class=\"about-card\">\n      <p class=\"subheader\">\n        Kasper Infotech Pvt. Ltd.\n      </p>\n      <p class=\"content\">\n      Kasper Infotech is one of the biggest and most relied upon names in the enterprise application development industry. Our IT solutions help businesses from different industries in significantly enriching their brand experience and increasing their customer engagement.\n      </p>\n    </div>\n\n  "
        })
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;

//# sourceMappingURL=about.component.js.map
