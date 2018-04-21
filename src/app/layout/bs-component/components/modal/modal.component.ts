import {Component, Input} from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalOptions, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {Order} from "../../../orders/orders.component";
import {SendArticleService} from "../../../../shared/services/send-article.service";
import {ModalService} from "../../../../shared/components/modal/modal.service";
import {AlertConfig, AlertType} from "../../../../shared/components/modal/modal-model";

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
    closeResult: string;
    options:NgbModalOptions={size:'lg'};
    myModalRef:NgbModalRef;
    isUploaded:boolean=false;

    @Input()
    orderInfo:Order;

    @Input()
    isTransmited:boolean;

    constructor(
        private modalService: NgbModal,
        private sendArticleService:SendArticleService,
        private modalService2:ModalService,

    ) { }

    open(content) {
        this.myModalRef=this.modalService.open(content,this.options);
        this.myModalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }

    sendArticle(orderId){
        // this.sendArticleService.sendArticle(orderId).subscribe(
        //     data=>{
        //         if(data.errorCode===0){
        //             const alertCfg = new AlertConfig(AlertType.INFO, '原文传递', '传递成功');
        //             this.modalService2.alert(alertCfg);
        //             //alert('传递成功')
        //             this.myModalRef.close()
        //         }else{
        //             const alertCfg = new AlertConfig(AlertType.ERROR, '原文传递', '传递失败');
        //             this.modalService2.alert(alertCfg);
        //             //this.myModalRef.close()
        //         }
        //     }
        // )

        this.sendArticleService.sendArticle(orderId,data=>{
            if(data.errorCode===0){
                const alertCfg = new AlertConfig(AlertType.INFO, '原文传递', '传递成功');
                this.modalService2.alert(alertCfg);
                //alert('传递成功')
                this.myModalRef.close()
            }else{
                const alertCfg = new AlertConfig(AlertType.ERROR, '原文传递', '传递失败');
                this.modalService2.alert(alertCfg);
                //this.myModalRef.close()
            }

        },err=>{})


    }

    setIsupload(event){
        //console.log(event)
        this.isUploaded=event;

    }
}
