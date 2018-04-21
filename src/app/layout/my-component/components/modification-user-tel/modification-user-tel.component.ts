import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {NgbModal, NgbModalRef, NgbModalOptions, ModalDismissReasons} from "@ng-bootstrap/ng-bootstrap";
import {AppService} from "../../../../app.service";
import {UserService} from "../../../../shared/services/user.service";

@Component({
  selector: 'app-modification-user-tel',
  templateUrl: './modification-user-tel.component.html',
  styleUrls: ['./modification-user-tel.component.scss']
})
export class ModificationUserTelComponent implements OnInit {
    @Input() user;
    myModalRef:NgbModalRef;
    closeResult: string;
    options:NgbModalOptions={size:'lg'};

    @Input()
    transformPageData:any

    tel = ''
    code = ''

    @Output()  onDataSubmit = new EventEmitter();


    constructor(
      private modalService: NgbModal,
      private appService: AppService,
      private userService:UserService
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

    getCode(){
        if(!this.tel){
            alert('手机号码不能为空')
        }

        this.userService.getTelCode(this.tel,res=>{
            console.log(res)
        })

    }

    onSubmit(){
        if(!this.tel || !this.code){
            alert("验证码或者手机号为空")
        }else{
            this.onDataSubmit.emit({'phone':this.tel,'code':this.code})
            this.myModalRef.close()
        }

    }

}
