import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import {superAdminGuard} from "../guard/superAdmin.guard";
import {ModalService} from "../shared/components/modal/modal.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ConfirmComponent} from "../shared/components/modal/confirm.component";
import {AlertComponent} from "../shared/components/modal/alert.component";
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },


            { path: 'orders', loadChildren: './orders/orders.module#OrdersModule' },
            {
                path: 'ipmaping',
                loadChildren: './ipmaping/ipmaping.module#IpmapingModule',
                canActivate:[superAdminGuard],
            },
            {
                path: 'system',
                loadChildren: './system/system.module#SystemModule',
                canActivate:[superAdminGuard],
            },
            { path: 'statistics', loadChildren: './statistics/statistics.module#StatisticsModule' },
            {
                path: 'member',
                loadChildren: './member/member.module#MemberModule',
                canActivate:[superAdminGuard],
            },
            {
                path: 'log',
                loadChildren: './log/log.module#LogModule',
                canActivate:[superAdminGuard],
            },

            //{ path: 'my-transmit', loadChildren: './my-transmit/my-transmit.module#MyTransmitModule' },


           // { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
           // { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
           // { path: 'forms', loadChildren: './form/form.module#FormModule' },
           // { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
           // { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            //{ path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            //{ path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        NgbModule.forRoot(),
        SharedModule
    ],
    exports: [RouterModule],
    providers:[superAdminGuard,ModalService],
    entryComponents : [

        ConfirmComponent,
        AlertComponent,

    ],
})
export class LayoutRoutingModule { }
