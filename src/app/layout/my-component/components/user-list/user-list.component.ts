import {Component, OnInit, Input} from '@angular/core';
import {SystemService} from "../../../../shared/services/system/system.service";
import {AlertConfig, AlertType} from "../../../../shared/components/modal/modal-model";
import {ModalService} from "../../../../shared/components/modal/modal.service";
import {AppService} from "../../../../app.service";
import {SwitchTheme} from "../switch/switch-model";
import {ApiUrlService} from "../../../../shared/services/api-url.service";
import {UserService} from "../../../../shared/services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
    theme:string=SwitchTheme.THTME_WARNING;
    theme2:string=SwitchTheme.THTME_SUCCESS;
    @Input()
    title:string;
    header:string='添加会员';
    editheader:string='修改会员信息';
    addBtnText:string=`添加`
    editBtnText:string='修改'
    @Input()
    users:Array<any>;

    @Input()
    transformPageData:any;

    keyword:string;

    state:0

    //@Output() onSearchKeyWord:EventEmitter<string>=new EventEmitter();

  constructor(
      private appService: AppService,
      private systemService:SystemService,
      private modalService:ModalService,
      private apiUrlService:ApiUrlService,
      private userService:UserService,
  ) { }

  ngOnInit() {
  }





    change(event,id){
        event=event?1:0;
        this.systemService.updateMemberIsopen(event,id,()=>{},()=>{})
    }

    onSearch(){
        this.appService.keywordEventEmitter.emit(this.keyword)
    }



    filterItems(status){
        this.state=status;
        this.transformPageData.url=this.apiUrlService.getAllmemberByPageUrl+'?status='+status
        this.appService.pageRefreshEventEmitter.emit(this.transformPageData);//创建一个事件流发送传递过来的分页信息
    }

    checkUser(id,status){
        this.userService.updateStatusByUserId(id,status,res=>{
            alert(res.msg)
        },err=>{
            alert(err.msg)
        })
        this.appService.pageRefreshEventEmitter.emit(this.transformPageData);//创建一个事件流发送传递过来的分页信息

    }

}
