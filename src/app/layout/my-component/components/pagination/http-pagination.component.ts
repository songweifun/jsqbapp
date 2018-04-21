import {Component, Input, Output, OnInit, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { PaginationType, HttpPaginationMethod } from './pagination-model';
import {HttpService} from "../../../../shared/services/http/http.service";
import {Utils} from "../../../../shared/services/util/utils";
import {ToastService} from "../../../../shared/components/toast/toast.service";
import {ToastConfig, ToastType} from "../../../../shared/components/toast/toast-model";
import {AppService} from "../../../../app.service";
import {HttpService2} from "../../../../shared/services/http.service";



/**
 * app-http-pagination组件
 */
@Component({
    selector: 'app-http-pagination',
    template: `
       <app-pagination [total]="total" [pageList]="pageList" [pageSize]="pageSize" [pageNumber]="pageNumber" [btnCls]="btnCls" (onPageChanged)="onPageChanged($event)"></app-pagination>
    `
})
//       <app-pagination [total]="total" [pageList]="pageList" [pageSize]="pageSize" [btnCls]="btnCls" (onPageChanged)="onPageChanged($event)"></app-pagination>

export class HttpPaginationComponent implements OnInit {
    // ngOnChanges(changes: SimpleChanges): void {
    //     //this.getServerData()
    // }

    @Input()
    pageList: Array<number> = [10, 20, 30, 50, 100, 150, 200];

    @Input()
    btnCls: string = 'btn-secondary';

    @Input()
    url: string;

    @Input()
    method: string = 'post';

    @Input()
    param: any = new Object();


    @Output()
    onDataChanged = new EventEmitter();



    total: number = 0;
    pageSize: number = this.pageList[0];
    pageNumber: number = 1;



    constructor(
        private httpService2: HttpService2,
        private appService:AppService
    ) {

        // this.appService.keywordEventEmitter.debounceTime(500).subscribe(res=>{
        //     this.getServerData()
        // })

        this.appService.pageRefreshEventEmitter.subscribe(
            data=>{
                this.pageSize=data.pageSize;
                this.pageNumber=data.pageNumber;
                this.url=data.url?data.url:this.url
                this.getServerData()
                //alert(data.pageNumber)
            }
        )

    }

    /**
    * 初始化
    */
    ngOnInit() {
        this.getServerData();
        //alert(111)
    }

    /**
     * 查询方法
     */
    search(){
        this.getServerData();
    }

    /**
     * 获得服务器数据
     */
    private getServerData() {
        //alert(3333)
        let serviceData: any = {};
        serviceData.pageNumber = this.pageNumber;
        serviceData.pageSize = this.pageSize;
        this.httpService2.request({url:this.url,type:this.method ,data:serviceData, sCallback:this.requestDataCallback },false)


    }

    requestDataCallback=(res)=>{
        this.serverDataProcess(res);
    }


    /**
     * 服务器端数据处理
     * @param data 数据
     */
    private serverDataProcess(data: any) {

        this.total = data.total;
        this.onDataChanged.emit(data);
    }


    /**
     * 分页改变事件
     * @param event
     */
     onPageChanged($event) {
        if ($event.type != PaginationType.PAGE_INIT) {
            //console.log($event);
            this.pageSize = $event.pageSize;
            this.pageNumber = $event.pageNumber;
            //this.total=$event.total
            this.getServerData();
        }
    }


}
