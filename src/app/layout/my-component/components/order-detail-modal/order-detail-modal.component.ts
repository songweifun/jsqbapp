import {Component, OnInit, Input} from '@angular/core';
import {NgbModal, NgbModalRef, ModalDismissReasons, NgbModalOptions} from "@ng-bootstrap/ng-bootstrap";
import {ModalService} from "../../../../shared/components/modal/modal.service";
import {BookService} from "../../../../shared/services/book.service";
import {AppService} from "../../../../app.service";

@Component({
  selector: 'app-order-detail-modal',
  templateUrl: './order-detail-modal.component.html',
  styleUrls: ['./order-detail-modal.component.scss']
})
export class OrderDetailModalComponent implements OnInit {

    @Input() order;
    myModalRef:NgbModalRef;
    closeResult: string;
    options:NgbModalOptions={size:'lg'};

    @Input()
    transformPageData:any


  constructor(
      private modalService: NgbModal,
      private modalService2:ModalService,
      private bookService:BookService,
      private appService:AppService

  ) { }

  ngOnInit() {
  }

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


    borrowBook(event,book_id,id){
        this.bookService.borrowBook(event,res=>{
            //console.log(event);
            const arr=this.order.book_list.map(book=>parseInt(book.book_id));
            const index=arr.indexOf(parseInt(book_id))
            this.order.book_list[index]['is_available']=1;
            //console.log(res);

            this.bookService.updateFieldByListId(id,'is_available',1,res=>{},err=>{})
            this.bookService.updateFieldByListId(id,'bar_code',event,res=>{},err=>{})

            this.appService.pageRefreshEventEmitter.emit(this.transformPageData);//创建一个事件流发送传递过来的分页信息


        },err=>{

            console.log(err)
            alert("借书失败")
        })
    }

    returnBook(event,book_id,id){

        this.bookService.returnBook(event,res=>{
            //console.log(event);

            const arr=this.order.book_list.map(book=>parseInt(book.book_id));
            const index=arr.indexOf(parseInt(book_id))
            this.order.book_list[index]['is_available']=0;
            //console.log(res);
            this.bookService.updateFieldByListId(id,'is_available',0,res=>{},err=>{})

            this.appService.pageRefreshEventEmitter.emit(this.transformPageData);//创建一个事件流发送传递过来的分页信息


        },err=>{

            console.log(err)
            alert("还书失败")
        })



        //alert(event)


    }

    deleteOrderBook(id,book_id,status){
        this.bookService.updateFieldByListId(id,'is_available',status,res=>{
            this.appService.pageRefreshEventEmitter.emit(this.transformPageData);

            const arr=this.order.book_list.map(book=>parseInt(book.book_id));
            const index=arr.indexOf(parseInt(book_id))
            this.order.book_list[index]['is_available']=status;
        },err=>{})
    }

}
