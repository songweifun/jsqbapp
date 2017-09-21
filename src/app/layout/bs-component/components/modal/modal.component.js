"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ModalComponent = (function () {
    function ModalComponent(modalService, sendArticleService) {
        this.modalService = modalService;
        this.sendArticleService = sendArticleService;
        this.options = { size: 'lg' };
        this.isUploaded = false;
    }
    ModalComponent.prototype.open = function (content) {
        var _this = this;
        this.myModalRef = this.modalService.open(content, this.options);
        this.myModalRef.result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ModalComponent.prototype.getDismissReason = function (reason) {
        if (reason === ng_bootstrap_1.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ng_bootstrap_1.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ModalComponent.prototype.sendArticle = function (orderId) {
        var _this = this;
        this.sendArticleService.sendArticle(orderId).subscribe(function (data) {
            if (data.errorCode === 0) {
                alert('传递成功');
                _this.myModalRef.close();
            }
            else {
                alert('传递失败');
                //this.myModalRef.close()
            }
        });
    };
    ModalComponent.prototype.setIsupload = function (event) {
        console.log(event);
        this.isUploaded = event;
    };
    return ModalComponent;
}());
__decorate([
    core_1.Input()
], ModalComponent.prototype, "orderInfo", void 0);
ModalComponent = __decorate([
    core_1.Component({
        selector: 'app-modal',
        templateUrl: './modal.component.html',
        styleUrls: ['./modal.component.scss']
    })
], ModalComponent);
exports.ModalComponent = ModalComponent;
