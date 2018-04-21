import { Injectable } from '@angular/core';
import {ApiUrlService} from "../api-url.service";
import {HttpService2} from "../http.service";


@Injectable()
export class OrderService {

  constructor(
      private apiUrlService:ApiUrlService,
      private httpService2:HttpService2,

  ) { }






    setOrderAndBookStatusById(id,orderstatus,bookstatus,callback,ecallback,carrier_code=''){

        const params={
            url:this.apiUrlService.setOrderAndBookStatusByIdUrl,
            type:'PUT',
            data:{id:id,orderStatus:orderstatus,bookStatus:bookstatus,carrier_code:carrier_code},
            sCallback: (data)=> {
                callback && callback(data);
            },
            eCallback:(err)=>{
                ecallback && ecallback(err);
            }
        }

        this.httpService2.request(params,false)

    }


    setReturnOrderAndBookStatusByBookId(order_book_list_id,return_order_id,returnOrderStatus,bookStatus,callback,ecallback){

        const params={
            url:this.apiUrlService.setReturnOrderAndBookStatusByBookIdUrl,
            type:'PUT',
            data:{order_book_list_id:order_book_list_id,return_order_id:return_order_id,returnOrderStatus:returnOrderStatus,bookStatus:bookStatus},
            sCallback: (data)=> {
                callback && callback(data);
            },
            eCallback:(err)=>{
                ecallback && ecallback(err);
            }
        }

        this.httpService2.request(params,false)

    }

    setCarrierCodeByOrderId(order_id,carrier_code,callback,ecallback){
        const params={
            url:this.apiUrlService.setCarrierCodeByOrderIdUrl,
            type:'PUT',
            data:{order_id:order_id,carrier_code:carrier_code},
            sCallback: (data)=> {
                callback && callback(data);
            },
            eCallback:(err)=>{
                ecallback && ecallback(err);
            }
        }

        this.httpService2.request(params,false)

    }

}
