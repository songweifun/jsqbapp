import {Component, OnInit, Input} from '@angular/core';
import {NgbModalOptions, NgbModalRef, NgbModal, ModalDismissReasons} from "@ng-bootstrap/ng-bootstrap";
import {BookService} from "../../../../shared/services/book.service";

@Component({
  selector: 'app-book-locations-modal',
  templateUrl: './book-locations-modal.component.html',
  styleUrls: ['./book-locations-modal.component.scss']
})
export class BookLocationsModalComponent implements OnInit {
    myModalRef:NgbModalRef;
    closeResult: string;
    options:NgbModalOptions={size:'lg'};

    @Input() bookId;

    items;

  constructor(
      private modalService: NgbModal,
      private bookService:BookService,

  ) { }

  ngOnInit() {
      //alert(1111)
  }

    open(content) {
      this.bookService.getLibItemsWithSip2Aaviable(this.bookId,res=>{
          this.items=res;
          this.myModalRef=this.modalService.open(content,this.options);
          this.myModalRef.result.then((result) => {
              this.closeResult = `Closed with: ${result}`;
          }, (reason) => {
              this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
      },err=>{})
      //alert(this.bookId)

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

}
