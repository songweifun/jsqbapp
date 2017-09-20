import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import {IpmapingRoutingModule} from './ipmaping-routing.module';
import {IpmapingComponent} from './ipmaping.component';
import {PageHeaderModule } from '../../shared';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FileUploadModule} from "ng2-file-upload";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import { IpsMapComponent } from './ips-map/ips-map.component';
import {IpListComponent} from "../my-component/components/ip-list/ip-list.component";
import {AddIpModalComponent} from "../my-component/components/add-ip-modal/add-ip-modal.component";
import { IpWhiteComponent } from './ip-white/ip-white.component';
import { IpBlackComponent } from './ip-black/ip-black.component';

@NgModule({
    imports: [
        CommonModule,
        Ng2Charts,
        IpmapingRoutingModule,
        PageHeaderModule,
        NgbModule.forRoot(),
        FileUploadModule,
        FormsModule,
        ReactiveFormsModule,
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
