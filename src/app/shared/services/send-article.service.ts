import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {TokenService} from "./token.service";
import {ApiUrlService} from "./api-url.service";

@Injectable()
export class SendArticleService {

    sourceData:Observable<any>

  constructor(
      private http:Http,
      private tokenService:TokenService,
      private apiUrlService:ApiUrlService
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
        return this.sourceData=this.http.post(this.apiUrlService.sendArticleUrl,{'id':orderId},{headers:myHeaders}).map(res=>res.json());


    }

}
