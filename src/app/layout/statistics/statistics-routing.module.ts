/**
 * Created by daivd on 2017/9/21.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StatisticsComponent} from "./statistics.component";
import {LibraryStatisticsComponent} from "./library-statistics/library-statistics.component";
import {RequestStatisticsComponent} from "./request-statistics/request-statistics.component";
import {ResourceStatisticsComponent} from "./resource-statistics/resource-statistics.component";


const routes: Routes = [
    {
        path: '',
        component: StatisticsComponent,
        children: [
            {
                path: 'library',
                component: LibraryStatisticsComponent
            },
            {
                path: 'rquest',
                component: RequestStatisticsComponent
            },
            {
                path: 'resource',
                component: ResourceStatisticsComponent
            },



        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StatisticsRoutingModule { }

