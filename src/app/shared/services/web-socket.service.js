"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
require("rxjs/Rx");
var WebSocketService = (function () {
    function WebSocketService() {
    }
    WebSocketService.prototype.createObservableSocket = function (url, token) {
        var _this = this;
        this.ws = new WebSocket(url); //连接到websocket服务器
        return new rxjs_1.Observable(function (observer) {
            //什么时候发射下一个元素
            //什么时候抛出一个异常
            //什么时候发出流接收信号
            _this.ws.onmessage = function (event) { return observer.next(event.data); };
            _this.ws.onerror = function (event) { return observer.error(event); };
            _this.ws.onclose = function (event) { return observer.complete(); };
            _this.ws.onopen = function (event) { return _this.sendMessage({ token: token ? token : 'a' }); }; //传参用
            return function () { return _this.ws.close(); }; //这个毁掉函数会在流被取消订阅是调用 调用这个函数后如果没有客户端服务器端停止推送
        });
        //.map(message=>{JSON.parse(message)})
    };
    WebSocketService.prototype.sendMessage = function (message) {
        this.ws.send(JSON.stringify(message)); //send方法发送字符串
    };
    return WebSocketService;
}());
WebSocketService = __decorate([
    core_1.Injectable()
], WebSocketService);
exports.WebSocketService = WebSocketService;
