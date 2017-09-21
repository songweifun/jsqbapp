"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by daivd on 2017/9/21.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var statistics_component_1 = require("./statistics.component");
var library_statistics_component_1 = require("./library-statistics/library-statistics.component");
var request_statistics_component_1 = require("./request-statistics/request-statistics.component");
var resource_statistics_component_1 = require("./resource-statistics/resource-statistics.component");
var routes = [
    {
        path: '',
        component: statistics_component_1.StatisticsComponent,
        children: [
            {
                path: 'library',
                component: library_statistics_component_1.LibraryStatisticsComponent
            },
            {
                path: 'rquest',
                component: request_statistics_component_1.RequestStatisticsComponent
            },
            {
                path: 'resource',
                component: resource_statistics_component_1.ResourceStatisticsComponent
            },
        ]
    }
];
var StatisticsRoutingModule = (function () {
    function StatisticsRoutingModule() {
    }
    return StatisticsRoutingModule;
}());
StatisticsRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], StatisticsRoutingModule);
exports.StatisticsRoutingModule = StatisticsRoutingModule;
