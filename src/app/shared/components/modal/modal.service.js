"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var confirm_component_1 = require("./confirm.component");
var alert_component_1 = require("./alert.component");
/**
 * 模块框服务
 */
var ModalService = (function () {
    function ModalService(modalService) {
        this.modalService = modalService;
    }
    //确认框
    ModalService.prototype.confirm = function (config) {
        var modalRef = this.modalService.open(confirm_component_1.ConfirmComponent);
        modalRef.componentInstance.config = config;
        return modalRef.result;
    };
    //警告框
    ModalService.prototype.alert = function (config) {
        var modalRef = this.modalService.open(alert_component_1.AlertComponent);
        modalRef.componentInstance.config = config;
        return modalRef.result;
    };
    return ModalService;
}());
ModalService = __decorate([
    core_1.Injectable()
], ModalService);
exports.ModalService = ModalService;
