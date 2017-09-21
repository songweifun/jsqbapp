"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var statistics_routing_module_1 = require("./statistics-routing.module");
var shared_module_1 = require("../../shared/shared.module");
var forms_1 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var statistics_component_1 = require("./statistics.component");
var library_statistics_component_1 = require("./library-statistics/library-statistics.component");
var request_statistics_component_1 = require("./request-statistics/request-statistics.component");
var resource_statistics_component_1 = require("./resource-statistics/resource-statistics.component");
var StatisticsModule = (function () {
    function StatisticsModule() {
    }
    return StatisticsModule;
}());
StatisticsModule = __decorate([
    core_1.NgModule({
        imports: [
            statistics_routing_module_1.StatisticsRoutingModule,
            shared_module_1.SharedModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            ng_bootstrap_1.NgbModule.forRoot(),
        ],
        declarations: [
            statistics_component_1.StatisticsComponent,
            library_statistics_component_1.LibraryStatisticsComponent,
            request_statistics_component_1.RequestStatisticsComponent,
            resource_statistics_component_1.ResourceStatisticsComponent
        ]
    })
], StatisticsModule);
exports.StatisticsModule = StatisticsModule;
