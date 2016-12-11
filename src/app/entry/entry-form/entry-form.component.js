"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var shared_1 = require("../shared");
var EntryFormComponent = (function () {
    function EntryFormComponent() {
        //Instantiate the model
        this.model = new shared_1.Entry(1, "Arne", 50);
        this.submitted = false;
    }
    EntryFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(EntryFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    EntryFormComponent.prototype.ngOnInit = function () {
    };
    EntryFormComponent = __decorate([
        core_1.Component({
            selector: 'ft-entry-form',
            templateUrl: './entry-form.component.html',
            styleUrls: ['./entry-form.component.css']
        })
    ], EntryFormComponent);
    return EntryFormComponent;
}());
exports.EntryFormComponent = EntryFormComponent;
