import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {TokenService} from "./token.service";
import {ApiUrlService} from "./api-url.service";
import {HttpService2} from "./http.service";

@Injectable()
export class MessageService {


  constructor(
      private apiUrlService:ApiUrlService,
      private httpService2:HttpService2,
  ) {

  }


    sendExtractMessage(order_id,callback,ecallback){

        const params={
            url:this.apiUrlService.sendExtractMessageUrl,
            type:'POST',
            data:{'orderId':order_id},
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
