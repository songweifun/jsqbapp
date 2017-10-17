/**
 * Created by daivd on 2017/10/17.
 */
import {CanDeactivate} from "@angular/router";
import {NewApplyComponent} from "../layout/orders/new-apply/new-apply.component";

export class LeaveOrderNewGuard implements CanDeactivate<NewApplyComponent>{ //这里有个泛型用来指定受保护的组件
    canDeactivate(component:NewApplyComponent){//这个是上面的泛型，可以从中得到一些组件的信息

        if(component.subscrption){
            component.subscrption.unsubscribe();
            component.subscrption=null;
            component.listHide=true;
            component.ordersStartText="开始抢单";
            component.appService.newOrderCountEventEmitter.emit(0)
        }

        // const alertCfg = new AlertConfig(AlertType.INFO, '权限控制', '没有权限');
        // this.modalService.alert(alertCfg);
        // this.router.navigate(['/orders/new-apply']);
        //return window.confirm("订单正在推送您确定要离开此页面吗？")
        return true;
    }
}
