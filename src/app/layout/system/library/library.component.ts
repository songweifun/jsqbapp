import {Component, OnInit, Input} from '@angular/core';
import { SystemService } from '../../../shared/services/system/system.service';
import { SwitchTheme } from '../../my-component/components/switch/switch-model';
import {AlertConfig, AlertType, ConfirmConfig} from 'app/shared/components/modal/modal-model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from 'app/shared/components/modal/modal.service';
import { AppService } from 'app/app.service';
import {ApiUrlService} from "../../../shared/services/api-url.service";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  title:string='成员馆设置';
  libraries:Array<any>=[];
  theme:string=SwitchTheme.THTME_WARNING;
  theme2:string=SwitchTheme.THTME_SUCCESS;


  header:string='添加共享馆';
  editheader:string='修改共享馆';
  addBtnText:string=`添加`
  editBtnText:string='修改'


    url:string;
    pageList:Array<number>= [10,15, 25, 35]
    transformPageData:any
    schools;


  constructor(
    private appService: AppService,
    private modalService:ModalService,
    private systemService:SystemService,
    private apiUrlService:ApiUrlService,
  ) { }

  ngOnInit() {
      this.url=this.apiUrlService.getLibrariesUrl;
      this.systemService.getSchools(data=>this.schools=data,err=>{})
  }

    onDataChanged(event){
        //console.log(event)
        this.libraries=event.rows;

         //每次请求拂服务器后 可以拿到单钱的页码和每页的条数 用于输入列表组件的输入属性
         //this.transformPageData.pageNumber=event.current_page;
         //this.transformPageData.pageSize=event.page_size;
         //this.transformPageData.url=this.url;
        // this.appService.pageRefreshEventEmitter.emit(this.transformPageData)
    }

  change(event,id){
    let status=event?1:0;
    this.systemService.updateLibraryIsOpen(status,id,()=>{},()=>{})
  }

  addLibrary(event){
    this.systemService.addLibrary(event.formModel.value,data=>{
        if(data.errorCode===0){
            const alertCfg = new AlertConfig(AlertType.INFO, '管理账户', '添加成功');
            this.modalService.alert(alertCfg);
            event.ref.close()
            //this.transformPageData.pageNumber=1;
            // this.appService.pageRefreshEventEmitter.emit(this.transformPageData);//创建一个事件流发送传递过来的分页信息
            this.systemService.getLibrarys(data=>{
                this.libraries=data.rows;
            },err=>{})

        }else{
            const alertCfg = new AlertConfig(AlertType.ERROR, '管理账户', data.msg);
            this.modalService.alert(alertCfg);

        }
    },err=>{})
  }

    editLibray(event,id){
        this.systemService.updateLibrary(event.formModel.value,id,data=>{
            //console.log(data)
            if(data.errorCode===0){
                const alertCfg = new AlertConfig(AlertType.INFO, '管理账户', '修改成功');
                this.modalService.alert(alertCfg);
                event.ref.close()
                // this.appService.pageRefreshEventEmitter.emit(this.transformPageData);//创建一个事件流发送传递过来的分页信息
                this.systemService.getLibrarys(data=>{
                    this.libraries=data.rows;
                    //alert(1111)
                },err=>{})
            }else{
                const alertCfg = new AlertConfig(AlertType.ERROR, '管理账户', '修改失败');
                this.modalService.alert(alertCfg);

            }
        },err=>{})

    }

    deleteLibrary(id){
        const confirmCfg = new ConfirmConfig('您确定要删除此账号吗？');
        this.modalService.confirm(confirmCfg).then((result) => {
            this.systemService.deleteLibrary(id, data=>{
                if(data.errorCode===0){
                    const alertCfg = new AlertConfig(AlertType.INFO, '管理账户', '删除成功');
                    this.modalService.alert(alertCfg);
                    //this.appService.pageRefreshEventEmitter.emit(this.transformPageData);//创建一个事件流发送传递过来的分页信息
                    this.systemService.getLibrarys(data=>{
                        this.libraries=data.rows;
                        //alert(1111)
                    },err=>{})
                }else{
                    const alertCfg = new AlertConfig(AlertType.ERROR, '管理账户', '删除失败');
                    this.modalService.alert(alertCfg);

                }

            },err=>{})
        }, (reason) => {
            //console.log(reason+22222222222)
        });

    }

}
