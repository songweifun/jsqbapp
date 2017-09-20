import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SystemComponent} from "./system.component";
import { LibraryComponent } from './library/library.component';

const routes: Routes = [
    {
        path: '',
        component: SystemComponent,
        children: [
            {
                path: 'library',
                component: LibraryComponent
            },
            


        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SystemRoutingModule { }
