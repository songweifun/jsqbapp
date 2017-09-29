import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../../router.animations";
import {ApiUrlService} from "../../../shared/services/api-url.service";

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss'],
    animations: [routerTransition()]
})
export class EnterComponent implements OnInit {

    title:string='登录日志';
    url:string;
    pageList:Array<number>= [10,15, 25, 35];
    logs:Array<any>=[]

  constructor(
      private apiUrlService:ApiUrlService

  ) { }

  ngOnInit() {
      this.url=this.apiUrlService.getEntryLogUrl
  }
    onDataChanged(event){
        //console.log(event)
        this.logs=event.rows;


    }


}
