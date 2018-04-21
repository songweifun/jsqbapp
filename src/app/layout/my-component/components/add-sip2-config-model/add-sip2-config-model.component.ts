import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {NgbModalRef, NgbModalOptions, NgbModal, ModalDismissReasons} from "@ng-bootstrap/ng-bootstrap";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {SystemService} from "../../../../shared/services/system/system.service";

@Component({
  selector: 'app-add-sip2-config-model',
  templateUrl: './add-sip2-config-model.component.html',
  styleUrls: ['./add-sip2-config-model.component.scss']
})
export class AddSip2ConfigModelComponent implements OnInit {
    myModalRef:NgbModalRef;
    closeResult: string;
    options:NgbModalOptions={size:'lg'};

    @Input()
    header:string

    @Input() btnText:string


    formModel:FormGroup

    @Output() onSubmitData=new EventEmitter();


    @Input()
    ipMapId:number;




// @Input()
// transformPageData:any
//model;

    @Input() schools;

  constructor(
      private modalService:NgbModal,
      private fb:FormBuilder,
      private systemService:SystemService,
  ) { }

  ngOnInit() {
      this.formModel=this.fb.group({
          bind_name:['',[Validators.required,Validators.minLength(3)]],
          bind_pass:['',[Validators.required]],
          host:['',[Validators.required]],
          port:['',[Validators.required]],
          location:['',[Validators.required]],
          user_code:['',[Validators.required]],
          school_id:['',[Validators.required]],
          is_default:[1],
      })

  }

    open(content) {
        this.myModalRef=this.modalService.open(content,this.options);
        this.myModalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
        if(this.ipMapId){
            // alert(111)
            this.systemService.getOneSipConfig(this.ipMapId,data=>{

                this.formModel=this.fb.group({
                    bind_name:[data.bind_name,[Validators.required,Validators.minLength(3)]],
                    bind_pass:[data.bind_pass,[Validators.required]],
                    host:[data.host,[Validators.required]],
                    port:[data.port,[Validators.required]],
                    location:[data.location,[Validators.required]],
                    user_code:[data.user_code,[Validators.required]],
                    school_id:[data.school_id,[Validators.required]],
                    is_default:[data.is_default],
                })


            },err=>{})

        }


        //this.formMode
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

     // alert(this.formModel.valid)

        if(this.formModel.valid){
            let submitData=new SubmitData(this.formModel,this.myModalRef)
            this.onSubmitData.emit(submitData);
        }


    }

}

export class SubmitData{
    constructor(
        public formModel:FormGroup,
        public ref:NgbModalRef
    ){

    }
}
