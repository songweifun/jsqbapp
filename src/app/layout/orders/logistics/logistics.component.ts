import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../../router.animations";
import {Order} from "../orders.component";
import {ApiUrlService} from "../../../shared/services/api-url.service";
import {AppService} from "../../../app.service";

@Component({
  selector: 'app-logistics',
  templateUrl: './logistics.component.html',
  styleUrls: ['./logistics.component.scss'],
    animations: [routerTransition()]
})
export class LogisticsComponent implements OnInit {
    orders:Array<Order>;
    url:string;
    pageList:Array<number>= [10,15, 25, 35];
    isTransmited:boolean=true;
    transformPageData:any={}


    constructor(
        private apiUrlService:ApiUrlService,
        private appService:AppService,

    ) {
        this.url=this.apiUrlService.getLogisticsOrderUrl+'/0'


    }

  ngOnInit() {
  }

    onDataChanged(event){
        this.transformPageData.pageNumber=event.current_page;
        this.transformPageData.pageSize=event.page_size;
        this.orders=event.rows
        //每次请求拂服务器后 可以拿到单钱的页码和每页的条数 用于输入列表组件的输入属性

        //this.appService.pageRefreshEventEmitter.emit(this.transformPageData)


    }

    onStatusChangeHandle(status){
        //alert(status)
        //this.url=this.apiUrlService.getLogisticsOrderUrl+'/'+status
        // this.transformPageData.url=this.url
        // this.appService.pageRefreshEventEmitter.emit(this.transformPageData);//创建一个事件流发送传递过来的分页信息

    }


}
