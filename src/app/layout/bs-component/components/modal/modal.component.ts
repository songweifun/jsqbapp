import {Component, Input} from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalOptions, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {Order} from "../../../orders/orders.component";
import {SendArticleService} from "../../../../shared/services/send-article.service";

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

    constructor(
        private modalService: NgbModal,
        private sendArticleService:SendArticleService,

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
        this.sendArticleService.sendArticle(orderId).subscribe(
            data=>{
                if(data.errorCode===0){
                    alert('传递成功')
                    this.myModalRef.close()
                }else{
                    alert('传递失败')
                    //this.myModalRef.close()
                }
            }
        )


    }

    setIsupload(event){
        console.log(event)
        this.isUploaded=event;

    }
}
