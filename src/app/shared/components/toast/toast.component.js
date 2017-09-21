"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var toast_model_1 = require("./toast-model");
/**
 * toast组件
 */
var ToastComponent = (function () {
    function ToastComponent() {
        this.config = new toast_model_1.ToastConfig(toast_model_1.ToastType.INFO, '', '');
        this.dismissed = new core_1.EventEmitter();
    }
    ToastComponent.prototype.ngOnInit = function () {
        var _this = this;
        //自动关闭
        if (this.config.isAutoDismissing()) {
            setTimeout(function () { return _this.dismiss(); }, this.config.getAutoDismissTime());
        }
    };
    /**
     * 判断是成功
     */
    ToastComponent.prototype.isSuccess = function () {
        return this.config.getToastType() === toast_model_1.ToastType.SUCCESS;
    };
    /**
     * 判断是信息
     */
    ToastComponent.prototype.isInfo = function () {
        return this.config.getToastType() === toast_model_1.ToastType.INFO;
    };
    /**
     * 判断是警告
     */
    ToastComponent.prototype.isWarning = function () {
        return this.config.getToastType() === toast_model_1.ToastType.WARNING;
    };
    /**
     * 判断是错误
     */
    ToastComponent.prototype.isError = function () {
        return this.config.getToastType() === toast_model_1.ToastType.ERROR;
    };
    /**
     * 解除
     */
    ToastComponent.prototype.dismiss = function () {
        this.dismissed.emit();
    };
    /**
     * 是否启用
     */
    ToastComponent.prototype.isDismissEnabled = function () {
        return this.config.isDismissable();
    };
    return ToastComponent;
}());
__decorate([
    core_1.Input()
], ToastComponent.prototype, "config", void 0);
__decorate([
    core_1.Output()
], ToastComponent.prototype, "dismissed", void 0);
ToastComponent = __decorate([
    core_1.Component({
        selector: 'c-toast',
        templateUrl: './toast.component.html',
    })
], ToastComponent);
exports.ToastComponent = ToastComponent;
