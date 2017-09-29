import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../../router.animations";
import {ApiUrlService} from "../../../shared/services/api-url.service";

@Component({
  selector: 'app-operate',
  templateUrl: './operate.component.html',
  styleUrls: ['./operate.component.scss'],
    animations: [routerTransition()]
})
export class OperateComponent implements OnInit {

    title:string='登录日志';
    url:string;
    pageList:Array<number>= [10,15, 25, 35];
    logs:Array<any>=[]

    constructor(
        private apiUrlService:ApiUrlService

    ) { }

    ngOnInit() {
        this.url=this.apiUrlService.getOperateLogUrl
    }
    onDataChanged(event){
        console.log(event)
        this.logs=event.rows;


    }

}
