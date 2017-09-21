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
var PaginationComponent = (function () {
    //
    // options: PaginationOptions = {pageSize:this.pageSize};
    function PaginationComponent() {
        this.total = 0;
        this.pageList = [10, 20, 30, 50, 100, 150, 200];
        this.btnCls = 'btn-secondary';
        this.onPageChanged = new core_1.EventEmitter();
        this.options = {};
        this.pageNumber = 1;
        //  //this.defaultPagination = 1;
        //  this.advancedPagination = 1;
        //  this.pageSize=10;
        // // this.paginationSize = 1;
        //  //this.disabledPagination = 1;
        //  this.isDisabled = true;
        //  this.options.pageTotal=10;
        //  this.options.total = this.total;
        //   this.options.pageNumber =1;
        //   this.options.pageSize = this.pageList[0];
        //  this.options.pageList = this.pageList;
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    /**
     * 改变
     * @param changes
     */
    PaginationComponent.prototype.ngOnChanges = function (changes) {
        //alert(11111)
        this.options.total = this.total;
        this.options.pageList = this.pageList;
        this.options.pageSize = this.pageSize ? this.pageSize : this.pageList[0];
        this.options.pageNumber = this.pageNumber;
        this.refreshPage();
        this.pageOperation(pagination_model_1.PaginationType.PAGE_INIT);
        //alert(11111)
    };
    /**
     * 刷新分页
     */
    PaginationComponent.prototype.refreshPage = function () {
        this.options.pageTotal = 0;
        if (Number.parseInt(this.options.total) % Number.parseInt(this.options.pageSize) == 0) {
            this.options.pageTotal = Number.parseInt(this.options.total) / Number.parseInt(this.options.pageSize);
        }
        else {
            this.options.pageTotal = Number.parseInt(this.options.total) / Number.parseInt(this.options.pageSize) + 1;
        }
        this.options.pageTotal = Number.parseInt(this.options.pageTotal);
        // if (this.options.pageTotal <= 0) {
        //     this.options.pageNumber = 0;
        // } else {
        //     this.options.pageNumber = 1;
        // }
    };
    /**
     * 分页操作
     * @param type  操作类型
     */
    PaginationComponent.prototype.pageOperation = function (type) {
        var pageParam = {
            pageNumber: this.options.pageNumber,
            pageSize: this.options.pageSize,
            pageTotal: this.options.pageTotal,
            total: this.options.total,
            type: type
        };
        this.onPageChanged.emit(pageParam);
    };
    PaginationComponent.prototype.toggleDisabled = function () {
        // this.isDisabled = !this.isDisabled;
    };
    PaginationComponent.prototype.pageChangeHandler = function (event) {
        console.log(event);
        this.options.pageNumber = Number.parseInt(event);
        //this.refreshPage();
        this.pageOperation(0);
    };
    /**
     * 页数改变 10 20等
     * @param $event  当前条件
     */
    PaginationComponent.prototype.pageSizeChanged = function ($event) {
        this.options.pageSize = Number.parseInt($event);
        //alert($event)
        this.refreshPage();
        this.pageOperation(pagination_model_1.PaginationType.PAGE_SIZE_CHANGE);
        //
    };
    return PaginationComponent;
}());
__decorate([
    core_1.Input()
], PaginationComponent.prototype, "total", void 0);
__decorate([
    core_1.Input()
], PaginationComponent.prototype, "pageList", void 0);
__decorate([
    core_1.Input()
], PaginationComponent.prototype, "btnCls", void 0);
__decorate([
    core_1.Output()
], PaginationComponent.prototype, "onPageChanged", void 0);
__decorate([
    core_1.Input()
], PaginationComponent.prototype, "pageSize", void 0);
__decorate([
    core_1.Input()
], PaginationComponent.prototype, "pageNumber", void 0);
PaginationComponent = __decorate([
    core_1.Component({
        selector: 'app-pagination',
        templateUrl: './pagination.component.html',
        styleUrls: ['./pagination.component.scss']
    })
], PaginationComponent);
exports.PaginationComponent = PaginationComponent;
