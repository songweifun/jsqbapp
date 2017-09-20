import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../../shared/services/order/order.service";
import {Order} from "../orders.component";
import {routerTransition} from "../../../router.animations";

@Component({
  selector: 'app-my-transmit',
  templateUrl: './my-transmit.component.html',
  styleUrls: ['./my-transmit.component.scss'],
    animations: [routerTransition()]

})
export class MyTransmitComponent implements OnInit {
    orders:Array<Order>;
    url:string="http://localhost/after/jsqb/jsqbapi/public/api/v1/order/by_user";
    param:any = {
        token: localStorage.getItem('token')
    }

    pageList:Array<number>= [10,15, 25, 35]
  constructor(
      private orderService:OrderService
  ) { }

  ngOnInit() {
        this.orderService.getMyTransmites().subscribe(
            data=>this.orders=data.rows
        )
  }

    onDataChanged(event){
        console.log(event)
        this.orders=event.rows
    }

}
