import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../../shared/services/order/order.service";
import {Order} from "../orders.component";
import {routerTransition} from "../../../router.animations";
import {ApiUrlService} from "../../../shared/services/api-url.service";

@Component({
  selector: 'app-my-transmit',
  templateUrl: './my-transmit.component.html',
  styleUrls: ['./my-transmit.component.scss'],
    animations: [routerTransition()]

})
export class MyTransmitComponent implements OnInit {
    orders:Array<Order>;
    url:string;

    // param:any = {
    //     token: localStorage.getItem('token')
    // }

    pageList:Array<number>= [10,15, 25, 35];

    isTransmited:boolean=true;

  constructor(
      // private orderService:OrderService,
      private apiUrlService:ApiUrlService
  ) {
        this.url=this.apiUrlService.getMyTransmitesUrl
  }

  ngOnInit() {
        // this.orderService.getMyTransmites(data=>{
        //     data=>this.orders=data.rows
        // },err=>{})

  }

    onDataChanged(event){
        //console.log(event)
        this.orders=event.rows
    }

}
