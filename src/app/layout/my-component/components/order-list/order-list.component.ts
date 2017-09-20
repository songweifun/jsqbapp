import {Component, OnInit, Input} from '@angular/core';
import {Order} from "../../../orders/orders.component";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

    @Input()
    orders:Array<Order>

  constructor() { }

  ngOnInit() {
  }

}
