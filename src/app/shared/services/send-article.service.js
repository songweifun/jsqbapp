"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var SendArticleService = (function () {
    function SendArticleService(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
    }
    SendArticleService.prototype.sendArticle = function (orderId) {
        // this.tokenService.verifyToken().subscribe(
        //     data=>{
        //         if(data.isValid===false){
        //             this.tokenService.getToken(localStorage.getItem('ac'),localStorage.getItem('se')).subscribe(
        //                 thisdata=>{
        //                     localStorage.setItem('token',thisdata.token)
        //                 }
        //             )
        //         }
        //     }
        // )
        if (this.tokenService.verifyToken() === false) {
            this.tokenService.getToken(localStorage.getItem('ac'), localStorage.getItem('se'));
        }
        var myHeaders = new http_1.Headers();
        myHeaders.append('token', localStorage.getItem('token'));
        return this.sourceData = this.http.post('http://192.168.1.144/after/jsqb/jsqbapi/public/api/v1/order/send', { 'id': orderId }, { headers: myHeaders }).map(function (res) { return res.json(); });
    };
    return SendArticleService;
}());
SendArticleService = __decorate([
    core_1.Injectable()
], SendArticleService);
exports.SendArticleService = SendArticleService;
