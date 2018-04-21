import { Component, OnInit } from '@angular/core';
import {ApiUrlService} from "../../../shared/services/api-url.service";

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.scss']
})
export class ReturnComponent implements OnInit {

    url:string;
    pageList:Array<number>= [10,15, 25, 35];

    returnOrders;
    transformPageData:any={}


    order_status={
        '3':'已还出',
        '2':'已接收',
        '1':'待归还',
    }

  constructor(
      private apiUrlService:ApiUrlService
  ) { }

  ngOnInit() {
      this.url=this.apiUrlService.getMyReturnOrdersListAdminUrl

  }

    onDataChanged(event){
        this.returnOrders=event.rows

        //每次请求拂服务器后 可以拿到单钱的页码和每页的条数 用于输入列表组件的输入属性
        this.transformPageData.pageNumber=event.current_page;
        this.transformPageData.pageSize=event.page_size;
        //this.appService.pageRefreshEventEmitter.emit(this.transformPageData)


    }

}
