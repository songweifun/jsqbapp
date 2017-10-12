import { NgModule } from '@angular/core';
import {StatisticsRoutingModule} from "./statistics-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {StatisticsComponent} from "./statistics.component";
import { LibraryStatisticsComponent } from './library-statistics/library-statistics.component';

import { RequestStatisticsComponent } from './request-statistics/request-statistics.component';
import { ResourceStatisticsComponent } from './resource-statistics/resource-statistics.component';

@NgModule({
  imports: [
      StatisticsRoutingModule,
      SharedModule,
      NgbModule.forRoot(), //这个不引入好像input选不中
  ],
  declarations: [
      StatisticsComponent,
      LibraryStatisticsComponent,

      RequestStatisticsComponent,
      ResourceStatisticsComponent
  ]
})
export class StatisticsModule { }
