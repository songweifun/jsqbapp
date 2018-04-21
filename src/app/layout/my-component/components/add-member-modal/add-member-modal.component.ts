import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {NgbModalRef, NgbModalOptions, NgbModal, ModalDismissReasons} from "@ng-bootstrap/ng-bootstrap";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {SystemService} from "../../../../shared/services/system/system.service";
import {ModalService} from "../../../../shared/components/modal/modal.service";
import {equalValidator} from "../../../../validator/validators";

@Component({
  selector: 'app-add-member-modal',
  templateUrl: './add-member-modal.component.html',
  styleUrls: ['./add-member-modal.component.scss']
})
export class AddMemberModalComponent implements OnInit {

    myModalRef:NgbModalRef;
    closeResult: string;
    options:NgbModalOptions={size:'lg'};

    @Input()
    header:string

    @Input()
    btnText:string


    formModel:FormGroup


    @Output()
    onSubmitData:EventEmitter<SubmitData>=new EventEmitter();


    @Input()
    userId:number;




// @Input()
// transformPageData:any
//model;

    schools;





    constructor(
        private modalService:NgbModal,
        private systemService:SystemService,
        private modalService2:ModalService,
        private fb:FormBuilder
    ) {

        this.formModel=fb.group({
            user_email:['',[Validators.required,Validators.minLength(6)]],
            secret:fb.group(
                {
                    app_secret:['',Validators.minLength(6)],
                    c_app_secret:['']
                },
                {
                    validator:equalValidator//这么用
                }
            ),
            school_id:['',[Validators.required]],
            scope:[32,[Validators.required]],
            isOpen:[1],
        })

    }

    ngOnInit() {
        this.systemService.getAllSchoolMessage(data=>this.schools=data,err=>{})
    }

    open(content) {
        this.myModalRef=this.modalService.open(content,this.options);
        this.myModalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
        if(this.userId){
            // alert(111)
            this.systemService.getOneMember(this.userId, data=>{




                this.formModel=this.fb.group({
                    user_email:[data.email,[Validators.required,Validators.minLength(6)]],
                    secret:this.fb.group(
                        {
                            app_secret:[data.password,Validators.minLength(6)],
                            c_app_secret:[data.password]
                        },
                        {
                            validator:equalValidator//这么用
                        }
                    ),
                    school_id:[data.school,[Validators.required]],
                    scope:[data.scope,[Validators.required]],
                    isOpen:[data.is_open],
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

        if(this.formModel.valid){
            let submitData:SubmitData=new SubmitData(this.formModel,this.myModalRef)
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
