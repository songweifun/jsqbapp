import {Injectable, Inject} from '@angular/core';
import {Http,Headers} from "@angular/http";
import {ApiUrlService} from "./api-url.service";

@Injectable()
export class TokenService {

    public isValid:boolean;
    public token:string;
    private readonly domain="token";
    private headers=new Headers({
        'Content-Type':'application/json'
    });


    constructor(
      private http:Http,
      private apiUrlService:ApiUrlService,
      @Inject('BASE_CONFIG') private config


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


    }


    getTokenAsync(ac,se){
        return this.http.post(this.apiUrlService.tokenAppUrl,{"ac":ac,"se":se})
            .map(res=>res.json());


    }

    verifyTokenAsync(){
        return this.http.post(this.apiUrlService.tokenVerifyUrl,{'token':localStorage.getItem('token')})
            .map(res=>res.json());

    }



//开始的干活
    verify() {
        const token = localStorage.getItem('token');
        //console.log(token)
        if (!token) {
            this.getTokenFromServer(()=>{});
        }
        else {
            this._veirfyFromServer(token);
        }
    }


    _veirfyFromServer(token) {
        const verifyUri=`${this.config.uri}/${this.domain}/verify`;
        this.http.post(verifyUri,JSON.stringify({'token':token}),{headers:this.headers}).map(res=>res.json()).subscribe(res=>{
            if(!res.isValid){this.getTokenFromServer(()=>{})}
        });

    }


    getTokenFromServer(callBack) {

        const uri=`${this.config.uri}/${this.domain}/app`;
        return this.http
            .post(uri,JSON.stringify({'ac':localStorage.getItem('ac'),'se':localStorage.getItem('se')}),{headers:this.headers})
            .map(res=>res.json()).subscribe(result=>{
                localStorage.setItem('token',result.token)
                callBack && callBack(result.token);
            });

    }


}
