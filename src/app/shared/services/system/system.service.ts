import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/Rx';
import {TokenService} from "../token.service";
import {Observable} from "rxjs";
import {ApiUrlService} from "../api-url.service";

@Injectable()
export class SystemService {


    sourceData:Observable<any>
    ipMaps:Array<any>


  constructor(
      private http:Http,
      private tokenService:TokenService,
      private apiUrlService:ApiUrlService
  ) { }

  addIpMap(value,isBlack){


        let isForbid=isBlack?1:0;

      this.tokenService.refreshToken();



      let myHeaders:Headers=new Headers();
      myHeaders.append('token',localStorage.getItem('token'))

      //return this.http.post('http://localhost/after/jsqb/jsqbapi/public/api/v1/system/map',{data:value},{headers:this.myHeaders}).map(res=>res.json());
      console.log(myHeaders)
      return  this.sourceData= this.http.post(this.apiUrlService.addMapIpUrl,{data:value,is_forbid:isForbid},{headers:myHeaders}).map(res=>res.json());


  }


  getAllMap(){
      this.tokenService.refreshToken();

      let myHeaders:Headers=new Headers();
      myHeaders.append('token',localStorage.getItem('token'))
      return this.sourceData= this.http.get(this.apiUrlService.allMapUrl,{headers:myHeaders}).map(res=>res.json());
  }

  updateIpMap(value,id){
     this.tokenService.refreshToken();
      let myHeaders:Headers=new Headers();
      myHeaders.append('token',localStorage.getItem('token'));
      return  this.http.post(this.apiUrlService.updateIpMapUrl,{data:value,id:id},{headers:myHeaders}).map(res=>res.json());


  }


  getOneIpMap(id){
      this.tokenService.refreshToken();
      let myHeaders:Headers=new Headers();
      myHeaders.append('token',localStorage.getItem('token'));
      return  this.http.get(this.apiUrlService.oneIpMapUrl+'?id='+id,{headers:myHeaders}).map(res=>res.json());

  }

  updateIsopen(status,id){
      this.tokenService.refreshToken();
      let myHeaders:Headers=new Headers();
      myHeaders.append('token',localStorage.getItem('token'));
      return  this.http.post(this.apiUrlService.updateIpMapStatusUrl,{status:status,id:id},{headers:myHeaders}).map(res=>res.json());

  }

  deleteIpMap(id){
      this.tokenService.refreshToken();
      let myHeaders:Headers=new Headers();
      myHeaders.append('token',localStorage.getItem('token'));
      myHeaders.append('id',id);//id通过heaer传过去
      return  this.http.delete(this.apiUrlService.deleteIpMapUrl,{headers:myHeaders}).map(res=>res.json());
  }

    updateIsForbid(status,id){
        this.tokenService.refreshToken();
        let myHeaders:Headers=new Headers();
        myHeaders.append('token',localStorage.getItem('token'));
        return  this.http.post(this.apiUrlService.updateIpMapIsForbidUrl,{status:status,id:id},{headers:myHeaders}).map(res=>res.json());

    }

    getLibrarys(){
        this.tokenService.refreshToken();
        let myHeaders:Headers=new Headers();
        myHeaders.append('token',localStorage.getItem('token'));
        return  this.http.get(this.apiUrlService.getLibrariesUrl,{headers:myHeaders}).map(res=>res.json());
    }

    updateLibraryIsOpen(status,id){
        this.tokenService.refreshToken();
        let myHeaders:Headers=new Headers();
        myHeaders.append('token',localStorage.getItem('token'));
        return  this.http.post(this.apiUrlService.updateLibraryOpen,{status:status,id:id},{headers:myHeaders}).map(res=>res.json());

    }


    addLibrary(value){
              this.tokenService.refreshToken();
              let myHeaders:Headers=new Headers();
              myHeaders.append('token',localStorage.getItem('token'))
              return  this.sourceData= this.http.post(this.apiUrlService.addLibrayUrl,{data:value},{headers:myHeaders}).map(res=>res.json());


          }
    updateLibrary(value,id){
        this.tokenService.refreshToken();
        let myHeaders:Headers=new Headers();
        myHeaders.append('token',localStorage.getItem('token'));
        return  this.http.post(this.apiUrlService.updateLibrayUrl,{data:value,id:id},{headers:myHeaders}).map(res=>res.json());

    }

    getOneLibrary(id){
        this.tokenService.refreshToken();
        let myHeaders:Headers=new Headers();
        myHeaders.append('token',localStorage.getItem('token'));
        return  this.http.get(this.apiUrlService.oneLibraryUrl+'?id='+id,{headers:myHeaders}).map(res=>res.json());
    }

    deleteLibrary(id){
        this.tokenService.refreshToken();
        let myHeaders:Headers=new Headers();
        myHeaders.append('token',localStorage.getItem('token'));
        myHeaders.append('id',id);//id通过heaer传过去
        return  this.http.delete(this.apiUrlService.deleteLibraryUrl,{headers:myHeaders}).map(res=>res.json());
    }

    getSchools(){
        this.tokenService.refreshToken();
        let myHeaders:Headers=new Headers();
        myHeaders.append('token',localStorage.getItem('token'));
        return  this.http.get(this.apiUrlService.getSchoolsUrl,{headers:myHeaders}).map(res=>res.json());
    }

    getOrderStatisticsBySchool(){
        this.tokenService.refreshToken();
        let myHeaders:Headers=new Headers();
        myHeaders.append('token',localStorage.getItem('token'));
        return  this.http.get(this.apiUrlService.orderStatisticsSchoolUrl,{headers:myHeaders}).map(res=>res.json());
    }

    getResourceStatisticsBySchool(){
        this.tokenService.refreshToken();
        let myHeaders:Headers=new Headers();
        myHeaders.append('token',localStorage.getItem('token'));
        return  this.http.get(this.apiUrlService.resourceStatisticsSchoolUrl,{headers:myHeaders}).map(res=>res.json());
    }
    getRequstStatisticsByIpTop10(){
        this.tokenService.refreshToken();
        let myHeaders:Headers=new Headers();
        myHeaders.append('token',localStorage.getItem('token'));
        return  this.http.get(this.apiUrlService.requestStatisticsIpTop10Url,{headers:myHeaders}).map(res=>res.json());

    }

    getRequestStatisticsByMapNameTop10(){
        this.tokenService.refreshToken();
        let myHeaders:Headers=new Headers();
        myHeaders.append('token',localStorage.getItem('token'));
        return  this.http.get(this.apiUrlService.requestStatisticsMapTop10Url,{headers:myHeaders}).map(res=>res.json());

    }

}
