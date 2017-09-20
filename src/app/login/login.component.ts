import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {TokenService} from "../shared/services/token.service";

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

    constructor(public router: Router,private http:Http,private tokenService:TokenService) {


    }

    ngOnInit() {

    }

    onLoggedin() {
        // this.dataSource=this.tokenService.getToken(this.ac,this.se);
        // this.dataSource.subscribe(
        //     data=>{
        //         console.log(data.token)
        //         localStorage.setItem('isLoggedin', 'true');
        //         localStorage.setItem('token', data.token);
        //         localStorage.setItem('se', this.se);
        //         localStorage.setItem('ac', this.ac);
        //     }
        // )
        if( this.tokenService.getToken(this.ac,this.se)){
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('token', this.tokenService.getToken(this.ac,this.se));
            localStorage.setItem('se', this.se);
            localStorage.setItem('ac', this.ac);
            this.router.navigate(['/dashboard'])
        }

        //localStorage.setItem('isLoggedin', 'true');
    }

}
