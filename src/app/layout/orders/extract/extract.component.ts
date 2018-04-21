import { Component, OnInit } from '@angular/core';
import {Order} from "../orders.component";
import {ApiUrlService} from "../../../shared/services/api-url.service";
import {routerTransition} from "../../../router.animations";

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss'],
    animations: [routerTransition()]
})
export class ExtractComponent implements OnInit {
    orders:Array<Order>;
    url:string;

    pageList:Array<number>= [10,15, 25, 35];
    transformPageData:any={}

  constructor(
      private apiUrlService:ApiUrlService,
  ) {
      this.url=this.apiUrlService.getExtractOrderUrl+'/0'
  }

  ngOnInit() {

  }

    onDataChanged(event){
        this.orders=event.rows

        //每次请求拂服务器后 可以拿到单钱的页码和每页的条数 用于输入列表组件的输入属性
        this.transformPageData.pageNumber=event.current_page;
        this.transformPageData.pageSize=event.page_size;
        //this.appService.pageRefreshEventEmitter.emit(this.transformPageData)


    }

}
