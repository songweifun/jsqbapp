import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {TokenService} from "../token.service";

@Injectable()
export class OrderService {

  constructor(
      private http:Http,
      private tokenService:TokenService
  ) { }


  getMyTransmites(){
      // if(this.tokenService.verifyToken()===false){
      //     this.tokenService.getToken(localStorage.getItem('ac'),localStorage.getItem('se'))
      // }
      this.tokenService.refreshToken()
      let myHeaders:Headers=new Headers();
      myHeaders.append('token',localStorage.getItem('token'))
      return this.http.get('http://localhost/after/jsqb/jsqbapi/public/api/v1/order/by_user',{headers:myHeaders}).map(res=>res.json());
  }

}
