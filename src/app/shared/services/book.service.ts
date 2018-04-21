import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {TokenService} from "./token.service";
import {ApiUrlService} from "./api-url.service";
import {HttpService2} from "./http.service";

@Injectable()
export class BookService {


  constructor(
      private apiUrlService:ApiUrlService,
      private httpService2:HttpService2,
  ) {

  }

    getLibItemsWithSip2Aaviable(bookid,callback,ecallback){
        const params={
            url:this.apiUrlService.getLibItemsWithSip2AaviableUrl,
            type:'GET',
            data:{'marcid':bookid},
            sCallback: (data)=> {
                callback && callback(data);
            },
            eCallback:(err)=>{
                ecallback && ecallback(err);
            }
        }

        this.httpService2.request(params,false)

    }

    borrowBook(barCode,callback,ecallback){
        const params={
            url:this.apiUrlService.sip2BorrowBookUrl,
            type:'POST',
            data:{'barCode':barCode},
            sCallback: (data)=> {
                callback && callback(data);
            },
            eCallback:(err)=>{
                ecallback && ecallback(err);
            }
        }

        this.httpService2.request(params,false)

    }

    returnBook(barCode,callback,ecallback){
        const params={
            url:this.apiUrlService.sip2ReturnBookUrl,
            type:'POST',
            data:{'barCode':barCode},
            sCallback: (data)=> {
                callback && callback(data);
            },
            eCallback:(err)=>{
                ecallback && ecallback(err);
            }
        }

        this.httpService2.request(params,false)

    }


    updateFieldByListId(id,field,value,callback,ecallback){
        const params={
            url:this.apiUrlService.updateFieldByListIdUrl,
            type:'PUT',
            data:{id:id,field:field,value:value},
            sCallback: (data)=> {
                callback && callback(data);
            },
            eCallback:(err)=>{
                ecallback && ecallback(err);
            }
        }

        this.httpService2.request(params,false)
    }

    getBooksByReturnOrderId(return_order_id,callback,ecallback){
        const params={
            url:this.apiUrlService.getBooksByReturnOrderIdUrl,
            type:'GET',
            data:{return_order_id:return_order_id},
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
