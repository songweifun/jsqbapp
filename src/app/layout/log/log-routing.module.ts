/**
 * Created by daivd on 2017/9/29.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogComponent } from './log.component'
import {EnterComponent} from "./enter/enter.component";
import {OperateComponent} from "./operate/operate.component";

const routes: Routes = [
    {
        path: '',
        component: LogComponent,
        children: [
            {
                path: 'enter',
                component: EnterComponent
            },
            {
                path: 'operate',
                component: OperateComponent
            },
            // {
            //     path: 'resource',
            //     component: ResourceStatisticsComponent
            // },



        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LogRoutingModule { }


