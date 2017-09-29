import { NgModule } from '@angular/core';
import { LogComponent } from './log.component';
import {SharedModule} from "../../shared/shared.module";
import {LogRoutingModule} from "./log-routing.module";
import { EnterComponent } from './enter/enter.component';
import { OperateComponent } from './operate/operate.component';
import {LogListComponent} from "../my-component/components/log-list/log-list.component";

@NgModule({
  imports: [
      SharedModule,
      LogRoutingModule,

  ],
  declarations: [
      LogComponent,
      EnterComponent,
      OperateComponent,
      LogListComponent,
  ]
})
export class LogModule { }
