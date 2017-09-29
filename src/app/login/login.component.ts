import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {TokenService} from "../shared/services/token.service";
import {SystemService} from "../shared/services/system/system.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    dataSource:Observable<any>;

    private ac:string;
    private se:string;

    constructor(
        public router: Router,
        private http:Http,
        private tokenService:TokenService,
        private systemService:SystemService
    ) {


    }

    ngOnInit() {

    }

    onLoggedin() {

        let token=this.tokenService.getTokenAsync(this.ac,this.se).subscribe(
            data=>{
                if(data.token){
                    //alert(data.token)
                    localStorage.setItem('isLoggedin', 'true');
                    localStorage.setItem('token',data.token);
                    localStorage.setItem('se', this.se);
                    localStorage.setItem('ac', this.ac);
                    this.systemService.recordLoginlog(data.token).subscribe(
                        data=>{

                        }
                    )
                    this.router.navigate(['/orders/new-apply'])
                }else{
                    this.router.navigate(['/login'])
                }

            }
        )

        //alert(token)


        //localStorage.setItem('isLoggedin', 'true');
    }

}
