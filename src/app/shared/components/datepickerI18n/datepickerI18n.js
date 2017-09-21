"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
//i18n值
var DATEPICKER_I18N_VALUES = {
    en: {
        weekdays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    zh_CN: {
        weekdays: [' 周一', '周二', '周三', '周四', '周五', '周六', '周天'],
        months: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    }
};
/**
 * 类型
 */
var DatepickerI18nType = DatepickerI18nType_1 = (function () {
    function DatepickerI18nType() {
        this.language = DatepickerI18nType_1.ZH_CN;
    }
    return DatepickerI18nType;
}());
DatepickerI18nType.ZH_CN = "zh_CN";
DatepickerI18nType = DatepickerI18nType_1 = __decorate([
    core_1.Injectable()
], DatepickerI18nType);
exports.DatepickerI18nType = DatepickerI18nType;
/**
 * 日期选择il8n
 */
var DatepickerI18n = (function (_super) {
    __extends(DatepickerI18n, _super);
    function DatepickerI18n(_i18n) {
        var _this = _super.call(this) || this;
        _this._i18n = _i18n;
        return _this;
    }
    DatepickerI18n.prototype.getWeekdayShortName = function (weekday) {
        return DATEPICKER_I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
    };
    DatepickerI18n.prototype.getMonthShortName = function (month) {
        return DATEPICKER_I18N_VALUES[this._i18n.language].months[month - 1];
    };
    DatepickerI18n.prototype.getMonthFullName = function (month) {
        return this.getMonthShortName(month);
    };
    return DatepickerI18n;
}(ng_bootstrap_1.NgbDatepickerI18n));
DatepickerI18n = __decorate([
    core_1.Injectable()
], DatepickerI18n);
exports.DatepickerI18n = DatepickerI18n;
var DatepickerI18nType_1;
