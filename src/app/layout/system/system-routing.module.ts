import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SystemComponent} from "./system.component";
import { LibraryComponent } from './library/library.component';
import {Sip2ConfigComponent} from "./sip2-config/sip2-config.component";

const routes: Routes = [
    {
        path: '',
        component: SystemComponent,
        children: [
            {
                path: 'library',
                component: LibraryComponent
            },
            {
                path: 'sip2',
                component: Sip2ConfigComponent
            },

        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SystemRoutingModule { }
