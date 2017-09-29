/**
 * Created by daivd on 2017/9/27.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MemberComponent} from "./member.component";
import {UserManageComponent} from "./user-manage/user-manage.component";


const routes: Routes = [
    {
        path: '',
        component: MemberComponent,
        children: [
            {
                path: 'user',
                component: UserManageComponent
            },
            // {
            //     path: 'rquest',
            //     component: RequestStatisticsComponent
            // },
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
export class MemberRoutingModule { }


