import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Order} from "../../../orders/orders.component";
import {OrderService} from "../../../../shared/services/order/order.service";
import {AppService} from "../../../../app.service";
import {ApiUrlService} from "../../../../shared/services/api-url.service";
import {MessageService} from "../../../../shared/services/message.service";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

    @Input()
    orders:Array<Order>;


    @Input()
    isTransmited:boolean=false;


    @Input()
    transformPageData:any


    @Output()  onStatusChange = new EventEmitter();
    nowTimeStamp;

    @Input() isLogisticsList=true;

    keyword:string='';

    state=0
  constructor(
      private orderService:OrderService,
      private appService:AppService,
      private apiUrlService:ApiUrlService,
      private messageService:MessageService,
  ) { }

  ngOnInit() {
      //alert(this.isTransmited)
      setInterval( ()=> {
          var myDate=new Date();
          const nowTime=myDate.toLocaleString();
          this.nowTimeStamp=myDate.valueOf();

      },1000)
  }

    onSearch(){
        this.transformPageData.url=this.apiUrlService.getLogisticsOrderUrl+'/'+this.state+'?keyword='+this.keyword
        this.appService.pageRefreshEventEmitter.emit(this.transformPageData);//创建一个事件流发送传递过来的分页信息
    }

  sendOrder(event,id){
        //alert(event);return false;
      this.orderService.setOrderAndBookStatusById(id,7,3,res=>{
          //还要添加物流单号

          // this.orderService.setCarrierCodeByOrderId(id,event,res=>{
              this.appService.pageRefreshEventEmitter.emit(this.transformPageData);//创建一个事件流发送传递过来的分页信息

          // },err=>{})

      },err=>{},event)
  }

    filterItems(status){
        this.state=status;//用于视图高亮显示
        if(this.isLogisticsList){
            this.transformPageData.url=this.apiUrlService.getLogisticsOrderUrl+'/'+status+'?keyword='+this.keyword
            this.appService.pageRefreshEventEmitter.emit(this.transformPageData);//创建一个事件流发送传递过来的分页信息

        }else{
            this.transformPageData.url=this.apiUrlService.getExtractOrderUrl+'/'+status+'?keyword='+this.keyword
            this.appService.pageRefreshEventEmitter.emit(this.transformPageData);//创建一个事件流发送传递过来的分页信息

        }

        //alert(status);
    }

    sendExtractMessage(order_id){
        this.messageService.sendExtractMessage(order_id,res=>{
            this.appService.pageRefreshEventEmitter.emit(this.transformPageData);//创建一个事件流发送传递过来的分页信息

            alert("发送成功");

        },err=>{})
    }

    sendExtractOrder(order_id){
        this.orderService.setOrderAndBookStatusById(order_id,9,3,res=>{
            this.appService.pageRefreshEventEmitter.emit(this.transformPageData);//创建一个事件流发送传递过来的分页信息

            alert("自提成功")
        },err=>{})


    }

}
