import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {SystemService} from "../../services/system/system.service";
import {TokenService} from "../../services/token.service";
import {AppService} from "../../../app.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    newOrderCount:number=0;
    ac:string='Baohe data';

    constructor(
        private translate: TranslateService,
        public router: Router,
        private systemService:SystemService,
        private tokenService:TokenService,
        private appService:AppService
    ) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992) {
                this.toggleSidebar();
            }
        });

        this.appService.newOrderCountEventEmitter.subscribe(
            data=>this.newOrderCount=data
        )
    }

    ngOnInit() {
        this.ac=localStorage.getItem('ac');
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
        localStorage.removeItem('jurisdiction');
        localStorage.removeItem('uid');
        this.tokenService.refreshToken();
        this.systemService.recordLoginout(localStorage.getItem('token'),data=>{},err=>{})
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
