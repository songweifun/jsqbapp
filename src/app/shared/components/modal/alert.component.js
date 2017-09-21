"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_model_1 = require("./modal-model");
/**
 * 警告框组件
 */
var AlertComponent = (function () {
    function AlertComponent(activeModal) {
        this.activeModal = activeModal;
    }
    /**
     * 判断是否信息
     * @param type
     */
    AlertComponent.prototype.isInfo = function (type) {
        return type === modal_model_1.AlertType.INFO;
    };
    /**
     * 判断是否警告
     * @param type
     */
    AlertComponent.prototype.isWarning = function (type) {
        return type === modal_model_1.AlertType.WARNING;
    };
    /**
    * 判断是否错误
    * @param type
    */
    AlertComponent.prototype.isError = function (type) {
        return type === modal_model_1.AlertType.ERROR;
    };
    /**
     * 关闭
     */
    AlertComponent.prototype.close = function () {
        this.activeModal.dismiss({ status: 'closed' });
    };
    /**
     * 同意
     */
    AlertComponent.prototype.approve = function () {
        this.activeModal.close({ status: 'approved' });
    };
    return AlertComponent;
}());
__decorate([
    core_1.Input()
], AlertComponent.prototype, "config", void 0);
AlertComponent = __decorate([
    core_1.Component({
        selector: 'c-alert',
        templateUrl: './alert.component.html',
        encapsulation: core_1.ViewEncapsulation.None
    })
], AlertComponent);
exports.AlertComponent = AlertComponent;
