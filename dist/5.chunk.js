webpackJsonp([5],{

/***/ "../../../../../src/app/layout/statistics/library-statistics/library-statistics.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition] >\n<div class=\"row\">\n    <div class=\"col col-sm-12\">\n        <div class=\"card mb-3\">\n            <div class=\"card-header\">\n                资源贡献量统计\n            </div>\n            <div class=\"card-block\">\n                <app-advance-pie-chart [options]=\"options_advance_pie\"></app-advance-pie-chart>\n                <!--<app-advance-pie-chart ></app-advance-pie-chart>-->\n\n            </div>\n            <div class=\"card-footer\">\n                <button class=\"btn btn-info btn-sm\" (click)=\"randomize()\">更新数据</button>\n            </div>\n        </div>\n    </div>\n\n\n\n\n</div>\n\n\n\n<div class=\"row\">\n    <div class=\"col col-sm-12 \">\n        <div class=\"card mb-3\">\n            <div class=\"card-header\">\n                订单总量统计\n            </div>\n            <div class=\"card-block\">\n                <app-vertical-ba-chart [options]=\"options\"></app-vertical-ba-chart>\n\n            </div>\n            <div class=\"card-footer\">\n                <button class=\"btn btn-info btn-sm\" (click)=\"randomize()\">更新数据</button>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"col col-sm-12 \">\n        <div class=\"card mb-3\">\n            <div class=\"card-header\">\n                资源贡献量统计\n            </div>\n            <div class=\"card-block\">\n                <app-pie-chart [options]=\"options_pie\"></app-pie-chart>\n\n            </div>\n            <div class=\"card-footer\">\n                <button class=\"btn btn-info btn-sm\" (click)=\"randomize()\">更新数据</button>\n            </div>\n        </div>\n    </div>\n\n</div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/layout/statistics/library-statistics/library-statistics.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/statistics/library-statistics/library-statistics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_system_system_service__ = __webpack_require__("../../../../../src/app/shared/services/system/system.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryStatisticsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LibraryStatisticsComponent = (function () {
    function LibraryStatisticsComponent(systemService) {
        this.systemService = systemService;
    }
    LibraryStatisticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.systemService.getOrderStatisticsBySchool().subscribe(function (data) {
            _this.options = {
                single: data,
                multi: [],
                view: [700, 400],
                // options
                showXAxis: true,
                showYAxis: true,
                gradient: false,
                showLegend: true,
                showXAxisLabel: true,
                xAxisLabel: '成员馆',
                showYAxisLabel: true,
                yAxisLabel: '抢单量',
                colorScheme: {
                    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#FF3333', '#CC0099']
                }
            };
        });
        this.systemService.getResourceStatisticsBySchool().subscribe(function (data) {
            // data=data.map((val,index,arr)=>{
            //     val.value=parseInt(val.value);
            //     return val;
            // })
            _this.options_pie = {
                single: data,
                multi: [],
                view: [700, 400],
                // options
                colorScheme: {
                    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#FF3333', '#CC0099']
                },
                showLabels: true,
                explodeSlices: false,
                doughnut: false
            };
            _this.options_advance_pie = {
                single: data.map(function (val, index, arr) {
                    val.value = parseInt(val.value);
                    return val;
                }),
                view: [800, 300],
                colorScheme: {
                    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#FF3333', '#CC0099']
                }
            };
        });
    };
    LibraryStatisticsComponent.prototype.randomize = function () {
        this.ngOnInit();
    };
    return LibraryStatisticsComponent;
}());
LibraryStatisticsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-library-statistics',
        template: __webpack_require__("../../../../../src/app/layout/statistics/library-statistics/library-statistics.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/statistics/library-statistics/library-statistics.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_system_system_service__["a" /* SystemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_system_system_service__["a" /* SystemService */]) === "function" && _a || Object])
], LibraryStatisticsComponent);

var _a;
//# sourceMappingURL=library-statistics.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/statistics/request-statistics/request-statistics.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition] >\n    <!--<div class=\"row\">-->\n        <!--<div class=\"col col-sm-12\">-->\n            <!--<div class=\"card mb-3\">-->\n                <!--<div class=\"card-header\">-->\n                    <!--资源贡献量统计-->\n                <!--</div>-->\n                <!--<div class=\"card-block\">-->\n                    <!--<app-advance-pie-chart [options]=\"options_advance_pie\"></app-advance-pie-chart>-->\n                    <!--&lt;!&ndash;<app-advance-pie-chart ></app-advance-pie-chart>&ndash;&gt;-->\n\n                <!--</div>-->\n                <!--<div class=\"card-footer\">-->\n                    <!--<button class=\"btn btn-info btn-sm\" (click)=\"randomize()\">更新数据</button>-->\n                <!--</div>-->\n            <!--</div>-->\n        <!--</div>-->\n\n\n\n\n    <!--</div>-->\n\n\n\n    <div class=\"row\">\n        <div class=\"col col-sm-12\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                   IP请求量TOP10\n                </div>\n                <div class=\"card-block\">\n                    <app-vertical-ba-chart [options]=\"optionsRequestIpTop10\"></app-vertical-ba-chart>\n\n                </div>\n                <div class=\"card-footer\">\n                    <button class=\"btn btn-info btn-sm\" (click)=\"randomize()\">更新数据</button>\n                </div>\n            </div>\n        </div>\n\n\n        <div class=\"col col-sm-12\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    机构请求量TOP10\n                </div>\n                <div class=\"card-block\">\n                    <!--//<app-pie-chart [options]=\"optionsRequestMapTop10\"></app-pie-chart>-->\n                    <app-vertical-ba-chart [options]=\"optionsRequestMapTop10\"></app-vertical-ba-chart>\n\n                </div>\n                <div class=\"card-footer\">\n                    <button class=\"btn btn-info btn-sm\" (click)=\"randomize()\">更新数据</button>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/layout/statistics/request-statistics/request-statistics.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/statistics/request-statistics/request-statistics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_system_system_service__ = __webpack_require__("../../../../../src/app/shared/services/system/system.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestStatisticsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestStatisticsComponent = (function () {
    function RequestStatisticsComponent(systemService) {
        this.systemService = systemService;
    }
    RequestStatisticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.systemService.getRequstStatisticsByIpTop10().subscribe(function (data) {
            _this.optionsRequestIpTop10 = {
                single: data,
                multi: [],
                view: [700, 400],
                // options
                showXAxis: true,
                showYAxis: true,
                gradient: false,
                showLegend: false,
                showXAxisLabel: true,
                xAxisLabel: 'IP地址',
                showYAxisLabel: true,
                yAxisLabel: '请求量',
                colorScheme: {
                    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#FF3333', '#CC0099']
                }
            };
        });
        this.systemService.getRequestStatisticsByMapNameTop10().subscribe(function (data) {
            _this.optionsRequestMapTop10 = {
                single: data,
                multi: [],
                view: [700, 400],
                // options
                showXAxis: true,
                showYAxis: true,
                gradient: true,
                showLegend: true,
                showXAxisLabel: true,
                xAxisLabel: '机构名称',
                showYAxisLabel: true,
                yAxisLabel: '请求量',
                colorScheme: {
                    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#FF3333', '#CC0099']
                }
            };
        });
    };
    RequestStatisticsComponent.prototype.randomize = function () {
        this.ngOnInit();
    };
    return RequestStatisticsComponent;
}());
RequestStatisticsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-request-statistics',
        template: __webpack_require__("../../../../../src/app/layout/statistics/request-statistics/request-statistics.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/statistics/request-statistics/request-statistics.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_system_system_service__["a" /* SystemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_system_system_service__["a" /* SystemService */]) === "function" && _a || Object])
], RequestStatisticsComponent);

var _a;
//# sourceMappingURL=request-statistics.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/statistics/resource-statistics/resource-statistics.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition] >\n    <div class=\"row\">\n        <div class=\"col col-sm-12\">\n            <div class=\"card mb-3\">\n                <div class=\"card-header\">\n                    资源贡献量统计和资源总量统计\n                </div>\n                <div class=\"card-block\">\n                    <app-advance-pie-chart [options]=\"options_advance_pie\"></app-advance-pie-chart>\n                    <!--<app-advance-pie-chart ></app-advance-pie-chart>-->\n\n                </div>\n                <div class=\"card-footer\">\n                    <button class=\"btn btn-info btn-sm\" (click)=\"randomize()\">更新数据</button>\n                </div>\n            </div>\n        </div>\n\n\n\n\n    </div>\n\n\n\n    <!--<div class=\"row\">-->\n        <!--<div class=\"col col-sm-6\">-->\n            <!--<div class=\"card mb-3\">-->\n                <!--<div class=\"card-header\">-->\n                    <!--订单总量统计-->\n                <!--</div>-->\n                <!--<div class=\"card-block\">-->\n                    <!--<app-vertical-ba-chart [options]=\"options\"></app-vertical-ba-chart>-->\n\n                <!--</div>-->\n                <!--<div class=\"card-footer\">-->\n                    <!--<button class=\"btn btn-info btn-sm\" (click)=\"randomize()\">更新数据</button>-->\n                <!--</div>-->\n            <!--</div>-->\n        <!--</div>-->\n\n\n        <!--<div class=\"col col-sm-6\">-->\n            <!--<div class=\"card mb-3\">-->\n                <!--<div class=\"card-header\">-->\n                    <!--资源贡献量统计-->\n                <!--</div>-->\n                <!--<div class=\"card-block\">-->\n                    <!--<app-pie-chart [options]=\"options_pie\"></app-pie-chart>-->\n\n                <!--</div>-->\n                <!--<div class=\"card-footer\">-->\n                    <!--<button class=\"btn btn-info btn-sm\" (click)=\"randomize()\">更新数据</button>-->\n                <!--</div>-->\n            <!--</div>-->\n        <!--</div>-->\n\n    <!--</div>-->\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/layout/statistics/resource-statistics/resource-statistics.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/statistics/resource-statistics/resource-statistics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_system_system_service__ = __webpack_require__("../../../../../src/app/shared/services/system/system.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceStatisticsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResourceStatisticsComponent = (function () {
    function ResourceStatisticsComponent(systemService) {
        this.systemService = systemService;
    }
    ResourceStatisticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.systemService.getResourceStatisticsBySchool().subscribe(function (data) {
            // data=data.map((val,index,arr)=>{
            //     val.value=parseInt(val.value);
            //     return val;
            // })
            _this.options_advance_pie = {
                single: data.map(function (val, index, arr) {
                    val.value = parseInt(val.value);
                    return val;
                }),
                view: [800, 300],
                colorScheme: {
                    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#FF3333', '#CC0099']
                }
            };
        });
    };
    ResourceStatisticsComponent.prototype.randomize = function () {
        this.ngOnInit();
    };
    return ResourceStatisticsComponent;
}());
ResourceStatisticsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-resource-statistics',
        template: __webpack_require__("../../../../../src/app/layout/statistics/resource-statistics/resource-statistics.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/statistics/resource-statistics/resource-statistics.component.scss")],
        animations: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_system_system_service__["a" /* SystemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_system_system_service__["a" /* SystemService */]) === "function" && _a || Object])
], ResourceStatisticsComponent);

var _a;
//# sourceMappingURL=resource-statistics.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/statistics/statistics-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__statistics_component__ = __webpack_require__("../../../../../src/app/layout/statistics/statistics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__library_statistics_library_statistics_component__ = __webpack_require__("../../../../../src/app/layout/statistics/library-statistics/library-statistics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__request_statistics_request_statistics_component__ = __webpack_require__("../../../../../src/app/layout/statistics/request-statistics/request-statistics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resource_statistics_resource_statistics_component__ = __webpack_require__("../../../../../src/app/layout/statistics/resource-statistics/resource-statistics.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by daivd on 2017/9/21.
 */






var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__statistics_component__["b" /* StatisticsComponent */],
        children: [
            {
                path: 'library',
                component: __WEBPACK_IMPORTED_MODULE_3__library_statistics_library_statistics_component__["a" /* LibraryStatisticsComponent */]
            },
            {
                path: 'rquest',
                component: __WEBPACK_IMPORTED_MODULE_4__request_statistics_request_statistics_component__["a" /* RequestStatisticsComponent */]
            },
            {
                path: 'resource',
                component: __WEBPACK_IMPORTED_MODULE_5__resource_statistics_resource_statistics_component__["a" /* ResourceStatisticsComponent */]
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], StatisticsRoutingModule);

//# sourceMappingURL=statistics-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/statistics/statistics.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__statistics_routing_module__ = __webpack_require__("../../../../../src/app/layout/statistics/statistics-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__statistics_component__ = __webpack_require__("../../../../../src/app/layout/statistics/statistics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__library_statistics_library_statistics_component__ = __webpack_require__("../../../../../src/app/layout/statistics/library-statistics/library-statistics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__request_statistics_request_statistics_component__ = __webpack_require__("../../../../../src/app/layout/statistics/request-statistics/request-statistics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resource_statistics_resource_statistics_component__ = __webpack_require__("../../../../../src/app/layout/statistics/resource-statistics/resource-statistics.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsModule", function() { return StatisticsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var StatisticsModule = (function () {
    function StatisticsModule() {
    }
    return StatisticsModule;
}());
StatisticsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__statistics_routing_module__["a" /* StatisticsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__statistics_component__["b" /* StatisticsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__library_statistics_library_statistics_component__["a" /* LibraryStatisticsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__request_statistics_request_statistics_component__["a" /* RequestStatisticsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__resource_statistics_resource_statistics_component__["a" /* ResourceStatisticsComponent */]
        ]
    })
], StatisticsModule);

//# sourceMappingURL=statistics.module.js.map

/***/ })

});
//# sourceMappingURL=5.chunk.js.map