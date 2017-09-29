import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {ApiUrlService} from "./api-url.service";

@Injectable()
export class TokenService {

    public isValid:boolean;
    public token:string;

  constructor(
      private http:Http,
      private apiUrlService:ApiUrlService

  ) { }

  getToken(ac,se){
      this.http.post(this.apiUrlService.tokenAppUrl,{"ac":ac,"se":se})
          .map(res=>res.json()).subscribe(
              data=>this.token=data.token
          );

      return this.token;


  }

    verifyToken(){
      this.http.post(this.apiUrlService.tokenVerifyUrl,{'token':localStorage.getItem('token')})
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

        // this.verifyTokenAsync().subscribe(
        //     data=>{
        //         if(data.isValid==false){
        //             this.getTokenAsync().subscribe(
        //                 token=>{
        //                     localStorage.setItem('token',token)
        //                 }
        //             )
        //         }
        //     }
        // )
    }


    getTokenAsync(ac,se){
        return this.http.post(this.apiUrlService.tokenAppUrl,{"ac":ac,"se":se})
            .map(res=>res.json());


    }

    verifyTokenAsync(){
        return this.http.post(this.apiUrlService.tokenVerifyUrl,{'token':localStorage.getItem('token')})
            .map(res=>res.json());

    }

}
