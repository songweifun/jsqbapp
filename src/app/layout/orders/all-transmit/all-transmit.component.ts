import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../../router.animations";
import {Order} from "../orders.component";
import {ApiUrlService} from "../../../shared/services/api-url.service";

@Component({
  selector: 'app-all-transmit',
  templateUrl: './all-transmit.component.html',
  styleUrls: ['./all-transmit.component.scss'],
    animations: [routerTransition()]
})
export class AllTransmitComponent implements OnInit {
//http://localhost/after/jsqb/jsqbapi/public/api/v1/order/paginate

    orders:Array<Order>;
    url:string;
    pageList:Array<number>= [10,15, 25, 35];

    isTransmited:boolean=true;
  constructor(
      private apiUrlService:ApiUrlService
  ) {
        this.url=this.apiUrlService.allTransmitesUrl

  }

  ngOnInit() {
  }

    onDataChanged(event){
        console.log(event)
        this.orders=event.rows
    }

}
