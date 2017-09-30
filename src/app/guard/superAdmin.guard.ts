import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
//import {SystemService} from "../shared/services/system/system.service";
import {Injectable, NgModule} from "@angular/core";
import {ModalService} from "../shared/components/modal/modal.service";
import {AlertConfig, AlertType} from "../shared/components/modal/modal-model";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SharedModule} from "../shared/shared.module";
/**
 * Created by daivd on 2017/9/30.
 */
// @NgModule({
//     imports: [
//         NgbModule.forRoot(),
//         SharedModule
//     ],
//     declarations: [
//
//     ],
//     providers: [
//         ModalService
//     ],
// })
@Injectable()
export class superAdminGuard implements CanActivate{
    constructor(
        private router:Router,
        private modalService:ModalService, //路由中注入了

    ){



    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        let jurisdiction:boolean;
        if(localStorage.getItem('jurisdiction')=='0'){
            jurisdiction=false;
        }else{
            jurisdiction=true;
        }



        if(!jurisdiction){
            const alertCfg = new AlertConfig(AlertType.INFO, '权限控制', '没有权限');
            this.modalService.alert(alertCfg);
            this.router.navigate(['/orders/new-apply']);

        }









        return jurisdiction;
    }
}
