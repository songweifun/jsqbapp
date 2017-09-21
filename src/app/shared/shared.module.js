"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var forms_1 = require("@angular/forms");
var pagination_component_1 = require("../layout/my-component/components/pagination/pagination.component");
var http_pagination_component_1 = require("../layout/my-component/components/pagination/http-pagination.component");
var http_1 = require("@angular/http");
var modal_component_1 = require("../layout/bs-component/components/modal/modal.component");
var file_upload_component_1 = require("../layout/my-component/components/file-upload/file-upload.component");
var ng2_file_upload_1 = require("ng2-file-upload");
var order_list_component_1 = require("../layout/my-component/components/order-list/order-list.component");
var switch_component_1 = require("../layout/my-component/components/switch/switch.component");
var modal_service_1 = require("./components/modal/modal.service");
var alert_component_1 = require("./components/modal/alert.component");
var confirm_component_1 = require("./components/modal/confirm.component");
var datepickerI18n_1 = require("./components/datepickerI18n/datepickerI18n");
/**
 * 公共模块
 */
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            //导入其他module，其它module暴露的出的Components、Directives、Pipes等可以在本module的组件中被使用。
            // 比如导入CommonModule后就可以使用NgIf、NgFor等指令。
            common_1.CommonModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            ng2_file_upload_1.FileUploadModule,
            ng_bootstrap_1.NgbModule.forRoot(),
        ],
        declarations: [
            //模块内部Components/Directives/Pipes的列表，声明一下这个模块内部成员
            pagination_component_1.PaginationComponent,
            http_pagination_component_1.HttpPaginationComponent,
            modal_component_1.ModalComponent,
            file_upload_component_1.FileUploadComponent,
            order_list_component_1.OrderListComponent,
            switch_component_1.SwitchComponent,
            alert_component_1.AlertComponent,
            confirm_component_1.ConfirmComponent,
        ],
        providers: [
            //指定应用程序的根级别需要使用的service
            modal_service_1.ModalService,
            datepickerI18n_1.DatepickerI18n,
            datepickerI18n_1.DatepickerI18nType
            //ToastService
        ],
        entryComponents: [
            //不会再模板中被引用到的组件。这个属性一般情况下只有ng自己使用，一般是bootstrap组件或者路由组件，ng会自动把bootstrap、路由组件放入其中。
            // 除非不通过路由动态将component加入到dom中，否则不会用到这个属性。
            confirm_component_1.ConfirmComponent,
            alert_component_1.AlertComponent,
        ],
        exports: [
            //exports：用来控制将哪些内部成员暴露给外部使用。
            // 导入一个module并不意味着会自动导入这个module内部导入的module所暴露出的公共成员。除非导入的这个module把它内部导入的module写到exports中。
            common_1.CommonModule,
            pagination_component_1.PaginationComponent,
            http_pagination_component_1.HttpPaginationComponent,
            modal_component_1.ModalComponent,
            order_list_component_1.OrderListComponent,
            switch_component_1.SwitchComponent,
            alert_component_1.AlertComponent,
            confirm_component_1.ConfirmComponent,
        ]
        //bootstrap：通常是app启动的根组件，一般只有一个component。bootstrap中的组件会自动被放入到entryComponents中。
    })
], SharedModule);
exports.SharedModule = SharedModule;
