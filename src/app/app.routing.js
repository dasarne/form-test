"use strict";
var router_1 = require("@angular/router");
exports.routes = [{
        path: '',
        redirectTo: '/entry',
        pathMatch: 'full'
    }];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
