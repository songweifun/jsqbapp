import {Component, OnInit, SimpleChanges, OnChanges, Output, EventEmitter} from '@angular/core';
import {Subscription, Observable} from "rxjs";
import {WebSocketService} from "../../../shared/services/web-socket.service";
import {SendArticleService} from "../../../shared/services/send-article.service";
import {TokenService} from "../../../shared/services/token.service";
import {Order} from "../orders.component";
import {routerTransition} from "../../../router.animations";
import {AppService} from "../../../app.service";

@Component({
  selector: 'app-new-apply',
  templateUrl: './new-apply.component.html',
  styleUrls: ['./new-apply.component.scss'],
    animations: [routerTransition()]
})
export class NewApplyComponent implements OnInit,OnChanges {

    subscrption:Subscription;//保存当前的一个订阅 是订阅方法的返回值
    orders:Array<Order>;
    //token:string;

   // @Output() newOrderCount:Observable<number>=new EventEmitter();

    listHide:boolean=true;
    ordersStartText:string="开始抢单";

    constructor(
        private wsService:WebSocketService,
        private sendArticleService:SendArticleService,
        private tokenService:TokenService,
        private appService:AppService
    ) { }


    ngOnChanges(changes: SimpleChanges): void {
        this.tokenService.refreshToken();//刷新token
        // if(this.orders.length<=0){
        //     this.listHide=true;
        //     this.ordersStartText="没有订单";
        // }

    }



    ngOnInit() {



    }

    sendArticle(orderId){
        this.sendArticleService.sendArticle(orderId)

    }

    ordersStart(){

        if(this.subscrption){
            this.subscrption.unsubscribe();//取消订阅
            this.subscrption=null;
            this.listHide=true;
            this.ordersStartText="开始抢单";
        }else{
            //this.tokenService.refreshToken()



            //点击按钮调用服务的方法创建连接 此方法返回一个可观测的流 这里就可以订阅这个流了 并携带一个参数id
            let token=localStorage.getItem('token')?localStorage.getItem('token'):'';
            this.subscrption=this.wsService.createObservableSocket('ws://101.201.122.94:8085',token)
                .subscribe(
                    //服务器吐送过来的消息
                    //收到的是这个客户端关注的所有商品的一个报价
                    products=>{
                        //console.log(products)
                        this.orders=(JSON.parse(products));
                        this.appService.newOrderCountEventEmitter.emit(this.orders.length)
                        this.listHide=false;
                        this.ordersStartText="停止抢单";
                    }

                );
        }

    }

}


