/**
 * Created by daivd on 2018/2/27.
 */
import { Injectable, Inject } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';
import {TokenService} from "./token.service";

@Injectable()
export class HttpService2 {



    constructor(
        private http:Http,
        @Inject('BASE_CONFIG') private config,
        private tokenService:TokenService
    ){

    }

    /**封装的请求方法 */
    //http 请求类, 当noRefech为true时，不做未授权重试机制
    request(params, noRefetch) {

        const headers=new Headers({
            'Content-Type':'application/json',
            'token':localStorage.getItem('token')
        });

        const url = params.url;
        //alert(url)
        if(!params.type){
            params.type='GET';
        }

        //post特殊处理后期改进
        if(params.type=="POST"){

            this.http.post(url,JSON.stringify(params.data),{headers:headers}).subscribe(res => {
                const code = res.status.toString();
                const startChar = code.charAt(0);
                const data = JSON.parse(res['_body']);
                //console.log(data)
                if (startChar == '2') {
                    params.sCallback && params.sCallback(data);
                }

            },err=>{
                const code = err.status.toString();
                if (code == '401') {
                    //未授权重试机制
                    if (!noRefetch) {
                        this._refetch(params);
                    }
                }
                this._processError(err);
                params.eCallback && params.eCallback(err);

            })
        }

        //put

        else if(params.type == "PUT"){

            this.http.put(url,JSON.stringify(params.data),{headers:headers}).subscribe(res => {
                const code = res.status.toString();
                const startChar = code.charAt(0);
                const data = JSON.parse(res['_body']);
                //console.log(data)
                //if (startChar == '2') {
                params.sCallback && params.sCallback(data);
                //}

            },err=>{
                const code = err.status.toString();
                if (code == '401') {
                    //未授权重试机制
                    if (!noRefetch) {
                        this._refetch(params);
                    }
                }
                this._processError(err);
                params.eCallback && params.eCallback(err);

            })
        }



        else {

            this.http.request(url, {
                url: url,
                method: params.type,
                params: params.data,
                headers: headers
            }).subscribe(res => {
                const code = res.status.toString();
                const startChar = code.charAt(0);
                const data = JSON.parse(res['_body']);
                //console.log(data)
                if (startChar == '2') {
                    params.sCallback && params.sCallback(data);
                }

            },err=>{
                const code = err.status.toString();
                if (code == '401') {
                    //未授权重试机制
                    if (!noRefetch) {
                        this._refetch(params);
                    }
                }
                this._processError(err);
                params.eCallback && params.eCallback(err);

            })
        }
        // //console.log(url)
        // wx.request({
        //   url: url,
        //   data:params.data,
        //   method:params.type,
        //   header:{
        //     "content-type":"application/json",
        //     "token":wx.getStorageSync('token')
        //     //先获得code 然后再获得token存入缓存
        //
        //   },
        //   success:function(res){
        //     // 判断以2（2xx)开头的状态码为正确
        //     // 异常不要返回到回调中，就在request中处理，记录日志并showToast一个统一的错误即可
        //     var code = res.statusCode.toString();
        //     var startChar = code.charAt(0);
        //     if (startChar == '2') {
        //       params.sCallback && params.sCallback(res.data);
        //     } else {
        //       if (code == '401') {
        //         //未授权重试机制
        //         if (!noRefetch) {
        //           that._refetch(params);
        //         }
        //       }
        //
        //       that._processError(res);
        //
        //       if(noRefetch){
        //         params.eCallback && params.eCallback(res.data);
        //       }
        //
        //     }
        //     //params.sCallback && params.sCallback(res.data);
        //   },
        //   fail:function(err){
        //     that._processError(err);
        //   }
        // });


    }


    _processError(err) {
        console.log(err);
    }


//未授权重试
    _refetch(param) {
        this.tokenService.getTokenFromServer(token=>{
            this.request(param, true);
        })
    }


}


