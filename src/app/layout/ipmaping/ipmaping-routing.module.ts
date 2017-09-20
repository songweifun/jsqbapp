import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {IpmapingComponent} from "./ipmaping.component";
import {IpsMapComponent} from "./ips-map/ips-map.component";
import {IpWhiteComponent} from "./ip-white/ip-white.component";
import {IpBlackComponent} from "./ip-black/ip-black.component";

const routes: Routes = [
    {
        path: '',
        component: IpmapingComponent,
        children: [
            {
                path: 'ips-map',
                component: IpsMapComponent
            },
            {
                path: 'ip-white',
                component: IpWhiteComponent
            },
            {
                path: 'ip-black',
                component: IpBlackComponent
            },


        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IpmapingRoutingModule { }
