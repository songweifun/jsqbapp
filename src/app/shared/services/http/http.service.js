"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by yanxiaojun617@163.com on 12-27.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var utils_1 = require("../util/utils");
/**
 * http服务
 */
var HttpService = HttpService_1 = (function () {
    function HttpService(http, spinService, tokenService) {
        this.http = http;
        this.spinService = spinService;
        this.tokenService = tokenService;
    }
    HttpService.prototype.request = function (url, options, success, error) {
        var _this = this;
        url = utils_1.Utils.replaceUrl(url);
        this.spinService.spin(true);
        this.http.request(url, options).subscribe(function (res) {
            _this.spinService.spin(false);
            success(res.ok, res.json(), res);
        }, function (err) {
            _this.spinService.spin(false);
            //处理请求失败
            var msg = _this.requestFailed(url, options, err);
            error(err.ok, msg, err);
        });
    };
    HttpService.prototype.get = function (url, paramMap, success, error) {
        if (paramMap === void 0) { paramMap = null; }
        if (success === void 0) { success = function (successful, data, res) { }; }
        if (error === void 0) { error = function (successful, msg, err) { }; }
        if (this.tokenService.verifyToken() === false) {
            this.tokenService.getToken(localStorage.getItem('ac'), localStorage.getItem('se'));
        }
        var myHeaders = new http_1.Headers();
        myHeaders.append('token', localStorage.getItem('token'));
        return this.request(url, new http_1.RequestOptions({
            method: http_1.RequestMethod.Get,
            search: HttpService_1.buildURLSearchParams(paramMap),
            headers: myHeaders
        }), success, error);
    };
    HttpService.prototype.post = function (url, body, success, error) {
        if (body === void 0) { body = null; }
        if (success === void 0) { success = function (successful, data, res) { }; }
        if (error === void 0) { error = function (successful, msg, err) { }; }
        return this.request(url, new http_1.RequestOptions({
            method: http_1.RequestMethod.Post,
            body: body,
            headers: new http_1.Headers({
                'Content-Type': 'application/json; charset=UTF-8'
            })
        }), success, error);
    };
    HttpService.prototype.postFormData = function (url, paramMap, success, error) {
        if (paramMap === void 0) { paramMap = null; }
        if (success === void 0) { success = function (successful, data, res) { }; }
        if (error === void 0) { error = function (successful, msg, err) { }; }
        return this.request(url, new http_1.RequestOptions({
            method: http_1.RequestMethod.Post,
            search: HttpService_1.buildURLSearchParams(paramMap).toString(),
            headers: new http_1.Headers({
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            })
        }), success, error);
    };
    HttpService.prototype.put = function (url, body, success, error) {
        if (body === void 0) { body = null; }
        if (success === void 0) { success = function (successful, data, res) { }; }
        if (error === void 0) { error = function (successful, msg, err) { }; }
        return this.request(url, new http_1.RequestOptions({
            method: http_1.RequestMethod.Put,
            body: body
        }), success, error);
    };
    HttpService.prototype.delete = function (url, paramMap, success, error) {
        if (paramMap === void 0) { paramMap = null; }
        if (success === void 0) { success = function (successful, data, res) { }; }
        if (error === void 0) { error = function (successful, msg, err) { }; }
        return this.request(url, new http_1.RequestOptions({
            method: http_1.RequestMethod.Delete,
            search: HttpService_1.buildURLSearchParams(paramMap).toString()
        }), success, error);
    };
    HttpService.prototype.patch = function (url, body, success, error) {
        if (body === void 0) { body = null; }
        if (success === void 0) { success = function (successful, data, res) { }; }
        if (error === void 0) { error = function (successful, msg, err) { }; }
        return this.request(url, new http_1.RequestOptions({
            method: http_1.RequestMethod.Patch,
            body: body
        }), success, error);
    };
    HttpService.prototype.head = function (url, paramMap, success, error) {
        if (paramMap === void 0) { paramMap = null; }
        if (success === void 0) { success = function (successful, data, res) { }; }
        if (error === void 0) { error = function (successful, msg, err) { }; }
        return this.request(url, new http_1.RequestOptions({
            method: http_1.RequestMethod.Head,
            search: HttpService_1.buildURLSearchParams(paramMap).toString()
        }), success, error);
    };
    HttpService.prototype.options = function (url, paramMap, success, error) {
        if (paramMap === void 0) { paramMap = null; }
        if (success === void 0) { success = function (successful, data, res) { }; }
        if (error === void 0) { error = function (successful, msg, err) { }; }
        return this.request(url, new http_1.RequestOptions({
            method: http_1.RequestMethod.Options,
            search: HttpService_1.buildURLSearchParams(paramMap).toString()
        }), success, error);
    };
    /**
     * 将对象转为查询参数
     * @param paramMap
     * @returns {URLSearchParams}
     */
    HttpService.buildURLSearchParams = function (paramMap) {
        var params = new http_1.URLSearchParams();
        if (!paramMap) {
            return params;
        }
        for (var key in paramMap) {
            var val = paramMap[key];
            if (val instanceof Date) {
                val = utils_1.Utils.dateFormat(val, 'yyyy-MM-dd hh:mm:ss');
            }
            params.set(key, val);
        }
        return params;
    };
    /**
     * 处理请求失败事件
     * @param url
     * @param options
     * @param err
     */
    HttpService.prototype.requestFailed = function (url, options, err) {
        var msg = '请求发生异常', status = err.status;
        if (status === 0) {
            msg = '请求失败，请求响应出错';
        }
        else if (status === 404) {
            msg = '请求失败，未找到请求地址';
        }
        else if (status === 500) {
            msg = '请求失败，服务器出错，请稍后再试';
        }
        else {
            msg = "未知错误，请检查网络";
        }
        return msg;
    };
    return HttpService;
}());
HttpService = HttpService_1 = __decorate([
    core_1.Injectable()
], HttpService);
exports.HttpService = HttpService;
var HttpService_1;
