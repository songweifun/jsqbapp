import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {
    NgbModal, NgbModalRef, ModalDismissReasons, NgbModalOptions,
    NgbDatepickerI18n
} from "@ng-bootstrap/ng-bootstrap";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {SystemService} from "../../../../shared/services/system/system.service";
import {ModalService} from "../../../../shared/components/modal/modal.service";
import {DatepickerI18nType, DatepickerI18n} from "../../../../shared/components/datepickerI18n/datepickerI18n";
import {ipRange, ipValidator} from "../../../../validator/validators";

@Component({
  selector: 'app-add-ip-modal',
  templateUrl: './add-ip-modal.component.html',
  styleUrls: ['./add-ip-modal.component.scss'],
    providers: [DatepickerI18nType, {provide: NgbDatepickerI18n, useClass: DatepickerI18n}]
})



export class AddIpModalComponent implements OnInit {
    myModalRef:NgbModalRef;
    closeResult: string;
    options:NgbModalOptions={size:'lg'};

    @Input()
    header:string

    @Input()
     btnText:string

    //@Input()
    formModel:FormGroup
    //     =new FormGroup({
    //     ipRange:new FormGroup({
    //         start:new FormControl(),
    //         end:new FormControl()
    //     }),
    //
    //     mapName:new FormControl(),
    //     isOpen:new FormControl(1),
    //     time:new FormControl(),
    //     daylimit:new FormControl(100),
    //     monthlimit:new FormControl(1000)
    // })


    @Output()
    onSubmitData:EventEmitter<SubmitData>=new EventEmitter();


    @Input()
    ipMapId:number;

    @Input()
    isWhite:boolean=false;

    @Input()
    isBlack:boolean=false;


    // @Input()
    // transformPageData:any
    //model;





  constructor(
      private modalService:NgbModal,
      private systemService:SystemService,
      private fb:FormBuilder
  ) {
      this.formModel=fb.group({
          mapName:['',[Validators.required]],
          ipRange:fb.group(
              {
                  start:['',ipValidator],
                  end:['',ipValidator]
              },
              {
                  validator:ipRange//这么用
              }
          ),
          time:['',[Validators.required]],
          isOpen:[1],
          daylimit:[100,[Validators.required]],
          monthlimit:[1000,[Validators.required]]
      })
  }

  ngOnInit() {


  }

    open(content) {
        this.myModalRef=this.modalService.open(content,this.options);
        this.myModalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
        if(this.ipMapId){
            this.systemService.getOneIpMap(this.ipMapId).subscribe(
                data=>{

                    console.log(content)
                    let date=new Date(data.expire*1000)

                    let year=date.getFullYear();
                    let month=date.getMonth()+1;
                    let month2 =(month<10 ? "0"+month:month);
                    let day=date.getDate();

                    console.log(date.getMonth())

                    // this.formModel.value.mapName=new FormControl(data.map_name);
                    // this.formModel.value.isOpen=data.is_open;
                    // this.formModel.value.ipRange.start=data.ip_start;
                    // this.formModel.value.ipRange.end=data.ip_end;


                    // this.formModel=new FormGroup({
                    //     ipRange:new FormGroup({
                    //         start:new FormControl(data.ip_start),
                    //         end:new FormControl(data.ip_end)
                    //     }),
                    //
                    //     mapName:new FormControl(data.map_name),
                    //     isOpen:new FormControl(data.is_open),
                    //     time:new FormControl({year:year,month:month,day:day}),
                    //     daylimit:new FormControl(data.daylimit),
                    //     monthlimit:new FormControl(data.monthlimit)
                    // })

                    this.formModel=this.fb.group({
                        mapName:[data.map_name,[Validators.required]],
                        ipRange:this.fb.group(
                            {
                                start:[data.ip_start,ipValidator],
                                end:[data.ip_end,ipValidator]
                            },
                            {
                                validator:ipRange//这么用
                            }
                        ),
                        time:[{year:year,month:month,day:day},[Validators.required]],
                        isOpen:[data.is_open],
                        daylimit:[data.daylimit,[Validators.required]],
                        monthlimit:[data.monthlimit,[Validators.required]]
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
        //console.log(this.formModel.value)
        // this.systemService.addIpMap(this.formModel.value).subscribe(
        //     data=>{
        //         if(data.errorCode===0){
        //             const alertCfg = new AlertConfig(AlertType.INFO, 'IP映射', '添加成功');
        //             this.modalService2.alert(alertCfg);
        //             this.myModalRef.close()
        //         }else{
        //             const alertCfg = new AlertConfig(AlertType.ERROR, 'IP映射', '添加失败');
        //             this.modalService2.alert(alertCfg);
        //
        //         }
        //     }
        // )

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
