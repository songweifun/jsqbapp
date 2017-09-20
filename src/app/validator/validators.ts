import {AbstractControl, FormGroup, FormControl} from "@angular/forms";
import {Observable} from "rxjs";
/**
 * Created by daivd on 2017/9/2.
 */

export function mobileValidator(control:AbstractControl):any{
  var myreg=/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/
  let valid=myreg.test(control.value);
  console.log('mobile的校验结果'+valid);
  return valid?null:{'mobile':true}
}

export function mobileAsyncValidator(control:AbstractControl):any{
  var myreg=/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/
  let valid=myreg.test(control.value);
  console.log('mobile的校验结果'+valid);
  return Observable.of(valid?null:{'mobile':true}).delay(5000);
}


export function equalValidator(group:FormGroup):any{
  let password:FormControl=group.get('app_secret') as FormControl;
  let pconfirm:FormControl=group.get('c_app_secret') as FormControl;
  let valid:boolean=false;
  if(password && pconfirm){
    valid=(password.value===pconfirm.value)
  }
    console.log('密码验证结果是'+valid);
    return valid?null:{equal:{description:'密码和确认密码不一致'}};

}

export function ipValidator(control:AbstractControl):any{
    var myreg=/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
    let valid=myreg.test(control.value);
    console.log('ip的校验结果'+valid);
    return valid?null:{'ip':true}
}
export function ip2int(ip){
    var num = 0;
    ip = ip.split(".");
    num = Number(ip[0]) * 256 * 256 * 256 + Number(ip[1]) * 256 * 256 + Number(ip[2]) * 256 + Number(ip[3]);
    num = num >>> 0;
    return num;
}

//整型解析为IP地址
export function int2iP(num){
    var str;
    var tt = new Array();
    tt[0] = (num >>> 24) >>> 0;
    tt[1] = ((num << 8) >>> 24) >>> 0;
    tt[2] = (num << 16) >>> 24;
    tt[3] = (num << 24) >>> 24;
    str = String(tt[0]) + "." + String(tt[1]) + "." + String(tt[2]) + "." + String(tt[3]);
    return str;
}

export function ipRange(group:FormGroup):any{

    let ip_start:FormControl=group.get('start') as FormControl;
    let ip_end:FormControl=group.get('end') as FormControl;
    let valid:boolean=false;
    if(ip_start && ip_end){
        valid=(ip2int(ip_start.value)<=ip2int(ip_end.value))
    }
    console.log('Ip范围验证结果是'+valid);
    return valid?null:{compare:{description:'IP范围应该符合从小到大的原则'}};

}


