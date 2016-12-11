"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var entry_component_1 = require("./entry.component");
var entry_form_component_1 = require("./entry-form/entry-form.component");
var entry_routing_1 = require("./entry.routing");
var forms_1 = require("@angular/forms");
var debug_panel_component_1 = require('./debug-panel/debug-panel.component');
var EntryModule = (function () {
    function EntryModule() {
    }
    EntryModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                common_1.CommonModule,
                entry_routing_1.routing
            ],
            declarations: [entry_component_1.EntryComponent, entry_form_component_1.EntryFormComponent, debug_panel_component_1.DebugPanelComponent]
        })
    ], EntryModule);
    return EntryModule;
}());
exports.EntryModule = EntryModule;
