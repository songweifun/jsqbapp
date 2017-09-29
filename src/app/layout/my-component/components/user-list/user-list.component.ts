import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {SystemService} from "../../../../shared/services/system/system.service";
import {AlertConfig, AlertType} from "../../../../shared/components/modal/modal-model";
import {ToastService} from "../../../../shared/components/toast/toast.service";
import {ModalService} from "../../../../shared/components/modal/modal.service";
import {AppService} from "../../../../app.service";
import {SwitchTheme} from "../switch/switch-model";
import {Observable} from "rxjs";

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

    //@Output() onSearchKeyWord:EventEmitter<string>=new EventEmitter();

  constructor(
      private appService: AppService,
      private systemService:SystemService,
      private modalService:ModalService,
      private toastService:ToastService,
  ) { }

  ngOnInit() {
  }

    deleteMember(){
        alert('delte member');
    }


    editMember(event,id){
        //alert(111)
        //console.log(event.formModel.value)
        //this.formModel=event.formModel;
        this.systemService.updateMember(event.formModel.value,id).subscribe(
            data=>{
                //console.log(data)
                if(data.errorCode===0){
                    const alertCfg = new AlertConfig(AlertType.INFO, '会员管理', '修改成功');
                    this.modalService.alert(alertCfg);
                    event.ref.close()
                    this.appService.pageRefreshEventEmitter.emit(this.transformPageData);//创建一个事件流发送传递过来的分页信息
                }else{
                    const alertCfg = new AlertConfig(AlertType.ERROR, '会员管理', data.msg);
                    this.modalService.alert(alertCfg);

                }
            }
        )
    }

    change(event,id){
        event=event?1:0;
        this.systemService.updateMemberIsopen(event,id).subscribe(
            data=>{


            }
        )
    }

    onSearch(){
        this.appService.keywordEventEmitter.emit(this.keyword)
    }

}
