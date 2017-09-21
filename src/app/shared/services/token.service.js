"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TokenService = (function () {
    function TokenService(http) {
        this.http = http;
    }
    TokenService.prototype.getToken = function (ac, se) {
        var _this = this;
        this.http.post('http://192.168.1.144/after/jsqb/jsqbapi/public/api/v1/token/app', { "ac": ac, "se": se })
            .map(function (res) { return res.json(); }).subscribe(function (data) { return _this.token = data.token; });
        return this.token;
    };
    TokenService.prototype.verifyToken = function () {
        var _this = this;
        this.http.post('http://192.168.1.144/after/jsqb/jsqbapi/public/api/v1/token/verify', { 'token': localStorage.getItem('token') })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.isValid = data.isValid; });
        return this.isValid;
    };
    TokenService.prototype.refreshToken = function () {
        if (this.verifyToken() === false) {
            localStorage.setItem('token', this.getToken(localStorage.getItem('ac'), localStorage.getItem('se')));
        }
    };
    return TokenService;
}());
TokenService = __decorate([
    core_1.Injectable()
], TokenService);
exports.TokenService = TokenService;
