import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {Subscription} from "rxjs";
import {WebSocketService} from "../../shared/services/web-socket.service";
import {routerTransition} from "../../router.animations";
import {Http} from "@angular/http";
import {SendArticleService} from "../../shared/services/send-article.service";
import {TokenService} from "../../shared/services/token.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
    animations: [routerTransition()]
})
export class OrdersComponent implements OnInit,OnChanges {


    // subscrption:Subscription;//保存当前的一个订阅 是订阅方法的返回值
    // orders:Array<Order>;
    // //token:string;

  constructor(
      // private wsService:WebSocketService,
      // private sendArticleService:SendArticleService,
      // private tokenService:TokenService
  ) { }


    ngOnChanges(changes: SimpleChanges): void {
        // this.tokenService.verifyToken().subscribe(
        //     data=>{
        //         if(data.isValid===false){
        //             this.tokenService.getToken(localStorage.getItem('ac'),localStorage.getItem('se')).subscribe(
        //                 thisdata=>{
        //                     localStorage.setItem('token',thisdata.token)
        //                 }
        //             )
        //         }
        //     }
        // )

    }



  ngOnInit() {
      // if(this.subscrption){
      //     this.subscrption.unsubscribe();//取消订阅
      //     this.subscrption=null;
      // }else{
      //
      //
      //
      //     //点击按钮调用服务的方法创建连接 此方法返回一个可观测的流 这里就可以订阅这个流了 并携带一个参数id
      //     this.subscrption=this.wsService.createObservableSocket('ws://localhost:8085',localStorage.getItem('token'))
      //         .subscribe(
      //             //服务器吐送过来的消息
      //             //收到的是这个客户端关注的所有商品的一个报价
      //             products=>{
      //                 //console.log(products)
      //                 this.orders=(JSON.parse(products))
      //             }
      //
      //         );
      // }


  }
    //
    // sendArticle(orderId){
    //   this.sendArticleService.sendArticle(orderId)
    //
    // }

}

//这个要放到最上面
export class Order{
    constructor(
        public id:number,
        public order_from:number,
        public doi:string,
        public status:number,
        public an:string,
        public dbid:string,
        public title:string,
        public requestip:string,
        public create_time:string
    ){

    }
}
