import { Injectable,EventEmitter } from '@angular/core';


/**
 * app服务
 */
@Injectable()
export class AppService {
    //标题
    titleEventEmitter:EventEmitter<string>;
    pageRefreshEventEmitter:EventEmitter<string>;
    newOrderCountEventEmitter:EventEmitter<number>;
    keywordEventEmitter:EventEmitter<string>;

    constructor() {
        this.titleEventEmitter = new EventEmitter();
        this.pageRefreshEventEmitter = new EventEmitter();
        this.newOrderCountEventEmitter=new EventEmitter();
        this.keywordEventEmitter=new EventEmitter();
    }




}
