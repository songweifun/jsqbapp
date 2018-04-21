import { Injectable } from '@angular/core';

@Injectable()
export class ApiUrlService {

    //private baseUrl='http://101.201.103.106/jsqbapi/public/api/v1/'
    private baseUrl='http://101.201.122.94:8089/public/api/v1/'
    private baseUrlOto='http://101.201.122.94/otoapi/public/api/v1/'
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





    public sendArticleUrl:string;
    public tokenVerifyUrl:string;
    public getMyTransmitesUrl:string;
    public allTransmitesUrl:string;


    public orderStatisticsSchoolUrl:string;
    public resourceStatisticsSchoolUrl:string;
    public requestStatisticsIpTop10Url:string;
    public requestStatisticsMapTop10Url:string;

    public getOneMemberDetailUrl:string;
    public addMemberUrl:string;
    public updateMemberUrl:string;
    public getAllSchoolUrl:string;


    public recordLoginLogUrl:string;
    public recordLogoutLogUrl:string;
    public getEntryLogUrl:string;
    public getOperateLogUrl:string;





    //oto

    public getLogisticsOrderUrl:string;
    public getExtractOrderUrl:string;
    public getLibItemsWithSip2AaviableUrl:string;
    public sip2BorrowBookUrl:string;
    public sip2ReturnBookUrl:string;
    public updateFieldByListIdUrl:string;
    public setOrderAndBookStatusByIdUrl:string;
    public setReturnOrderAndBookStatusByBookIdUrl:string;
    public checkSuperAdminUrl:string;
    public tokenAppUrl:string;
    public getAllmemberByPageUrl:string;
    public updateMemberIpOpenUrl:string;
    public getLibrariesUrl:string;
    public updateLibraryOpen:string;
    public oneLibraryUrl:string;
    public addLibrayUrl:string;
    public updateLibrayUrl:string;
    public deleteLibraryUrl:string;
    public getMyReturnOrdersListAdminUrl:string;
    public getBooksByReturnOrderIdUrl:string;
    public sendExtractMessageUrl:string;
    public setCarrierCodeByOrderIdUrl:string;
    public getSchoolsUrl:string;
    public getSip2ConfigListUrl:string;
    public addSip2ConfigUrl:string;
    public oneSip2ConfigUrl:string;
    public updateSip2ConfigUrl:string;
    public updateSip2ConfigIsDefaultUrl:string;
    public deleteSip2ConfigUrl:string;
    public getTelCodeUrl:string;
    public modificateUserTelUrl:string;








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




      this.sendArticleUrl=this.baseUrl+'order/send';

      this.tokenVerifyUrl=this.baseUrl+'token/verify';
      this.getMyTransmitesUrl=this.baseUrl+'order/by_user';
      this.allTransmitesUrl=this.baseUrl+'order/paginate';

      this.orderStatisticsSchoolUrl=this.baseUrl+'statistics/order_byschool';
      this.resourceStatisticsSchoolUrl=this.baseUrl+'statistics/resource_byschool';
      this.requestStatisticsIpTop10Url=this.baseUrl+'statistics/requestip_top10';
      this.requestStatisticsMapTop10Url=this.baseUrl+'statistics/requestmap_top10';

      this.getOneMemberDetailUrl=this.baseUrl+'member/one_member';
      this.addMemberUrl=this.baseUrl+'member/add';
      this.updateMemberUrl=this.baseUrl+'member/update_member';
      this.getAllSchoolUrl=this.baseUrl+'member/all_school';


      this.recordLoginLogUrl=this.baseUrl+'log/login';
      this.recordLogoutLogUrl=this.baseUrl+'log/logout';
      this.getEntryLogUrl=this.baseUrl+'log/get_entry';
      this.getOperateLogUrl=this.baseUrl+'log/get_operate';




      //oto
      this.tokenAppUrl=this.baseUrlOto+'token/app';
      this.getLogisticsOrderUrl=this.baseUrlOto+'order/status_admin/1';
      this.getExtractOrderUrl=this.baseUrlOto+'order/status_admin/0';
      this.getLibItemsWithSip2AaviableUrl=this.baseUrlOto+'jalis/lib_items_avaiable';
      this.sip2BorrowBookUrl=this.baseUrlOto+'Sip2/borrow';
      this.sip2ReturnBookUrl=this.baseUrlOto+'Sip2/return';
      this.updateFieldByListIdUrl=this.baseUrlOto+'order/update_field_id';
      this.setOrderAndBookStatusByIdUrl=this.baseUrlOto+'order/set_status_id';
      this.checkSuperAdminUrl=this.baseUrlOto+'access/super_admin';
      this.getAllmemberByPageUrl=this.baseUrlOto+'user/all';
      this.updateMemberIpOpenUrl=this.baseUrlOto+'user/update_status';
      this.getLibrariesUrl=this.baseUrlOto+'system/library';
      this.updateLibraryOpen=this.baseUrlOto+'system/update_library_open';
      this.oneLibraryUrl=this.baseUrlOto+'system/one_library';
      this.addLibrayUrl=this.baseUrlOto+'system/add_library';
      this.updateLibrayUrl=this.baseUrlOto+'system/update_library';
      this.deleteLibraryUrl=this.baseUrlOto+'system/delete_library';
      this.getMyReturnOrdersListAdminUrl=this.baseUrlOto+'order/admin_return_orders_list';
      this.getBooksByReturnOrderIdUrl=this.baseUrlOto+'order/return_order_books';
      this.setReturnOrderAndBookStatusByBookIdUrl=this.baseUrlOto+'order/set_status_return_order_id_book_id';
      this.sendExtractMessageUrl=this.baseUrlOto+'message/extract';
      this.setCarrierCodeByOrderIdUrl=this.baseUrlOto+'order/carrier_code';
      this.getSchoolsUrl=this.baseUrlOto+'system/schools';
      this.getSip2ConfigListUrl=this.baseUrlOto+'sip2config/all_byschool';
      this.addSip2ConfigUrl=this.baseUrlOto+'sip2config/add_sip2config';
      this.oneSip2ConfigUrl=this.baseUrlOto+'sip2config/one_sip2config';
      this.updateSip2ConfigUrl=this.baseUrlOto+'sip2config/update_sip2config';
      this.updateSip2ConfigIsDefaultUrl=this.baseUrlOto+'sip2config/update_sip2config_default';
      this.deleteSip2ConfigUrl=this.baseUrlOto+'sip2config/delete_sip2config';
      this.getTelCodeUrl=this.baseUrlOto+'token/code';
      this.modificateUserTelUrl=this.baseUrlOto+'user/modifi_tel';








    }

}
