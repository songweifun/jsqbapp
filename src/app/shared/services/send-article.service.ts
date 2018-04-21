import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {TokenService} from "./token.service";
import {ApiUrlService} from "./api-url.service";
import {HttpService2} from "./http.service";

@Injectable()
export class SendArticleService {

    sourceData:Observable<any>

  constructor(
      private http:Http,
      private tokenService:TokenService,
      private apiUrlService:ApiUrlService,
      private httpService2:HttpService2,
  ) {

  }

    sendArticle(orderId,callback,ecallback){
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
        // if(this.tokenService.verifyToken()===false){
        //     this.tokenService.getToken(localStorage.getItem('ac'),localStorage.getItem('se'))
        // }
        // let myHeaders:Headers=new Headers();
        // myHeaders.append('token',localStorage.getItem('token'))
        // return this.sourceData=this.http.post(this.apiUrlService.sendArticleUrl,{'id':orderId},{headers:myHeaders}).map(res=>res.json());
        const params={
            url:this.apiUrlService.sendArticleUrl,
            type:'POST',
            data:{'id':orderId},
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
