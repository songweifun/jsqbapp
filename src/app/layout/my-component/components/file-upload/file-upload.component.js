"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng2_file_upload_1 = require("ng2-file-upload");
//const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
var URL = 'http://localhost/after/jsqb/jsqbapi/public/api/v1/upload/?XDEBUG_SESSION_START=18239';
var FileUploadComponent = (function () {
    function FileUploadComponent(tokenService) {
        this.tokenService = tokenService;
        this.isUploaded = new core_1.EventEmitter();
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    FileUploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        this.uploader = new ng2_file_upload_1.FileUploader({ url: URL, method: 'post', maxFileSize: 500000, itemAlias: 'pdf', headers: [{ name: 'token', value: localStorage.getItem('token') }, { 'name': 'orderId', value: this.orderId }] });
        //定义两个回调
        this.uploader.onBeforeUploadItem = function (fileItem) {
            _this.onBeforeUploadItem(fileItem);
        };
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            _this.onSuccessItem(item, response, status, headers);
        };
    };
    FileUploadComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    FileUploadComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    //要上传文件之前的回调
    FileUploadComponent.prototype.onBeforeUploadItem = function (fileItem) {
        //alert(222)
        this.tokenService.refreshToken();
        return true;
    };
    //上传一个文件成功的回调
    FileUploadComponent.prototype.onSuccessItem = function (item, response, status, headers) {
        this.isUploaded.emit(true);
        return true;
        //alert(1111)
    };
    return FileUploadComponent;
}());
__decorate([
    core_1.Input()
], FileUploadComponent.prototype, "orderId", void 0);
__decorate([
    core_1.Output()
], FileUploadComponent.prototype, "isUploaded", void 0);
FileUploadComponent = __decorate([
    core_1.Component({
        selector: 'app-file-upload',
        templateUrl: './file-upload.component.html',
        styleUrls: ['./file-upload.component.scss']
    })
], FileUploadComponent);
exports.FileUploadComponent = FileUploadComponent;
