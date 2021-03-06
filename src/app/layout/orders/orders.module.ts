import { NgModule } from '@angular/core';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { MyTransmitComponent } from './my-transmit/my-transmit.component';
import { NewApplyComponent } from './new-apply/new-apply.component';
import { AllTransmitComponent } from './all-transmit/all-transmit.component';
import {SharedModule} from "../../shared/shared.module";
import { LogisticsComponent } from './logistics/logistics.component';
import { ExtractComponent } from './extract/extract.component';
import { ReturnComponent } from './return/return.component';

@NgModule({
    imports: [
        OrdersRoutingModule,
        NgbModule.forRoot(),
        SharedModule
    ],
    declarations: [
        OrdersComponent,
        MyTransmitComponent,
        NewApplyComponent,
        AllTransmitComponent,
        LogisticsComponent,
        ExtractComponent,
        ReturnComponent,
    ]
})
export class OrdersModule { }
