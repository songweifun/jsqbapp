import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../../router.animations";
import {AppService} from "../../../app.service";
import {SystemService} from "../../../shared/services/system/system.service";
import {ApiUrlService} from "../../../shared/services/api-url.service";

@Component({
  selector: 'app-ips-map',
  templateUrl: './ips-map.component.html',
  styleUrls: ['./ips-map.component.scss'],
    animations: [routerTransition()]
})
export class IpsMapComponent implements OnInit {
    title:string='IP映射';

    ipMaps:Array<any>;
    url:string;
    pageList:Array<number>= [10,15, 25, 35]

    transformPageData:any={}
  constructor(
      private apiUrlService:ApiUrlService,
      //private appService:AppService

  ) {

        this.url=this.apiUrlService.allMapUrl
  }

  ngOnInit() {
      // this.systemService.getAllMap().subscribe(
      //     data=>this.ipMaps=data.rows.data
      // )
  }
    onDataChanged(event){
        //console.log(event)
        this.ipMaps=event.rows;

        //每次请求拂服务器后 可以拿到单钱的页码和每页的条数 用于输入列表组件的输入属性
        this.transformPageData.pageNumber=event.current_page;
        this.transformPageData.pageSize=event.page_size;
        //this.appService.pageRefreshEventEmitter.emit(this.transformPageData)
    }



}
