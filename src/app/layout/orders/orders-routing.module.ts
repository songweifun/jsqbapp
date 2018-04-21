import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersComponent } from './orders.component';
import {MyTransmitComponent} from "./my-transmit/my-transmit.component";
import {NewApplyComponent} from "./new-apply/new-apply.component";
import {AllTransmitComponent} from "./all-transmit/all-transmit.component";
import {LeaveOrderNewGuard} from "../../guard/leaveOrderNew.guard";
import {LogisticsComponent} from "./logistics/logistics.component";
import {ExtractComponent} from "./extract/extract.component";
import {ReturnComponent} from "./return/return.component";

const routes: Routes = [
    {
        path: '',
        component: OrdersComponent,
        children: [
            {
                path: 'my-transmit',
                component: MyTransmitComponent
            },
            {
                path: 'new-apply',
                component: NewApplyComponent,
                canDeactivate:[LeaveOrderNewGuard]
            },
            {
                path: 'all-transmit',
                component: AllTransmitComponent
            },
            {
                path: 'logistics',
                component: LogisticsComponent
            },
            {
                path: 'extract',
                component: ExtractComponent
            },
            {
                path: 'return',
                component: ReturnComponent
            }

        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrdersRoutingModule { }
