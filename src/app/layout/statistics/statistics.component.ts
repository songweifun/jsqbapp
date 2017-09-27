import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class Options{
    constructor(
        single: any[]=[],
        multi: any[]=[],
        view: any[]=[],
        showXAxis :boolean,
        showYAxis :boolean,
        gradient :boolean,
        showLegend:boolean,
        showXAxisLabel:boolean,
        xAxisLabel:string,
        showYAxisLabel:boolean,
        yAxisLabel:string,
        colorScheme :Object,
        showLabels : boolean,
        explodeSlices :boolean,
        doughnut : boolean
    ){

    }
}
