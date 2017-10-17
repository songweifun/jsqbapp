import { Component, OnInit } from '@angular/core';
import {SystemService} from "../../../shared/services/system/system.service";
import {Options} from "../statistics.component";
import {routerTransition} from "../../../router.animations";

@Component({
  selector: 'app-library-statistics',
  templateUrl: './library-statistics.component.html',
  styleUrls: ['./library-statistics.component.scss'],
    animations: [routerTransition()]
})
export class LibraryStatisticsComponent implements OnInit {

    options:Options;
    options_pie:Options;
    options_advance_pie:Options;

  constructor(
      private systemService:SystemService,
  ) {


  }

  ngOnInit() {

      this.systemService.getOrderStatisticsBySchool().subscribe(
          data=>{
              this.options={
                  single: data,
                  multi: [],
                  view:  [700, 400],
                  // options
                  showXAxis :true,
                  showYAxis : true,
                  gradient :false,
                  showLegend : true,
                  showXAxisLabel : true,
                  xAxisLabel : '成员馆',
                  showYAxisLabel : true,
                  yAxisLabel : '抢单量',
                  colorScheme : {
                      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA','#FF3333','#CC0099']
                  }
              }
          }
      )





      this.systemService.getResourceStatisticsBySchool().subscribe(
          data=>{
              // data=data.map((val,index,arr)=>{
              //     val.value=parseInt(val.value);
              //     return val;
              // })
              this.options_pie={
                  single: data,
                  multi: [],
                  view:  [700, 400],
                  // options
                  colorScheme : {
                      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA','#FF3333','#CC0099']
                  },
                  showLabels : true,
                  explodeSlices : false,
                  doughnut : false

              };
              this.options_advance_pie={
                  single: data.map((val,index,arr)=>{
                      val.value=parseInt(val.value);
                      return val;
                  }),
                  view:  [800, 300],
                  colorScheme : {
                      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA','#FF3333','#CC0099']
                  }

              }
          }
      )
  }


    randomize(){
        this.ngOnInit()
    }





}
