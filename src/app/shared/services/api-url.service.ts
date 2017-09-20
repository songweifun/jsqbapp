import { Injectable } from '@angular/core';

@Injectable()
export class ApiUrlService {

    private baseUrl='http://localhost/after/jsqb/jsqbapi/public/api/v1/'
    public addMapIpUrl:string;
    public allMapUrl:string;
    public updateIpMapUrl:string;
    public oneIpMapUrl:string;
    public updateIpMapStatusUrl:string;
    public deleteIpMapUrl:string;
    public updateIpMapIsForbidUrl:string;
    public getIpWhiteUrl:string;
    public getIpBlackUrl:string;
    public getLibrariesUrl:string;
    public updateLibraryOpen:string;
    public addLibrayUrl:string;
    public updateLibrayUrl:string;
    public oneLibraryUrl:string;
    public deleteLibraryUrl:string;


    constructor() {
      this.allMapUrl=this.baseUrl+'system/all_map';
      this.updateIpMapUrl=this.baseUrl+'system/update_map';
      this.addMapIpUrl=this.baseUrl+'system/map';
      this.oneIpMapUrl=this.baseUrl+'system/one_map';
      this.updateIpMapStatusUrl=this.baseUrl+'system/update_map_status';
      this.deleteIpMapUrl=this.baseUrl+'system/delete_map';
      this.updateIpMapIsForbidUrl=this.baseUrl+'system/update_map_forbid';
      this.getIpWhiteUrl=this.baseUrl+'system/ip_white';
      this.getIpBlackUrl=this.baseUrl+'system/ip_black';
      this.getLibrariesUrl=this.baseUrl+'system/library';
      this.updateLibraryOpen=this.baseUrl+'system/update_library_open';
      this.addLibrayUrl=this.baseUrl+'system/add_library';
      this.updateLibrayUrl=this.baseUrl+'system/update_library';
      this.oneLibraryUrl=this.baseUrl+'system/one_library';
      this.deleteLibraryUrl=this.baseUrl+'system/delete_library';

    }

}
