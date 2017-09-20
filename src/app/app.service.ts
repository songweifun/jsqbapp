import { Injectable,EventEmitter } from '@angular/core';


/**
 * app服务
 */
@Injectable()
export class AppService {
    //标题
    titleEventEmitter:EventEmitter<string>;
    pageRefreshEventEmitter:EventEmitter<string>;

    constructor() {
        this.titleEventEmitter = new EventEmitter();
        this.pageRefreshEventEmitter = new EventEmitter();
    }




}
