"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pagination_model_1 = require("./pagination-model");
var utils_1 = require("../../../../shared/services/util/utils");
var toast_model_1 = require("../../../../shared/components/toast/toast-model");
/**
 * app-http-pagination组件
 */
var HttpPaginationComponent = (function () {
    function HttpPaginationComponent(httpService, toastService, appService) {
        var _this = this;
        this.httpService = httpService;
        this.toastService = toastService;
        this.appService = appService;
        this.pageList = [10, 20, 30, 50, 100, 150, 200];
        this.btnCls = 'btn-secondary';
        this.method = 'post';
        this.param = new Object();
        this.onDataChanged = new core_1.EventEmitter();
        this.total = 0;
        this.pageSize = this.pageList[0];
        this.pageNumber = 1;
        this.appService.pageRefreshEventEmitter.subscribe(function (data) {
            _this.pageSize = data.pageSize;
            _this.pageNumber = data.pageNumber;
            _this.getServerData();
            //alert(data.pageNumber)
        });
    }
    HttpPaginationComponent.prototype.ngOnChanges = function (changes) {
        //this.getServerData()
    };
    /**
    * 初始化
    */
    HttpPaginationComponent.prototype.ngOnInit = function () {
        this.getServerData();
        //alert(111)
    };
    /**
     * 查询方法
     */
    HttpPaginationComponent.prototype.search = function () {
        this.getServerData();
    };
    /**
     * 获得服务器数据
     */
    HttpPaginationComponent.prototype.getServerData = function () {
        var that = this;
        var serviceData = {};
        // alert(this.pageNumber)
        if (utils_1.Utils.isArray(this.param)) {
            serviceData.pageNumber = this.pageNumber;
            serviceData.pageSize = this.pageSize;
            serviceData.list = this.param;
        }
        else if (utils_1.Utils.isObject(this.param)) {
            this.param.pageNumber = this.pageNumber;
            this.param.pageSize = this.pageSize;
            serviceData = this.param;
        }
        else {
            serviceData.pageNumber = this.pageNumber;
            serviceData.pageSize = this.pageSize;
        }
        if (this.method == pagination_model_1.HttpPaginationMethod.GET && utils_1.Utils.isNotEmpty(this.url)) {
            this.httpService.get(this.url, serviceData, function (successful, data, res) {
                if (successful) {
                    that.serverDataProcess(data);
                }
                else {
                    var toastCfg = new toast_model_1.ToastConfig(toast_model_1.ToastType.ERROR, '', '数据请求失败！', 3000);
                    that.toastService.toast(toastCfg);
                }
            }, function (successful, msg, err) {
                var toastCfg = new toast_model_1.ToastConfig(toast_model_1.ToastType.ERROR, '', msg, 3000);
                that.toastService.toast(toastCfg);
            });
        }
        else if (utils_1.Utils.isNotEmpty(this.url)) {
            this.httpService.post(this.url, serviceData, function (successful, data, res) {
                if (successful) {
                    that.serverDataProcess(data);
                }
                else {
                    var toastCfg = new toast_model_1.ToastConfig(toast_model_1.ToastType.ERROR, '', '数据请求失败！', 3000);
                    that.toastService.toast(toastCfg);
                }
            }, function (successful, msg, err) {
                var toastCfg = new toast_model_1.ToastConfig(toast_model_1.ToastType.ERROR, '', msg, 3000);
                that.toastService.toast(toastCfg);
            });
        }
        else {
            console.error("app-http-pagination组件请求时，url参数为空！");
        }
    };
    /**
     * 服务器端数据处理
     * @param data 数据
     */
    HttpPaginationComponent.prototype.serverDataProcess = function (data) {
        if (data && data.total && data.rows) {
            this.total = data.total;
            //alert(this.total)
            //this.pageSize = data.page_size;
            // this.pageNumber =data.current_page;
            this.onDataChanged.emit(data);
        }
        else {
            console.error("app-http-pagination,返回的数据格式不正确！");
        }
    };
    /**
     * 分页改变事件
     * @param event
     */
    HttpPaginationComponent.prototype.onPageChanged = function ($event) {
        if ($event.type != pagination_model_1.PaginationType.PAGE_INIT) {
            console.log($event);
            this.pageSize = $event.pageSize;
            this.pageNumber = $event.pageNumber;
            //this.total=$event.total
            this.getServerData();
        }
    };
    return HttpPaginationComponent;
}());
__decorate([
    core_1.Input()
], HttpPaginationComponent.prototype, "pageList", void 0);
__decorate([
    core_1.Input()
], HttpPaginationComponent.prototype, "btnCls", void 0);
__decorate([
    core_1.Input()
], HttpPaginationComponent.prototype, "url", void 0);
__decorate([
    core_1.Input()
], HttpPaginationComponent.prototype, "method", void 0);
__decorate([
    core_1.Input()
], HttpPaginationComponent.prototype, "param", void 0);
__decorate([
    core_1.Output()
], HttpPaginationComponent.prototype, "onDataChanged", void 0);
HttpPaginationComponent = __decorate([
    core_1.Component({
        selector: 'app-http-pagination',
        template: "\n       <app-pagination [total]=\"total\" [pageList]=\"pageList\" [pageSize]=\"pageSize\" [pageNumber]=\"pageNumber\" [btnCls]=\"btnCls\" (onPageChanged)=\"onPageChanged($event)\"></app-pagination>\n    "
    })
    //       <app-pagination [total]="total" [pageList]="pageList" [pageSize]="pageSize" [btnCls]="btnCls" (onPageChanged)="onPageChanged($event)"></app-pagination>
], HttpPaginationComponent);
exports.HttpPaginationComponent = HttpPaginationComponent;
