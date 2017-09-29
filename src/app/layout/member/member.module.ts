import { NgModule } from '@angular/core';
import {MemberComponent} from "./member.component";
import {SharedModule} from "../../shared/shared.module";
import {MemberRoutingModule} from "./member-routing.module";
import { UserManageComponent } from './user-manage/user-manage.component';
import {UserListComponent} from "../my-component/components/user-list/user-list.component";
import {AddMemberModalComponent} from "../my-component/components/add-member-modal/add-member-modal.component";

@NgModule({
  imports: [
      MemberRoutingModule,
      SharedModule
  ],
  declarations: [
      MemberComponent,
      UserManageComponent,
      UserListComponent,
      AddMemberModalComponent,

  ]
})
export class MemberModule { }
