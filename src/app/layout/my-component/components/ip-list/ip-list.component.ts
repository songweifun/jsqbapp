import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {AppService} from "../../../../app.service";
import {SwitchTheme} from "../switch/switch-model";
import {AlertConfig, AlertType, ConfirmConfig} from "../../../../shared/components/modal/modal-model";
import {ModalService} from "../../../../shared/components/modal/modal.service";
import {ToastService} from "../../../../shared/components/toast/toast.service";
import {SystemService} from "../../../../shared/services/system/system.service";

@Component({
  selector: 'app-ip-list',
  templateUrl: './ip-list.component.html',
  styleUrls: ['./ip-list.component.scss']
})
export class IpListComponent implements OnInit,OnChanges {
    ngOnChanges(changes: SimpleChanges): void {
        // console.log(this.transformPageData+'999999999999999999')

    }
    @Input()
    title:string;

    //swbtn: boolean = true;
    theme:string=SwitchTheme.THTME_WARNING;
    theme2:string=SwitchTheme.THTME_SUCCESS;

    header:string='添加映射关系';
    editheader:string='修改映射关系';
    addBtnText:string=`添加`
    editBtnText:string='修改'
    @Input()
    ipMaps:Array<any>;

    @Input()
    transformPageData:any


    @Input()
    isWhite:boolean=false;

    @Input()
    isBlack:boolean=false;

    // formModel:FormGroup=new FormGroup({
    //     ipRange:new FormGroup({
    //         start:new FormControl(),
    //         end:new FormControl()
    //     }),
    //
    //     mapName:new FormControl(),
    //     isOpen:new FormControl(1)
    // })

  constructor(
      private appService: AppService,
      private modalService:ModalService,
      private toastService:ToastService,
      private systemService:SystemService,
      //private ngbActiveModal:NgbActiveModal
  ) {




  }

  ngOnInit() {

  }

    change($event,id){
        //alert($event);
        //alert(id)

        this.systemService.updateIsopen($event,id,()=>{},()=>{})
    }

    changeIsForbid($event,id){
        //alert(id)
        this.systemService.updateIsForbid($event,id,data=>{
            this.appService.pageRefreshEventEmitter.emit(this.transformPageData);//创建一个事件流发送传递过来的分页信息
        },err=>{console.log(err)})

    }


    // openInfo() {
    //     const alertCfg = new AlertConfig(AlertType.INFO, '标题', '这是一条INFO消息!');
    //     let result=this.modalService.alert(alertCfg);
    //     //console.log(result)
    // }
    //
    //
    // openWarning(){
    //     const toastCfg = new ToastConfig(ToastType.WARNING,'','这是一条WARNING消息!', 3000);
    //     this.toastService.toast(toastCfg);
    // }
    //
    // openSuccess(){
    //     const toastCfg = new ToastConfig(ToastType.SUCCESS,'','这是一条SUCCESS消息!', 3000);
    //     this.toastService.toast(toastCfg);
    // }
    //
    // openError(){
    //     const toastCfg = new ToastConfig(ToastType.ERROR,'','这是一条ERROR消息!', 3000);
    //     let result=this.toastService.toast(toastCfg);
    //     console.log(result);
    //     //alert(1111)
    // }


    addIpMap(event,isBlack){
        //alert(isBlack)
        //console.log(event)

        this.systemService.addIpMap(event.formModel.value,isBlack,data=>{
            if(data.errorCode===0){
                const alertCfg = new AlertConfig(AlertType.INFO, 'IP映射', '添加成功');
                this.modalService.alert(alertCfg);
                event.ref.close()
                //this.transformPageData.pageNumber=1;
                this.appService.pageRefreshEventEmitter.emit(this.transformPageData);//创建一个事件流发送传递过来的分页信息

            }else{
                const alertCfg = new AlertConfig(AlertType.ERROR, 'IP映射', data.msg);
                this.modalService.alert(alertCfg);

            }
        },err=>{console.log(err)})
    }

    editIpMap(event,id){
       //console.log(event.formModel.value)
        //this.formModel=event.formModel;
        this.systemService.updateIpMap(event.formModel.value,id,data=>{
            //console.log(data)
            if(data.errorCode===0){
                const alertCfg = new AlertConfig(AlertType.INFO, 'IP映射', '修改成功');
                this.modalService.alert(alertCfg);
                event.ref.close()
                this.appService.pageRefreshEventEmitter.emit(this.transformPageData);//创建一个事件流发送传递过来的分页信息
            }else{
                const alertCfg = new AlertConfig(AlertType.ERROR, 'IP映射', data.msg);
                this.modalService.alert(alertCfg);

            }
        },err=>console.log(err))
    }
    deleteIpMap(id){
        const confirmCfg = new ConfirmConfig('您确定要删除此映射吗？');
        this.modalService.confirm(confirmCfg).then((result) => {
            this.systemService.deleteIpMap(id, data=>{
                if(data.errorCode===0){
                    const alertCfg = new AlertConfig(AlertType.INFO, 'IP映射', '删除成功');
                    this.modalService.alert(alertCfg);
                    this.appService.pageRefreshEventEmitter.emit(this.transformPageData);//创建一个事件流发送传递过来的分页信息
                }else{
                    const alertCfg = new AlertConfig(AlertType.ERROR, 'IP映射', '删除失败');
                    this.modalService.alert(alertCfg);

                }

            },err=>console.log(err))
        }, (reason) => {
            //console.log(reason+22222222222)
        });

    }

}
