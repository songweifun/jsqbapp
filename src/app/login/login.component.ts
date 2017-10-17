import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {TokenService} from "../shared/services/token.service";
import {SystemService} from "../shared/services/system/system.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    //dataSource:Observable<any>;

    private ac:string;
    private se:string;

    constructor(
        public router: Router,
        //private http:Http,
        private tokenService:TokenService,
        private systemService:SystemService
    ) {


    }

    ngOnInit() {

    }

    onLoggedin() {

        this.tokenService.getTokenAsync(this.ac,this.se).subscribe(
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
                    localStorage.setItem('jurisdiction','0')
                    this.systemService.checkSuperAdmin().subscribe(
                        data=>{
                            //alert(data.errorCode)
                            //console.log(data.errorCode);
                            if(data.errorCode==10001){
                                localStorage.setItem('jurisdiction','0')

                            }else{
                                localStorage.setItem('jurisdiction','1')
                            }
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
