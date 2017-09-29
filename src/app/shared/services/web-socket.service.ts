import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class WebSocketService {

  ws:WebSocket

  constructor() { }

  createObservableSocket(url:string,token:string):Observable<any>{
    this.ws=new WebSocket(url);//连接到websocket服务器
    return new Observable<string>(
      observer=>{
        //什么时候发射下一个元素
        //什么时候抛出一个异常
        //什么时候发出流接收信号
        this.ws.onmessage=(event)=>observer.next(event.data);
        this.ws.onerror=(event)=>observer.error(event);
        this.ws.onclose=(event)=>observer.complete();
        this.ws.onopen=(event)=>this.sendMessage({token:token}) //传参用
        return ()=>this.ws.close();//这个毁掉函数会在流被取消订阅是调用 调用这个函数后如果没有客户端服务器端停止推送
      }
    )
    //.map(message=>{JSON.parse(message)})
  }

  sendMessage(message:any){
    this.ws.send(JSON.stringify(message));//send方法发送字符串
  }

}
