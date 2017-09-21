"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * 确认框组件
 */
var ConfirmComponent = (function () {
    function ConfirmComponent(activeModal) {
        this.activeModal = activeModal;
    }
    /**
     * 不同意
     */
    ConfirmComponent.prototype.decline = function () {
        this.activeModal.dismiss({ status: 'declined' });
    };
    /**
     * 关闭
     */
    ConfirmComponent.prototype.close = function () {
        this.activeModal.dismiss({ status: 'closed' });
    };
    /**
     * 同意
     */
    ConfirmComponent.prototype.approve = function () {
        this.activeModal.close({ status: 'approved' });
    };
    return ConfirmComponent;
}());
__decorate([
    core_1.Input()
], ConfirmComponent.prototype, "config", void 0);
ConfirmComponent = __decorate([
    core_1.Component({
        selector: 'c-confirm',
        templateUrl: './confirm.component.html',
        encapsulation: core_1.ViewEncapsulation.None
    })
], ConfirmComponent);
exports.ConfirmComponent = ConfirmComponent;
