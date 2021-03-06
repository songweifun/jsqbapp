import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FileUploader, FileItem, ParsedResponseHeaders} from "ng2-file-upload";
import {TokenService} from "../../../../shared/services/token.service";
import { ApiUrlService } from '../../../../shared/services/api-url.service'
//const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
const URL = 'http://101.201.122.94:8089/public/api/v1/upload';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

    @Input()
    orderId:string;

    @Output()
    isUploaded:EventEmitter<boolean>=new EventEmitter();

    url:string;

    public uploader:FileUploader ;
    public hasBaseDropZoneOver:boolean = false;
    public hasAnotherDropZoneOver:boolean = false;



  constructor(
      private tokenService:TokenService,
      private apiUrlService:ApiUrlService
  ) {
      this.url=this.apiUrlService.uploadTextUrl;
  }

  ngOnInit() {
      const that=this;

      this.tokenService.refreshToken()

      this.uploader= new FileUploader({url: this.url,method:'POST',maxFileSize:500000000,itemAlias:'pdf',headers:[{name:'token',value:localStorage.getItem('token')},{'name':'orderId',value:this.orderId}]});
      //定义两个回调
      this.uploader.onBeforeUploadItem=(fileItem: FileItem)=>{
          this.onBeforeUploadItem(fileItem);
      }

      this.uploader.onSuccessItem=(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders)=>{
          this.onSuccessItem(item, response, status, headers);
      }
  }

    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e:any):void {
        this.hasAnotherDropZoneOver = e;
    }
    //要上传文件之前的回调
    onBeforeUploadItem(fileItem: FileItem): any{
      //alert(222)
      this.tokenService.refreshToken()

        return true;
    }
    //上传一个文件成功的回调
    onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any{
        this.isUploaded.emit(true);
        return true;
        //alert(1111)
    }

}
