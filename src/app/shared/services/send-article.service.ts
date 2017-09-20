import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {TokenService} from "./token.service";

@Injectable()
export class SendArticleService {

    sourceData:Observable<any>

  constructor(
      private http:Http,
      private tokenService:TokenService
  ) {

  }

    sendArticle(orderId){
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
        if(this.tokenService.verifyToken()===false){
            this.tokenService.getToken(localStorage.getItem('ac'),localStorage.getItem('se'))
        }
        let myHeaders:Headers=new Headers();
        myHeaders.append('token',localStorage.getItem('token'))
        return this.sourceData=this.http.post('http://192.168.1.144/after/jsqb/jsqbapi/public/api/v1/order/send',{'id':orderId},{headers:myHeaders}).map(res=>res.json());


    }

}
