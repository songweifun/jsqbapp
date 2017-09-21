import { Component, OnInit } from '@angular/core';
import {single, multi} from '../../../../../data/data';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

    single: any[];
    multi: any[];

    view: any[] = [700, 400];

    // options
    showLegend = true;

    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA','#FF3333','#CC0099']
    };

    // pie
    showLabels = true;
    explodeSlices = false;
    doughnut = false;

    constructor() {
        Object.assign(this, {single, multi})
    }

    onSelect(event) {
        console.log(event);
    }

  ngOnInit() {
  }

}
