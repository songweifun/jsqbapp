import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {TokenService} from "../token.service";
import {ApiUrlService} from "../api-url.service";

@Injectable()
export class OrderService {

  constructor(
      private http:Http,
      private tokenService:TokenService,
      private apiUrlService:ApiUrlService

  ) { }


  getMyTransmites(){
      // if(this.tokenService.verifyToken()===false){
      //     this.tokenService.getToken(localStorage.getItem('ac'),localStorage.getItem('se'))
      // }
      this.tokenService.refreshToken()
      let myHeaders:Headers=new Headers();
      myHeaders.append('token',localStorage.getItem('token'))
      return this.http.get(this.apiUrlService.getMyTransmitesUrl,{headers:myHeaders}).map(res=>res.json());
  }

}
