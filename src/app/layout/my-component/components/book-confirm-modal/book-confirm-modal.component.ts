import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {NgbModalRef, NgbModalOptions, NgbModal, ModalDismissReasons} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-book-confirm-modal',
  templateUrl: './book-confirm-modal.component.html',
  styleUrls: ['./book-confirm-modal.component.scss']
})
export class BookConfirmModalComponent implements OnInit {

    myModalRef:NgbModalRef;
    closeResult: string;
    options:NgbModalOptions={size:'sm'};

    @Input() btnText;
    @Input() header="系统借还书"
    @Input() placeHolder="条码号"
    barCode;

    @Input() btnIsDisable=0;

    @Output()  onBarCodeSubmit = new EventEmitter();

  constructor(
      private modalService: NgbModal,
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

    onSubmit(){
      this.onBarCodeSubmit.emit(this.barCode);
      this.myModalRef.close();

    }

}
