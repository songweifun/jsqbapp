import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModalOptions, NgbModalRef, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { SystemService } from '../../../../shared/services/system/system.service';
import { ModalService } from '../../../../shared/components/modal/modal.service';
import { AlertConfig, AlertType } from 'app/shared/components/modal/modal-model';
import {equalValidator} from "../../../../validator/validators";

@Component({
  selector: 'app-add-library-modal',
  templateUrl: './add-library-modal.component.html',
  styleUrls: ['./add-library-modal.component.scss']
})
export class AddLibraryModalComponent implements OnInit {

  myModalRef:NgbModalRef;
  closeResult: string;
  options:NgbModalOptions={size:'lg'};

  @Input()
  header:string

  @Input()
   btnText:string


   formModel:FormGroup
//        =new FormGroup({
//
//
//     app_id:new FormControl('',[Validators.required]),
//     secret:new FormGroup(
//         {
//             app_secret:new FormControl(),
//             c_app_secret:new FormControl()
//         },
//         {
//             validator:equalValidator//这么用
//         }
//     ),
//     app_description:new FormControl('',[Validators.required,Validators.minLength(10)]),
//     scope:new FormControl(32),
//     isOpen:new FormControl(1),
//
// })

@Output()
onSubmitData:EventEmitter<SubmitData>=new EventEmitter();


@Input()
ipMapId:number;




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
        app_id:['',[Validators.required,Validators.minLength(6)]],
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
    this.systemService.getSchools().subscribe(
        data=>this.schools=data
    )


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
        this.systemService.getOneLibrary(this.ipMapId).subscribe(
            data=>{

                // this.formModel=new FormGroup({
                //     secret:new FormGroup({
                //         app_secret:new FormControl(data.app_secret),
                //         c_app_secret:new FormControl(data.app_secret)
                //     }),
                //
                //     app_id:new FormControl(data.app_id),
                //     isOpen:new FormControl(data.is_open),
                //     scope:new FormControl(data.scope),
                //     app_description:new FormControl(data.app_description)
                //
                // })


                this.formModel=this.fb.group({
                    app_id:[data.app_id,[Validators.required,Validators.minLength(6)]],
                    secret:this.fb.group(
                        {
                            app_secret:[data.app_secret,Validators.minLength(6)],
                            c_app_secret:[data.app_secret]
                        },
                        {
                            validator:equalValidator//这么用
                        }
                    ),
                    school_id:[data.school_id.id,[Validators.required]],
                    scope:[data.scope,[Validators.required]],
                    isOpen:[data.is_open],
                })


            }
        )

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
    // let validate=this.formModel.get('app_id').valid;
    // console.log('app_id的验证结果为'+validate)

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
