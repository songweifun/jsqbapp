import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../../router.animations";
import {ApiUrlService} from "../../../shared/services/api-url.service";

@Component({
  selector: 'app-ip-white',
  templateUrl: './ip-white.component.html',
  styleUrls: ['./ip-white.component.scss'],
    animations: [routerTransition()]
})
export class IpWhiteComponent implements OnInit {

    url:string
    title:string='白名单';

    ipMaps:Array<any>;
    pageList:Array<number>= [10,15, 25, 35]

    transformPageData:any={}

  constructor(private apiUrlService:ApiUrlService) { }

  ngOnInit() {
        this.url=this.apiUrlService.getIpWhiteUrl
  }

    onDataChanged(event){
        console.log(event)
        this.ipMaps=event.rows;

        //每次请求拂服务器后 可以拿到单钱的页码和每页的条数 用于输入列表组件的输入属性
        this.transformPageData.pageNumber=event.current_page;
        this.transformPageData.pageSize=event.page_size;
        //this.appService.pageRefreshEventEmitter.emit(this.transformPageData)
    }

}
