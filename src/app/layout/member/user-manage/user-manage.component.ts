import { Component, OnInit } from '@angular/core';
import {ApiUrlService} from "../../../shared/services/api-url.service";
import {routerTransition} from "../../../router.animations";
import {AppService} from "../../../app.service";

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss'],
    animations: [routerTransition()]
})
export class UserManageComponent implements OnInit {

    title:string='会员管理';

    users:Array<any>;
    url:string;
    pageList:Array<number>= [10,15, 25, 35]

    transformPageData:any={}

  constructor(
      private apiUrlService:ApiUrlService,
      private appService:AppService
  ) {
      this.url=this.apiUrlService.getAllmemberByPageUrl
  }

  ngOnInit() {

  }

    onDataChanged(event){
        //console.log(event)
        this.users=event.rows;

        //每次请求拂服务器后 可以拿到单钱的页码和每页的条数 用于输入列表组件的输入属性
        this.transformPageData.pageNumber=event.current_page;
        this.transformPageData.pageSize=event.page_size;
        this.transformPageData.url=this.url;
        //this.appService.pageRefreshEventEmitter.emit(this.transformPageData)
    }

    searchByKeyword(){
        //alert(event)
        // this.transformPageData.pageNumber=event.current_page;
        // this.transformPageData.pageSize=event.page_size;
        this.appService.keywordEventEmitter.debounceTime(500).subscribe(
            event=>{
                this.transformPageData.url=this.url+'?keyword='+event
                this.appService.pageRefreshEventEmitter.emit(this.transformPageData)
            }
        )


    }

}
