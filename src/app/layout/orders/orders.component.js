"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_animations_1 = require("../../router.animations");
var OrdersComponent = (function () {
    // subscrption:Subscription;//保存当前的一个订阅 是订阅方法的返回值
    // orders:Array<Order>;
    // //token:string;
    function OrdersComponent() {
    }
    OrdersComponent.prototype.ngOnChanges = function (changes) {
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
    };
    OrdersComponent.prototype.ngOnInit = function () {
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
    };
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    core_1.Component({
        selector: 'app-orders',
        templateUrl: './orders.component.html',
        styleUrls: ['./orders.component.scss'],
        animations: [router_animations_1.routerTransition()]
    })
], OrdersComponent);
exports.OrdersComponent = OrdersComponent;
//这个要放到最上面
var Order = (function () {
    function Order(id, order_from, doi, status, an, dbid, title, requestip, create_time) {
        this.id = id;
        this.order_from = order_from;
        this.doi = doi;
        this.status = status;
        this.an = an;
        this.dbid = dbid;
        this.title = title;
        this.requestip = requestip;
        this.create_time = create_time;
    }
    return Order;
}());
exports.Order = Order;
