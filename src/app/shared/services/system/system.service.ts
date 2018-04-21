import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/Rx';
import {TokenService} from "../token.service";
import {Observable} from "rxjs";
import {ApiUrlService} from "../api-url.service";
import {HttpService2} from "../http.service";

@Injectable()
export class SystemService {


    sourceData:Observable<any>
    ipMaps:Array<any>


  constructor(
      private http:Http,
      private tokenService:TokenService,
      private apiUrlService:ApiUrlService,
      private httpService2:HttpService2,

  ) { }

  addIpMap(value,isBlack,callback,ecallback){

      let isForbid=isBlack?1:0;

      // this.tokenService.refreshToken();
      //
      //
      //
      // let myHeaders:Headers=new Headers();
      // myHeaders.append('token',localStorage.getItem('token'))
      //
      // //return this.http.post('http://localhost/after/jsqb/jsqbapi/public/api/v1/system/map',{data:value},{headers:this.myHeaders}).map(res=>res.json());
      // //console.log(myHeaders)
      // return  this.sourceData= this.http.post(this.apiUrlService.addMapIpUrl,{data:value,is_forbid:isForbid},{headers:myHeaders}).map(res=>res.json());

      const params={
          url:this.apiUrlService.addMapIpUrl,
          type:'POST',
          data:{data:value,is_forbid:isForbid},
          sCallback: (data)=> {
              callback && callback(data);
          },
          eCallback:(err)=>{
              ecallback && ecallback(err);
          }
      }

      this.httpService2.request(params,false)

  }


  getAllMap(){
      this.tokenService.refreshToken();

      let myHeaders:Headers=new Headers();
      myHeaders.append('token',localStorage.getItem('token'))
      return this.sourceData= this.http.get(this.apiUrlService.allMapUrl,{headers:myHeaders}).map(res=>res.json());
  }

  updateIpMap(value,id,callback,ecallback){
     // this.tokenService.refreshToken();
     //  let myHeaders:Headers=new Headers();
     //  myHeaders.append('token',localStorage.getItem('token'));
     //  return  this.http.post(this.apiUrlService.updateIpMapUrl,{data:value,id:id},{headers:myHeaders}).map(res=>res.json());


      const params={
          url:this.apiUrlService.updateIpMapUrl,
          type:'POST',
          data:{data:value,id:id},
          sCallback: (data)=> {
              callback && callback(data);
          },
          eCallback:(err)=>{
              ecallback && ecallback(err);
          }
      }

      this.httpService2.request(params,false)

  }


  getOneIpMap(id,callback,ecallback){
      // this.tokenService.refreshToken();
      // let myHeaders:Headers=new Headers();
      // myHeaders.append('token',localStorage.getItem('token'));
      // return  this.http.get(this.apiUrlService.oneIpMapUrl+'?id='+id,{headers:myHeaders}).map(res=>res.json());

      const params={
          url:this.apiUrlService.oneIpMapUrl,
          type:'GET',
          data:{id:id},
          sCallback: (data)=> {
              callback && callback(data);
          },
          eCallback:(err)=>{
              ecallback && ecallback(err);
          }
      }

      this.httpService2.request(params,false)

  }

  updateIsopen(status,id,callback,ecallback){
      // this.tokenService.refreshToken();
      // let myHeaders:Headers=new Headers();
      // myHeaders.append('token',localStorage.getItem('token'));
      // return  this.http.post(this.apiUrlService.updateIpMapStatusUrl,{status:status,id:id},{headers:myHeaders}).map(res=>res.json());

      const params={
          url:this.apiUrlService.updateIpMapStatusUrl,
          type:'POST',
          data:{status:status,id:id},
          sCallback: (data)=> {
              callback && callback(data);
          },
          eCallback:(err)=>{
              ecallback && ecallback(err);
          }
      }

      this.httpService2.request(params,false)

  }

  deleteIpMap(id,callback,ecallback){
      // this.tokenService.refreshToken();
      // let myHeaders:Headers=new Headers();
      // myHeaders.append('token',localStorage.getItem('token'));
      // myHeaders.append('id',id);//id通过heaer传过去
      // return  this.http.delete(this.apiUrlService.deleteIpMapUrl,{headers:myHeaders}).map(res=>res.json());

      const params={
          url:this.apiUrlService.deleteIpMapUrl,
          type:'DELETE',
          data:{id:id},
          sCallback: (data)=> {
              callback && callback(data);
          },
          eCallback:(err)=>{
              ecallback && ecallback(err);
          }
      }

      this.httpService2.request(params,false)
  }

    updateIsForbid(status,id,callback,ecallback){
        // this.tokenService.refreshToken();
        // let myHeaders:Headers=new Headers();
        // myHeaders.append('token',localStorage.getItem('token'));
        // return  this.http.post(this.apiUrlService.updateIpMapIsForbidUrl,{status:status,id:id},{headers:myHeaders}).map(res=>res.json());

        const params={
            url:this.apiUrlService.updateIpMapIsForbidUrl,
            type:'POST',
            data:{status:status,id:id},
            sCallback: (data)=> {
                callback && callback(data);
            },
            eCallback:(err)=>{
                ecallback && ecallback(err);
            }
        }

        this.httpService2.request(params,false)

    }

    getLibrarys(callback,ecallback){
        // this.tokenService.refreshToken();
        // let myHeaders:Headers=new Headers();
        // myHeaders.append('token',localStorage.getItem('token'));
        // return  this.http.get(this.apiUrlService.getLibrariesUrl,{headers:myHeaders}).map(res=>res.json());
        //
        const params={
            url:this.apiUrlService.getLibrariesUrl,
            type:'GET',
            data:{},
            sCallback: (data)=> {
                callback && callback(data);
            },
            eCallback:(err)=>{
                ecallback && ecallback(err);
            }
        }

        this.httpService2.request(params,false)
    }

    updateLibraryIsOpen(status,id,callback,ecallback){
        // this.tokenService.refreshToken();
        // let myHeaders:Headers=new Headers();
        // myHeaders.append('token',localStorage.getItem('token'));
        // return  this.http.post(this.apiUrlService.updateLibraryOpen,{status:status,id:id},{headers:myHeaders}).map(res=>res.json());

        const params={
            url:this.apiUrlService.updateLibraryOpen,
            type:'POST',
            data:{status:status,id:id},
            sCallback: (data)=> {
                callback && callback(data);
            },
            eCallback:(err)=>{
                ecallback && ecallback(err);
            }
        }

        this.httpService2.request(params,false)
    }


    addLibrary(value,callback,ecallback){
        //       this.tokenService.refreshToken();
        //       let myHeaders:Headers=new Headers();
        //       myHeaders.append('token',localStorage.getItem('token'))
        //
        // return  this.sourceData= this.http.post(this.apiUrlService.addLibrayUrl,{data:value},{headers:myHeaders}).map(res=>res.json());
        //
              const params={
                url:this.apiUrlService.addLibrayUrl,
                type:'POST',
                data:{data:value},
                sCallback: (data)=> {
                    callback && callback(data);
                },
                eCallback:(err)=>{
                    ecallback && ecallback(err);
                }
            }

            this.httpService2.request(params,false)

     }

    updateLibrary(value,id,callback,ecallback){
        // this.tokenService.refreshToken();
        // let myHeaders:Headers=new Headers();
        // myHeaders.append('token',localStorage.getItem('token'));
        // return  this.http.post(this.apiUrlService.updateLibrayUrl,{data:value,id:id},{headers:myHeaders}).map(res=>res.json());
        const params={
            url:this.apiUrlService.updateLibrayUrl,
            type:'POST',
            data:{data:value,id:id},
            sCallback: (data)=> {
                callback && callback(data);
            },
            eCallback:(err)=>{
                ecallback && ecallback(err);
            }
        }

        this.httpService2.request(params,false)

    }

    getOneLibrary(id,callback,ecallback){
        // this.tokenService.refreshToken();
        // let myHeaders:Headers=new Headers();
        // myHeaders.append('token',localStorage.getItem('token'));
        // return  this.http.get(this.apiUrlService.oneLibraryUrl+'?id='+id,{headers:myHeaders}).map(res=>res.json());
        //
        const params={
            url:this.apiUrlService.oneLibraryUrl,
            type:'GET',
            data:{id:id},
            sCallback: (data)=> {
                callback && callback(data);
            },
            eCallback:(err)=>{
                ecallback && ecallback(err);
            }
        }

        this.httpService2.request(params,false)
    }

    deleteLibrary(id,callback,ecallback){

        const params={
            url:this.apiUrlService.deleteLibraryUrl,
            type:'DELETE',
            data:{id:id},
            sCallback: (data)=> {
                callback && callback(data);
            },
            eCallback:(err)=>{
                ecallback && ecallback(err);
            }
        }

        this.httpService2.request(params,false)
    }

    getSchools(callback,ecallback){
        // this.tokenService.refreshToken();
        // let myHeaders:Headers=new Headers();
        // myHeaders.append('token',localStorage.getItem('token'));
        // return  this.http.get(this.apiUrlService.getSchoolsUrl,{headers:myHeaders}).map(res=>res.json());
        //
        const params={
            url:this.apiUrlService.getSchoolsUrl,
            type:'GET',
            data:{},
            sCallback: (data)=> {
                callback && callback(data);
            },
            eCallback:(err)=>{
                ecallback && ecallback(err);
            }
        }

        this.httpService2.request(params,false)
    }

    getOrderStatisticsBySchool(callback,ecallback){
        // this.tokenService.refreshToken();
        // let myHeaders:Headers=new Headers();
        // myHeaders.append('token',localStorage.getItem('token'));
        // return  this.http.get(this.apiUrlService.orderStatisticsSchoolUrl,{headers:myHeaders}).map(res=>res.json());
        //
        const params={
            url:this.apiUrlService.orderStatisticsSchoolUrl,
            type:'GET',
            data:{},
            sCallback: (data)=> {
                callback && callback(data);
            },
            eCallback:(err)=>{
                ecallback && ecallback(err);
            }
        }

        this.httpService2.request(params,false)
    }

    getResourceStatisticsBySchool(callback,ecallback){
        // this.tokenService.refreshToken();
        // let myHeaders:Headers=new Headers();
        // myHeaders.append('token',localStorage.getItem('token'));
        // return  this.http.get(this.apiUrlService.resourceStatisticsSchoolUrl,{headers:myHeaders}).map(res=>res.json());
        //
        const params={
            url:this.apiUrlService.resourceStatisticsSchoolUrl,
            type:'GET',
            data:{},
            sCallback: (data)=> {
                callback && callback(data);
            },
            eCallback:(err)=>{
                ecallback && ecallback(err);
            }
        }

        this.httpService2.request(params,false)
    }
    getRequstStatisticsByIpTop10(callback,ecallback){
        // this.tokenService.refreshToken();
        // let myHeaders:Headers=new Headers();
        // myHeaders.append('token',localStorage.getItem('token'));
        // return  this.http.get(this.apiUrlService.requestStatisticsIpTop10Url,{headers:myHeaders}).map(res=>res.json());

        const params={
            url:this.apiUrlService.requestStatisticsIpTop10Url,
            type:'GET',
            data:{},
            sCallback: (data)=> {
                callback && callback(data);
            },
            eCallback:(err)=>{
                ecallback && ecallback(err);
            }
        }
        this.httpService2.request(params,false)

    }

    getRequestStatisticsByMapNameTop10(callback,ecallback){
        // this.tokenService.refreshToken();
        // let myHeaders:Headers=new Headers();
        // myHeaders.append('token',localStorage.getItem('token'));
        // return  this.http.get(this.apiUrlService.requestStatisticsMapTop10Url,{headers:myHeaders}).map(res=>res.json());

        const params={
            url:this.apiUrlService.requestStatisticsMapTop10Url,
            type:'GET',
            data:{},
            sCallback: (data)=> {
                callback && callback(data);
            },
            eCallback:(err)=>{
                ecallback && ecallback(err);
            }
        }
        this.httpService2.request(params,false)


    }

    getAllmemberByPage(){
        this.tokenService.refreshToken();
        let myHeaders:Headers=new Headers();
        myHeaders.append('token',localStorage.getItem('token'));
        return  this.http.get(this.apiUrlService.getAllmemberByPageUrl,{headers:myHeaders}).map(res=>res.json());

    }

    getOneMember(id,callback,ecallback){
        // this.tokenService.refreshToken();
        // let myHeaders:Headers=new Headers();
        // myHeaders.append('token',localStorage.getItem('token'));
        // return  this.http.get(this.apiUrlService.getOneMemberDetailUrl+'?id='+id,{headers:myHeaders}).map(res=>res.json());

        const params={
            url:this.apiUrlService.getOneMemberDetailUrl,
            type:'GET',
            data:{id:id},
            sCallback: (data)=> {
                callback && callback(data);
            },
            eCallback:(err)=>{
                ecallback && ecallback(err);
            }
        }
        this.httpService2.request(params,false)

    }

    addMember(value,callback,ecallback){

        // this.tokenService.refreshToken();
        // let myHeaders:Headers=new Headers();
        // myHeaders.append('token',localStorage.getItem('token'))
        // return  this.sourceData= this.http.post(this.apiUrlService.addMemberUrl,{data:value},{headers:myHeaders}).map(res=>res.json());

        const params={
            url:this.apiUrlService.addMemberUrl,
            type:'POST',
            data:{data:value},
            sCallback: (data)=> {
                callback && callback(data);
            },
            eCallback:(err)=>{
                ecallback && ecallback(err);
            }
        }

        this.httpService2.request(params,false)


    }


    updateMember(value,id,callback,ecallback){
        // this.tokenService.refreshToken();
        // let myHeaders:Headers=new Headers();
        // myHeaders.append('token',localStorage.getItem('token'));
        // return  this.http.post(this.apiUrlService.updateMemberUrl,{data:value,id:id},{headers:myHeaders}).map(res=>res.json());

        const params={
            url:this.apiUrlService.updateMemberUrl,
            type:'POST',
            data:{data:value,id:id},
            sCallback: (data)=> {
                callback && callback(data);
            },
            eCallback:(err)=>{
                ecallback && ecallback(err);
            }
        }

        this.httpService2.request(params,false)



    }

    getAllSchoolMessage(callback,ecallback){
        // this.tokenService.refreshToken();
        // let myHeaders:Headers=new Headers();
        // myHeaders.append('token',localStorage.getItem('token'));
        // return  this.http.get(this.apiUrlService.getAllSchoolUrl,{headers:myHeaders}).map(res=>res.json());
        const params={
            url:this.apiUrlService.getAllSchoolUrl,
            type:'GET',
            data:{},
            sCallback: (data)=> {
                callback && callback(data);
            },
            eCallback:(err)=>{
                ecallback && ecallback(err);
            }
        }

        this.httpService2.request(params,false)

    }
    updateMemberIsopen(status,id,callback,ecallback){
        // this.tokenService.refreshToken();
        // let myHeaders:Headers=new Headers();
        // myHeaders.append('token',localStorage.getItem('token'));
        // return  this.http.post(this.apiUrlService.updateMemberIpOpenUrl,{status:status,id:id},{headers:myHeaders}).map(res=>res.json());
        //
        const params={
            url:this.apiUrlService.updateMemberIpOpenUrl,
            type:'POST',
            data:{status:status,id:id},
            sCallback: (data)=> {
                callback && callback(data);
            },
            eCallback:(err)=>{
                ecallback && ecallback(err);
            }
        }

        this.httpService2.request(params,false)

    }

    recordLoginlog(token,callback,ecallback){
        //alert(token+'111111111111111111111111111')
        // let myHeaders:Headers=new Headers();
        // myHeaders.append('token',token);
        // return  this.http.post(this.apiUrlService.recordLoginLogUrl,{},{headers:myHeaders}).map(res=>res.json());

        const params={
            url:this.apiUrlService.recordLoginLogUrl,
            type:'POST',
            data:{},
            sCallback: (data)=> {
                callback && callback(data);
            },
            eCallback:(err)=>{
                ecallback && ecallback(err);
            }
        }

        this.httpService2.request(params,false)


    }

    recordLoginout(token,callback,ecallback){
        // let myHeaders:Headers=new Headers();
        // myHeaders.append('token',token);
        // return  this.http.post(this.apiUrlService.recordLogoutLogUrl,{},{headers:myHeaders}).map(res=>res.json());

        const params={
            url:this.apiUrlService.recordLogoutLogUrl,
            type:'POST',
            data:{},
            sCallback: (data)=> {
                callback && callback(data);
            },
            eCallback:(err)=>{
                ecallback && ecallback(err);
            }
        }

        this.httpService2.request(params,false)
    }

    checkSuperAdmin(callback,ecallback){
        // this.tokenService.refreshToken();
        // let myHeaders:Headers=new Headers();
        // myHeaders.append('token',localStorage.getItem('token'));
        // return  this.http.get(this.apiUrlService.checkSuperAdminUrl,{headers:myHeaders}).map(res=>res.json());

        const params={
            url:this.apiUrlService.checkSuperAdminUrl,
            type:'GET',
            data:{},
            sCallback: (data)=> {
                callback && callback(data);
            },
            eCallback:(err)=>{
                ecallback && ecallback(err);
            }
        }

        this.httpService2.request(params,false)

    }


    addSip2Config(value,callback,ecallback){

        const params={
            url:this.apiUrlService.addSip2ConfigUrl,
            type:'POST',
            data:{data:value},
            sCallback: (data)=> {
                callback && callback(data);
            },
            eCallback:(err)=>{
                ecallback && ecallback(err);
            }
        }

        this.httpService2.request(params,false)

    }
    getOneSipConfig(id,callback,ecallback){

        const params={
            url:this.apiUrlService.oneSip2ConfigUrl,
            type:'GET',
            data:{id:id},
            sCallback: (data)=> {
                callback && callback(data);
            },
            eCallback:(err)=>{
                ecallback && ecallback(err);
            }
        }

        this.httpService2.request(params,false)
    }

    updateSip2Config(value,id,callback,ecallback){
        const params={
            url:this.apiUrlService.updateSip2ConfigUrl,
            type:'POST',
            data:{data:value,id:id},
            sCallback: (data)=> {
                callback && callback(data);
            },
            eCallback:(err)=>{
                ecallback && ecallback(err);
            }
        }

        this.httpService2.request(params,false)

    }

    updateSip2ConfigIsDefault(status,id,callback,ecallback){

        const params={
            url:this.apiUrlService.updateSip2ConfigIsDefaultUrl,
            type:'POST',
            data:{status:status,id:id},
            sCallback: (data)=> {
                callback && callback(data);
            },
            eCallback:(err)=>{
                ecallback && ecallback(err);
            }
        }

        this.httpService2.request(params,false)
    }


    deleteSip2Config(id,callback,ecallback){

        const params={
            url:this.apiUrlService.deleteSip2ConfigUrl,
            type:'DELETE',
            data:{id:id},
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
