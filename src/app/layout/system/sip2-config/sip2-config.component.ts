import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../../router.animations";
import {ApiUrlService} from "../../../shared/services/api-url.service";

@Component({
  selector: 'app-sip2-config',
  templateUrl: './sip2-config.component.html',
  styleUrls: ['./sip2-config.component.scss'],
    animations: [routerTransition()]
})
export class Sip2ConfigComponent implements OnInit {
    configs;

    url:string;


    pageList:Array<number>= [10,15, 25, 35];

    isTransmited:boolean=true;


    transformPageData:any={}


    constructor(
        private apiUrlService:ApiUrlService,
    ) {
        this.url=this.apiUrlService.getSip2ConfigListUrl;
    }

  ngOnInit() {
  }

    onDataChanged(event){
        this.configs=event.rows

        //每次请求拂服务器后 可以拿到单钱的页码和每页的条数 用于输入列表组件的输入属性
        this.transformPageData.pageNumber=event.current_page;
        this.transformPageData.pageSize=event.page_size;
        //this.appService.pageRefreshEventEmitter.emit(this.transformPageData)


    }

}
