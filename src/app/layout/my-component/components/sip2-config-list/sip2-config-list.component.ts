import {Component, OnInit, Input} from '@angular/core';
import {SwitchTheme} from "../switch/switch-model";
import {SystemService} from "../../../../shared/services/system/system.service";
import {AlertConfig, AlertType, ConfirmConfig} from "../../../../shared/components/modal/modal-model";
import {ModalService} from "../../../../shared/components/modal/modal.service";
import {ApiUrlService} from "../../../../shared/services/api-url.service";
import {AppService} from "../../../../app.service";

@Component({
  selector: 'app-sip2-config-list',
  templateUrl: './sip2-config-list.component.html',
  styleUrls: ['./sip2-config-list.component.scss']
})
export class Sip2ConfigListComponent implements OnInit {

    //swbtn: boolean = true;
    theme:string=SwitchTheme.THTME_WARNING;
    theme2:string=SwitchTheme.THTME_SUCCESS;

  @Input() configs;
  @Input() transformPageData

    addBtnText:string=`添加`;
    editBtnText:string='修改';

    schools;

  constructor(
      private modalService:ModalService,
      private systemService:SystemService,
      private appService:AppService,
  ) { }

  ngOnInit() {
      this.systemService.getSchools(data=>this.schools=data,err=>{})

  }

    change(is_default,id){
      this.systemService.updateSip2ConfigIsDefault(is_default,id,res=>{},err=>{})

    }


    addSip2Config(event){

      //alert(event)
        this.systemService.addSip2Config(event.formModel.value,data=>{
            if(data.errorCode===0){
                const alertCfg = new AlertConfig(AlertType.INFO, 'Sip2配置', '添加成功');
                this.modalService.alert(alertCfg);
                event.ref.close()
                //this.transformPageData.pageNumber=1;
                 this.appService.pageRefreshEventEmitter.emit(this.transformPageData);//创建一个事件流发送传递过来的分页信息
                // this.systemService.getLibrarys(data=>{
                //     this.libraries=data.rows;
                // },err=>{})

            }else{
                const alertCfg = new AlertConfig(AlertType.ERROR, 'Sip2配置', data.msg);
                this.modalService.alert(alertCfg);

            }
        },err=>{})
    }

    editSip2Config(event,id){
        this.systemService.updateSip2Config(event.formModel.value,id,data=>{
            //console.log(data)
            if(data.errorCode===0){
                const alertCfg = new AlertConfig(AlertType.INFO, 'Sip2配置', '修改成功');
                this.modalService.alert(alertCfg);
                event.ref.close()
                 this.appService.pageRefreshEventEmitter.emit(this.transformPageData);//创建一个事件流发送传递过来的分页信息

            }else{
                const alertCfg = new AlertConfig(AlertType.ERROR, 'Sip2配置', '修改失败');
                this.modalService.alert(alertCfg);

            }
        },err=>{})

    }

    deleteSip2Config(id){
        const confirmCfg = new ConfirmConfig('您确定要删除此账号吗？');
        this.modalService.confirm(confirmCfg).then((result) => {
            this.systemService.deleteSip2Config(id, data=>{
                if(data.errorCode===0){
                    const alertCfg = new AlertConfig(AlertType.INFO, 'Sip2配置', '删除成功');
                    this.modalService.alert(alertCfg);
                    this.appService.pageRefreshEventEmitter.emit(this.transformPageData);//创建一个事件流发送传递过来的分页信息

                }else{
                    const alertCfg = new AlertConfig(AlertType.ERROR, 'Sip2配置', '删除失败');
                    this.modalService.alert(alertCfg);

                }

            },err=>{})
        }, (reason) => {
            //console.log(reason+22222222222)
        });

    }

}
