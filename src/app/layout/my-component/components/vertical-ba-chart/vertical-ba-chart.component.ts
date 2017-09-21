import { Component, OnInit } from '@angular/core';
import {single, multi} from '../../../../../data/data';

@Component({
  selector: 'app-vertical-ba-chart',
  templateUrl: './vertical-ba-chart.component.html',
  styleUrls: ['./vertical-ba-chart.component.scss']
})
export class VerticalBaChartComponent implements OnInit {

    single: any[];
    multi: any[];

    view: any[] = [700, 400];

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = '成员馆';
    showYAxisLabel = true;
    yAxisLabel = '抢单量';

    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

    constructor() {
        Object.assign(this, {single, multi})
    }

    onSelect(event) {
        console.log(event);
    }

  ngOnInit() {
  }

}
