import { Component } from '@angular/core';
import {AppService} from "../../../app.service";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    isActive = false;
    showMenu = '';
    newOrderCount:number=0;

    constructor(
        private appService:AppService
    ){
        this.appService.newOrderCountEventEmitter.subscribe(
            data=>this.newOrderCount=data
        )
    }
    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
