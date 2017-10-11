import { Injectable } from '@angular/core';

@Injectable()
export class ApiUrlService {

    private baseUrl='http://101.201.103.106/jsqbapi/public/api/v1/'
    //private baseUrl='http://localhost/after/jsqb/jsqbapi/public/api/v1/'
    public uploadTextUrl:string;
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
    public sendArticleUrl:string;
    public tokenAppUrl:string;
    public tokenVerifyUrl:string;
    public getMyTransmitesUrl:string;
    public allTransmitesUrl:string;

    public getSchoolsUrl:string;

    public orderStatisticsSchoolUrl:string;
    public resourceStatisticsSchoolUrl:string;
    public requestStatisticsIpTop10Url:string;
    public requestStatisticsMapTop10Url:string;

    public getAllmemberByPageUrl:string;
    public getOneMemberDetailUrl:string;
    public addMemberUrl:string;
    public updateMemberUrl:string;
    public getAllSchoolUrl:string;
    public updateMemberIpOpenUrl:string;

    public recordLoginLogUrl:string;
    public recordLogoutLogUrl:string;
    public getEntryLogUrl:string;
    public getOperateLogUrl:string;


    public checkSuperAdminUrl:string;


    constructor() {
      this.uploadTextUrl=this.baseUrl+'upload'
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
      this.sendArticleUrl=this.baseUrl+'order/send';
      this.tokenAppUrl=this.baseUrl+'token/app';
      this.tokenVerifyUrl=this.baseUrl+'token/verify';
      this.getMyTransmitesUrl=this.baseUrl+'order/by_user';
      this.allTransmitesUrl=this.baseUrl+'order/paginate';

      this.getSchoolsUrl=this.baseUrl+'system/schools';
      this.orderStatisticsSchoolUrl=this.baseUrl+'statistics/order_byschool';
      this.resourceStatisticsSchoolUrl=this.baseUrl+'statistics/resource_byschool';
      this.requestStatisticsIpTop10Url=this.baseUrl+'statistics/requestip_top10';
      this.requestStatisticsMapTop10Url=this.baseUrl+'statistics/requestmap_top10';

      this.getAllmemberByPageUrl=this.baseUrl+'member/all';
      this.getOneMemberDetailUrl=this.baseUrl+'member/one_member';
      this.addMemberUrl=this.baseUrl+'member/add';
      this.updateMemberUrl=this.baseUrl+'member/update_member';
      this.getAllSchoolUrl=this.baseUrl+'member/all_school';
      this.updateMemberIpOpenUrl=this.baseUrl+'member/update_isopen';

      this.recordLoginLogUrl=this.baseUrl+'log/login';
      this.recordLogoutLogUrl=this.baseUrl+'log/logout';
      this.getEntryLogUrl=this.baseUrl+'log/get_entry';
      this.getOperateLogUrl=this.baseUrl+'log/get_operate';


      this.checkSuperAdminUrl=this.baseUrl+'access/super_admin';

    }

}
