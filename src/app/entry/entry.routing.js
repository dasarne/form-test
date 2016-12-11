"use strict";
var router_1 = require("@angular/router");
//Imports of components
var entry_form_component_1 = require("./entry-form/entry-form.component");
var entry_component_1 = require("./entry.component");
//Build map of routes
exports.routes = [{
        path: 'entry',
        component: entry_component_1.EntryComponent,
        children: [{
                path: '',
                component: entry_form_component_1.EntryFormComponent,
            },]
    }];
exports.routing = router_1.RouterModule.forChild(exports.routes);
