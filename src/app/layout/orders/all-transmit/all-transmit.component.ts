import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../../router.animations";
import {Order} from "../orders.component";

@Component({
  selector: 'app-all-transmit',
  templateUrl: './all-transmit.component.html',
  styleUrls: ['./all-transmit.component.scss'],
    animations: [routerTransition()]
})
export class AllTransmitComponent implements OnInit {
//http://localhost/after/jsqb/jsqbapi/public/api/v1/order/paginate

    orders:Array<Order>;
    url:string="http://192.168.1.144/after/jsqb/jsqbapi/public/api/v1/order/paginate";
    pageList:Array<number>= [10,15, 25, 35]
  constructor() { }

  ngOnInit() {
  }

    onDataChanged(event){
        console.log(event)
        this.orders=event.rows
    }

}
