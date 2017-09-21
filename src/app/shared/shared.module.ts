import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";

import {PaginationComponent} from "../layout/my-component/components/pagination/pagination.component";
import {HttpPaginationComponent} from "../layout/my-component/components/pagination/http-pagination.component";
import {HttpModule} from "@angular/http";
import {ModalComponent} from "../layout/bs-component/components/modal/modal.component";
import {FileUploadComponent} from "../layout/my-component/components/file-upload/file-upload.component";
import {FileUploadModule} from "ng2-file-upload";
import {OrderListComponent} from "../layout/my-component/components/order-list/order-list.component";
import {SwitchComponent} from "../layout/my-component/components/switch/switch.component";
import {ModalService} from "./components/modal/modal.service";
import {AlertComponent} from "./components/modal/alert.component";
import {ConfirmComponent} from "./components/modal/confirm.component";
import {ToastComponent} from "./components/toast/toast.component";
import {ToastBoxComponent} from "./components/toast/toast-box.component";
import {DatepickerI18n, DatepickerI18nType} from "./components/datepickerI18n/datepickerI18n";
/**
 * 公共模块
 */
@NgModule({
    imports:      [
        //导入其他module，其它module暴露的出的Components、Directives、Pipes等可以在本module的组件中被使用。
        // 比如导入CommonModule后就可以使用NgIf、NgFor等指令。
        CommonModule,
        FormsModule,
        HttpModule,
        FileUploadModule,
        NgbModule.forRoot(),

    ],
    declarations: [
        //模块内部Components/Directives/Pipes的列表，声明一下这个模块内部成员

        PaginationComponent,
        HttpPaginationComponent,
        ModalComponent,
        FileUploadComponent,
        OrderListComponent,
        SwitchComponent,
        AlertComponent,
        ConfirmComponent,
        // ToastComponent,
        // ToastBoxComponent

    ],
    providers:    [
        //指定应用程序的根级别需要使用的service
        ModalService,
        DatepickerI18n,
        DatepickerI18nType
        //ToastService
    ],
    entryComponents : [
        //不会再模板中被引用到的组件。这个属性一般情况下只有ng自己使用，一般是bootstrap组件或者路由组件，ng会自动把bootstrap、路由组件放入其中。
        // 除非不通过路由动态将component加入到dom中，否则不会用到这个属性。
        ConfirmComponent,
        AlertComponent,
        // ToastComponent,
        // ToastBoxComponent
    ],
    exports:[
        //exports：用来控制将哪些内部成员暴露给外部使用。
        // 导入一个module并不意味着会自动导入这个module内部导入的module所暴露出的公共成员。除非导入的这个module把它内部导入的module写到exports中。
        CommonModule,
        PaginationComponent,
        HttpPaginationComponent,
        ModalComponent,
        OrderListComponent,
        SwitchComponent,
        AlertComponent,
        ConfirmComponent,
        // ToastComponent,
        // ToastBoxComponent

    ]
    //bootstrap：通常是app启动的根组件，一般只有一个component。bootstrap中的组件会自动被放入到entryComponents中。
})
export class SharedModule { }
