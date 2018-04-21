/**
 * Created by daivd on 2018/4/16.
 */

export enum OrderStatus{
    UNPAID=1,                 //未付款
    PAID=2,                   //已付款
    AWAIT_EXPRESS_ORDER=3,    //待快递下单
    AWAIT_EXPRESS_CHECK=4,    //待快递公司审核
    EXPRESS_ORDER_SUCCESS=5,  //快递下单成功
    TRANSPORTING=6,           //运输中
    AWAIT_ACCEPT=7,           //待收货
    ACCEPTED=8,               //已收货
    AWAIT_RETURN=9,           //待归还
    RETURNING=10,             //还书中
    RETURNED=11               //已归还
}


export enum BookStatus{
    AWAIT_SEND=1,            //待发货
    SENDED=2,                //已发货
    AWAIT_RETURN=3,          //待归还
    RETURNED=4,              //已归还
    AFFIRM_RETURNED=5,       //馆员确认归还

}


export enum ReturnOrderStatus{
    RETURNING=1,            //已还出
    ACCEPT=2,               //已接收
    RETURNED=3,             //待归还


}
