import {Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges} from '@angular/core';
import {PaginationOptions, PaginationType} from "./pagination-model";

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges,OnInit {
    ngOnInit(): void {
    }
    @Input()
    total: number = 0;

    @Input()
    pageList: Array<number> = [10, 20, 30, 50, 100, 150, 200];

    @Input()
    btnCls: string = 'btn-secondary';

    @Output()
    onPageChanged = new EventEmitter();

    options: PaginationOptions = {};

    @Input()
    pageSize:number;

    @Input()
    pageNumber:number=1;
    //
    // options: PaginationOptions = {pageSize:this.pageSize};





    constructor() {
       //  //this.defaultPagination = 1;
       //  this.advancedPagination = 1;
       //  this.pageSize=10;
       // // this.paginationSize = 1;
       //  //this.disabledPagination = 1;
       //  this.isDisabled = true;
       //  this.options.pageTotal=10;
       //  this.options.total = this.total;
       //   this.options.pageNumber =1;
       //   this.options.pageSize = this.pageList[0];
       //  this.options.pageList = this.pageList;
    }


    /**
     * 改变
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges) {
        //alert(11111)
        this.options.total = this.total;
        this.options.pageList = this.pageList;
        this.options.pageSize = this.pageSize?this.pageSize:this.pageList[0];
        this.options.pageNumber =this.pageNumber;
        this.refreshPage();
        this.pageOperation(PaginationType.PAGE_INIT);
        //alert(11111)
    }


    /**
     * 刷新分页
     */
    refreshPage() {
        this.options.pageTotal = 0;
        if (Number.parseInt(this.options.total) % Number.parseInt(this.options.pageSize) == 0) {
            this.options.pageTotal = Number.parseInt(this.options.total) / Number.parseInt(this.options.pageSize);
        } else {
            this.options.pageTotal = Number.parseInt(this.options.total) / Number.parseInt(this.options.pageSize) + 1;
        }
        this.options.pageTotal = Number.parseInt(this.options.pageTotal);

        // if (this.options.pageTotal <= 0) {
        //     this.options.pageNumber = 0;
        // } else {
        //     this.options.pageNumber = 1;
        // }
    }


    /**
     * 分页操作
     * @param type  操作类型
     */
    pageOperation(type) {
        let pageParam = {
            pageNumber: this.options.pageNumber,
            pageSize: this.options.pageSize,
            pageTotal: this.options.pageTotal,
            total: this.options.total,
            type: type
        }
        this.onPageChanged.emit(pageParam);
    }

    toggleDisabled() {
       // this.isDisabled = !this.isDisabled;
    }

    pageChangeHandler(event){
        //console.log(event)
        this.options.pageNumber =  Number.parseInt(event);
        //this.refreshPage();
        this.pageOperation(0);
    }

    /**
     * 页数改变 10 20等
     * @param $event  当前条件
     */
    pageSizeChanged($event) {
        this.options.pageSize = Number.parseInt($event);
        //alert($event)
        this.refreshPage();
        this.pageOperation(PaginationType.PAGE_SIZE_CHANGE);
         //
    }
}
