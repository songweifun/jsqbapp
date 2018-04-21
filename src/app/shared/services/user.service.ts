import { Injectable } from '@angular/core';
import {ApiUrlService} from "./api-url.service";
import {HttpService2} from "./http.service";

@Injectable()
export class UserService {


  constructor(
      private apiUrlService:ApiUrlService,
      private httpService2:HttpService2,
  ) {

  }



    updateStatusByUserId(user_id,status,callback,ecallback){
        const params={
            url:this.apiUrlService.updateMemberIpOpenUrl,
            type:'PUT',
            data:{user_id:user_id,status:status},
            sCallback: (data)=> {
                callback && callback(data);
            },
            eCallback:(err)=>{
                ecallback && ecallback(err);
            }
        }

        this.httpService2.request(params,false)

    }


    getTelCode(tel,callback){
        const params={
            url:this.apiUrlService.getTelCodeUrl+"?phone="+tel,
            type:'GET',
            data:{},
            sCallback: (data)=> {
                callback && callback(data);
            }

        }

        this.httpService2.request(params,false)
    }


    modificateUseTel(data,callback,ecallback){
        const params={
            url:this.apiUrlService.modificateUserTelUrl,
            type:'POST',
            data:data,
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
