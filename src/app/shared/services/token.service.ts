import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class TokenService {

    public isValid:boolean;
    public token:string;

  constructor(private http:Http) { }

  getToken(ac,se){
      this.http.post('http://192.168.1.144/after/jsqb/jsqbapi/public/api/v1/token/app',{"ac":ac,"se":se})
          .map(res=>res.json()).subscribe(
              data=>this.token=data.token
          );

      return this.token;


  }

    verifyToken(){
      this.http.post('http://192.168.1.144/after/jsqb/jsqbapi/public/api/v1/token/verify',{'token':localStorage.getItem('token')})
          .map(res=>res.json())
          .subscribe(
              data=>this.isValid=data.isValid
          );

      return this.isValid;

    }

    refreshToken(){
        if(this.verifyToken()===false){
            localStorage.setItem('token',this.getToken(localStorage.getItem('ac'),localStorage.getItem('se')));

        }
    }

}
