import { NgModule } from '@angular/core';
import { SystemComponent } from './system.component';
import { SystemRoutingModule } from './system-routing.module';
import { LibraryComponent } from './library/library.component';
import { SharedModule } from '../../shared/shared.module';
import { AddLibraryModalComponent } from '../my-component/components/add-library-modal/add-library-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Sip2ConfigComponent } from './sip2-config/sip2-config.component';

@NgModule({
  imports: [
    SystemRoutingModule,
    SharedModule,
    NgbModule.forRoot(), //这个不引入好像input选不中
  ],
  declarations: [
    SystemComponent,
    LibraryComponent,
    AddLibraryModalComponent,
    Sip2ConfigComponent
  ]
})
export class SystemModule { }
