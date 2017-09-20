import {Component, OnInit, Input} from '@angular/core';
import { SystemService } from '../../../shared/services/system/system.service';
import { SwitchTheme } from '../../my-component/components/switch/switch-model';
import {AlertConfig, AlertType, ConfirmConfig} from 'app/shared/components/modal/modal-model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from 'app/shared/components/modal/modal.service';
import { AppService } from 'app/app.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  title:string='共享馆设置';
  libraries:Array<any>=[];
  theme:string=SwitchTheme.THTME_WARNING;
  theme2:string=SwitchTheme.THTME_SUCCESS;


  header:string='添加共享馆';
  editheader:string='修改共享馆';
  addBtnText:string=`添加`
  editBtnText:string='修改'

    @Input()
    transformPageData:any


  constructor(
    private appService: AppService,
    private modalService:ModalService,
    private systemService:SystemService,
  ) { }

  ngOnInit() {
    this.systemService.getLibrarys().subscribe(
      data=>{
        this.libraries=data;
        //alert(1111)
      }
    )
  }

  change(event,id){
    let status=event?1:0;
    this.systemService.updateLibraryIsOpen(status,id).subscribe(
      data=>{

      }
    )
  }

  addLibrary(event){
    this.systemService.addLibrary(event.formModel.value).subscribe(
      data=>{
          if(data.errorCode===0){
              const alertCfg = new AlertConfig(AlertType.INFO, '成员馆管理', '添加成功');
              this.modalService.alert(alertCfg);
              event.ref.close()
              //this.transformPageData.pageNumber=1;
              //this.appService.pageRefreshEventEmitter.emit(this.transformPageData);//创建一个事件流发送传递过来的分页信息
              this.systemService.getLibrarys().subscribe(
                  data=>{
                      this.libraries=data;
                      //alert(1111)
                  }
              )

          }else{
              const alertCfg = new AlertConfig(AlertType.ERROR, '成员馆管理', data.msg);
              this.modalService.alert(alertCfg);

          }
      }
  )
  }

    editLibray(event,id){
        this.systemService.updateLibrary(event.formModel.value,id).subscribe(
            data=>{
                //console.log(data)
                if(data.errorCode===0){
                    const alertCfg = new AlertConfig(AlertType.INFO, 'IP映射', '修改成功');
                    this.modalService.alert(alertCfg);
                    event.ref.close()
                    //this.appService.pageRefreshEventEmitter.emit(this.transformPageData);//创建一个事件流发送传递过来的分页信息
                    this.systemService.getLibrarys().subscribe(
                        data=>{
                            this.libraries=data;
                            //alert(1111)
                        }
                    )
                }else{
                    const alertCfg = new AlertConfig(AlertType.ERROR, 'IP映射', '修改失败');
                    this.modalService.alert(alertCfg);

                }
            }
        )

    }

    deleteLibrary(id){
        const confirmCfg = new ConfirmConfig('您确定要删除此映射吗？');
        this.modalService.confirm(confirmCfg).then((result) => {
            this.systemService.deleteLibrary(id).subscribe(
                data=>{
                    if(data.errorCode===0){
                        const alertCfg = new AlertConfig(AlertType.INFO, '成员馆管理', '删除成功');
                        this.modalService.alert(alertCfg);
                        //this.appService.pageRefreshEventEmitter.emit(this.transformPageData);//创建一个事件流发送传递过来的分页信息
                        this.systemService.getLibrarys().subscribe(
                            data=>{
                                this.libraries=data;
                                //alert(1111)
                            }
                        )
                    }else{
                        const alertCfg = new AlertConfig(AlertType.ERROR, '成员馆管理', '删除失败');
                        this.modalService.alert(alertCfg);

                    }

                }
            )
        }, (reason) => {
            //console.log(reason+22222222222)
        });

    }

}
