import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../../../router.animations";
import {SystemService} from "../../../shared/services/system/system.service";
import {Options} from "../statistics.component";

@Component({
  selector: 'app-resource-statistics',
  templateUrl: './resource-statistics.component.html',
  styleUrls: ['./resource-statistics.component.scss'],
    animations: [routerTransition()]
})
export class ResourceStatisticsComponent implements OnInit {
    options_advance_pie:Options

  constructor(
      private systemService:SystemService
  ) { }

  ngOnInit() {
      this.systemService.getResourceStatisticsBySchool().subscribe(
          data=>{
              // data=data.map((val,index,arr)=>{
              //     val.value=parseInt(val.value);
              //     return val;
              // })

              this.options_advance_pie={
                  single: data.map((val,index,arr)=>{
                      val.value=parseInt(val.value);
                      return val;
                  }),
                  view:  [1500, 300],
                  colorScheme : {
                      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA','#FF3333','#CC0099']
                  }

              }
          }
      )
  }

}
