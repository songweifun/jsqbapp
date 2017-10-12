import { NgModule } from '@angular/core';

import {IpmapingRoutingModule} from './ipmaping-routing.module';
import {IpmapingComponent} from './ipmaping.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SharedModule} from "../../shared/shared.module";
import { IpsMapComponent } from './ips-map/ips-map.component';
import {IpListComponent} from "../my-component/components/ip-list/ip-list.component";
import {AddIpModalComponent} from "../my-component/components/add-ip-modal/add-ip-modal.component";
import { IpWhiteComponent } from './ip-white/ip-white.component';
import { IpBlackComponent } from './ip-black/ip-black.component';

@NgModule({
    imports: [
        IpmapingRoutingModule,
        NgbModule.forRoot(),
        SharedModule
    ],
    declarations: [
        IpmapingComponent,
        IpsMapComponent,
        IpListComponent,
        AddIpModalComponent,
        IpWhiteComponent,
        IpBlackComponent
    ]
})
export class IpmapingModule { }
