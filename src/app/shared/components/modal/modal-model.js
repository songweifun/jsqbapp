"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 确认框配置
 */
var ConfirmConfig = (function () {
    function ConfirmConfig(content, declineBtnCls, declineBtnTxt, approveBtnCls, approveBtnTxt) {
        if (content === void 0) { content = ''; }
        if (declineBtnCls === void 0) { declineBtnCls = 'btn-secondary'; }
        if (declineBtnTxt === void 0) { declineBtnTxt = '取消'; }
        if (approveBtnCls === void 0) { approveBtnCls = 'btn-primary'; }
        if (approveBtnTxt === void 0) { approveBtnTxt = '确定'; }
        this.content = content;
        this.declineBtnCls = declineBtnCls;
        this.declineBtnTxt = declineBtnTxt;
        this.approveBtnCls = approveBtnCls;
        this.approveBtnTxt = approveBtnTxt;
    }
    ConfirmConfig.prototype.getContent = function () {
        return this.content;
    };
    ConfirmConfig.prototype.getdeclineBtnCls = function () {
        return this.declineBtnCls;
    };
    ConfirmConfig.prototype.getDeclineBtnTxt = function () {
        return this.declineBtnCls;
    };
    ConfirmConfig.prototype.getApproveBtnCls = function () {
        return this.approveBtnCls;
    };
    ConfirmConfig.prototype.getApproveBtnTxt = function () {
        return this.approveBtnTxt;
    };
    return ConfirmConfig;
}());
exports.ConfirmConfig = ConfirmConfig;
/**
 * 警告框类型
 */
var AlertType;
(function (AlertType) {
    AlertType[AlertType["INFO"] = 0] = "INFO";
    AlertType[AlertType["WARNING"] = 1] = "WARNING";
    AlertType[AlertType["ERROR"] = 2] = "ERROR";
})(AlertType = exports.AlertType || (exports.AlertType = {}));
/**
 * 警告框配置
 */
var AlertConfig = (function () {
    function AlertConfig(type, title, content, approveBtnCls, approveBtnTxt) {
        if (type === void 0) { type = AlertType.WARNING; }
        if (title === void 0) { title = ''; }
        if (content === void 0) { content = ''; }
        if (approveBtnCls === void 0) { approveBtnCls = 'btn-primary'; }
        if (approveBtnTxt === void 0) { approveBtnTxt = '确定'; }
        this.title = title;
        this.content = content;
        this.type = type;
        this.approveBtnCls = approveBtnCls;
        this.approveBtnTxt = approveBtnTxt;
    }
    AlertConfig.prototype.getType = function () {
        return this.type;
    };
    AlertConfig.prototype.getTitle = function () {
        return this.title;
    };
    AlertConfig.prototype.getContent = function () {
        return this.content;
    };
    AlertConfig.prototype.getApproveBtnCls = function () {
        return this.approveBtnCls;
    };
    AlertConfig.prototype.getApproveBtnTxt = function () {
        return this.approveBtnTxt;
    };
    return AlertConfig;
}());
exports.AlertConfig = AlertConfig;
