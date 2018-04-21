import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../../router.animations";
import {Options} from "../statistics.component";
import {SystemService} from "../../../shared/services/system/system.service";

@Component({
  selector: 'app-request-statistics',
  templateUrl: './request-statistics.component.html',
  styleUrls: ['./request-statistics.component.scss'],
    animations: [routerTransition()]
})
export class RequestStatisticsComponent implements OnInit {

    optionsRequestIpTop10:Options;
    optionsRequestMapTop10:Options;

  constructor(
      private systemService:SystemService
  ) { }

  ngOnInit() {
      this.systemService.getRequstStatisticsByIpTop10( data=>{
          this.optionsRequestIpTop10={
              single: data,
              multi: [],
              view:  [700, 400],
              // options
              showXAxis :true,
              showYAxis : true,
              gradient :false,
              showLegend : false,
              showXAxisLabel : true,
              xAxisLabel : 'IP地址',
              showYAxisLabel : true,
              yAxisLabel : '请求量',
              colorScheme : {
                  domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA','#FF3333','#CC0099']
              }
          }
      },err=>{});
      this.systemService.getRequestStatisticsByMapNameTop10(data=>{
          this.optionsRequestMapTop10={
              single: data,
              multi: [],
              view:  [700, 400],
              // options
              showXAxis :true,
              showYAxis : true,
              gradient :true,
              showLegend : true,
              showXAxisLabel : true,
              xAxisLabel : '机构名称',
              showYAxisLabel : true,
              yAxisLabel : '请求量',
              colorScheme : {
                  domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA','#FF3333','#CC0099']
              }
          }
      },err=>{})
  }


    randomize(){
        this.ngOnInit()
    }




}
