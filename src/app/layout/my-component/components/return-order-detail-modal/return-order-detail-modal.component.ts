import {Component, OnInit, Input} from '@angular/core';
import {NgbModalRef, NgbModalOptions, NgbModal, ModalDismissReasons} from "@ng-bootstrap/ng-bootstrap";
import {AppService} from "../../../../app.service";
import {BookService} from "../../../../shared/services/book.service";
import {OrderService} from "../../../../shared/services/order/order.service";
import {ReturnOrderStatus, BookStatus} from "../../../domain/status.model";

@Component({
  selector: 'app-return-order-detail-modal',
  templateUrl: './return-order-detail-modal.component.html',
  styleUrls: ['./return-order-detail-modal.component.scss']
})
export class ReturnOrderDetailModalComponent implements OnInit {

    myModalRef:NgbModalRef;
    closeResult: string;
    options:NgbModalOptions={size:'lg'};

    @Input()
    transformPageData:any

    @Input() returnOrderId=[];
    books;

    btnText="还书入库";
    isDisabled:boolean=false;


    constructor(
        private modalService: NgbModal,
        private appService:AppService,
        private bookService:BookService,
        private orderService:OrderService,

    ) { }

  ngOnInit() {

  }

    open(content) {
        //alert(this.returnOrderId)
        this.bookService.getBooksByReturnOrderId(this.returnOrderId,res=>{
            this.books=res
        },err=>{})
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

    onBookReturnHandle(bar_code,order_book_list_id){

        //alert(order_book_list_id);
        //借书接口
        this.bookService.returnBook(bar_code,res=>{
            //成功后要把把图书的状态 还书订单的状态改变下
            this.orderService.setReturnOrderAndBookStatusByBookId(order_book_list_id,this.returnOrderId,ReturnOrderStatus.RETURNED,BookStatus.AFFIRM_RETURNED,res=>{
                this.btnText="已入库";
                this.isDisabled=true;
                this.appService.pageRefreshEventEmitter.emit(this.transformPageData);//创建一个事件流发送传递过来的分页信息
                this.bookService.getBooksByReturnOrderId(this.returnOrderId,res=>{
                    this.books=res
                },err=>{})

            },err=>{

            })

        },err=>{})
    }

}
