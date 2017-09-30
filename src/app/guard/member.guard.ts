import {Injectable} from "@angular/core";
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {ModalService} from "../shared/components/modal/modal.service";
import {AlertConfig, AlertType} from "../shared/components/modal/modal-model";
/**
 * Created by daivd on 2017/9/30.
 */
@Injectable()
export class memberGuard implements CanActivate{
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
