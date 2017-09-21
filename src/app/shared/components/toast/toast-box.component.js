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
 * toast外层组件
 */
var ToastBoxComponent = (function () {
    function ToastBoxComponent(toastService) {
        var _this = this;
        this.toastService = toastService;
        this.toastAnimation = 'none';
        this.toastPosition = 'c-toast-top-center';
        this.toastConfigs = [];
        this.toastService.getToasts().forEach(function (config) {
            _this.toastConfigs.unshift(config);
        });
    }
    ToastBoxComponent.prototype.ngOnInit = function () {
    };
    /**
     * 获得所有toast配置
     */
    ToastBoxComponent.prototype.getToastConfigs = function () {
        return this.toastConfigs;
    };
    /**
     * 移除
     * @param toastCfg
     */
    ToastBoxComponent.prototype.remove = function (toastCfg) {
        if (this.toastConfigs.indexOf(toastCfg) >= 0) {
            this.toastConfigs.splice(this.toastConfigs.indexOf(toastCfg), 1);
        }
    };
    return ToastBoxComponent;
}());
__decorate([
    core_1.Input()
], ToastBoxComponent.prototype, "toastAnimation", void 0);
__decorate([
    core_1.Input()
], ToastBoxComponent.prototype, "toastPosition", void 0);
ToastBoxComponent = __decorate([
    core_1.Component({
        selector: 'c-toast-box',
        templateUrl: './toast-box.component.html',
        animations: [
            core_1.trigger('animation', [
                core_1.state('none', core_1.style({})),
                core_1.state('decent', core_1.style([{ opacity: 1 }, { maxHeight: 300 }])),
                core_1.state('fancy', core_1.style([{ transform: 'translateX(0)' }, { transform: 'translateY(0)' }, { opacity: 1 }, { maxHeight: 300 }])),
                core_1.transition('void => fancy', [
                    core_1.style({ opacity: 0, maxHeight: 0, transform: 'translateY(-100%)' }),
                    core_1.animate('300ms ease-in-out')
                ]),
                core_1.transition('fancy => void', [
                    core_1.animate('300ms ease-in-out', core_1.style({ transform: 'translateX(100%)', height: 0, opacity: 0 }))
                ]),
                core_1.transition('void => decent', [
                    core_1.style({ opacity: 0, maxHeight: 0 }),
                    core_1.animate('300ms ease-in-out')
                ]),
                core_1.transition('decent => void', [
                    core_1.animate('300ms ease-in-out', core_1.style({ height: 0, opacity: 0 }))
                ])
            ])
        ]
    })
], ToastBoxComponent);
exports.ToastBoxComponent = ToastBoxComponent;
