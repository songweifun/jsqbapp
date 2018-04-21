import {Component, OnInit, Input} from '@angular/core';
import {NgbModalRef, NgbModalOptions, NgbModal, ModalDismissReasons} from "@ng-bootstrap/ng-bootstrap";
import {AppService} from "../../../../app.service";
import {UserService} from "../../../../shared/services/user.service";

@Component({
  selector: 'app-user-detail-modal',
  templateUrl: './user-detail-modal.component.html',
  styleUrls: ['./user-detail-modal.component.scss']
})
export class UserDetailModalComponent implements OnInit {
    @Input() user;
    myModalRef:NgbModalRef;
    closeResult: string;
    options:NgbModalOptions={size:'sm'};

    @Input()
    transformPageData:any

  constructor(
      private modalService: NgbModal,
      private appService: AppService,
      private userServcie:UserService,
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

    modificateTel(event,user_id){
        //调用修改手机的接口
        event.user_id=user_id
        console.log(event)
        this.userServcie.modificateUseTel(event,res=>{
            console.log(res)
            this.appService.pageRefreshEventEmitter.emit(this.transformPageData);//创建一个事件流发送传递过来的分页信息
            this.user.phone=event.phone
            alert(res.msg)
        },err=>{
           alert(JSON.parse(err['_body']).msg)
        })
    }

}
