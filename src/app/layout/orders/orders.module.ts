import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { PageHeaderModule } from '../../shared';
import {ModalComponent} from "../bs-component/components/modal/modal.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FileUploadComponent} from "../my-component/components/file-upload/file-upload.component";
import {FileUploadModule} from "ng2-file-upload";
import {OrderListComponent} from "../my-component/components/order-list/order-list.component";
import { MyTransmitComponent } from './my-transmit/my-transmit.component';
import { NewApplyComponent } from './new-apply/new-apply.component';
import {PaginationComponent} from "../my-component/components/pagination/pagination.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpPaginationComponent} from "../my-component/components/pagination/http-pagination.component";
import { AllTransmitComponent } from './all-transmit/all-transmit.component';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        Ng2Charts,
        OrdersRoutingModule,
        PageHeaderModule,
        NgbModule.forRoot(),
        FileUploadModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [
        OrdersComponent,
        // ModalComponent,
        // FileUploadComponent,
         //OrderListComponent,
          MyTransmitComponent,
         NewApplyComponent,
        // PaginationComponent,
        // HttpPaginationComponent,
         AllTransmitComponent
    ]
})
export class OrdersModule { }
