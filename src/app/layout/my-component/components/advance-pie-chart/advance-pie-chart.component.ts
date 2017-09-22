import { Component, OnInit } from '@angular/core';
import {single, multi} from '../../../../../data/data';


@Component({
  selector: 'app-advance-pie-chart',
  templateUrl: './advance-pie-chart.component.html',
  styleUrls: ['./advance-pie-chart.component.scss']
})
export class AdvancePieChartComponent implements OnInit {

    single: any[];
    multi: any[];

    view: any[] = [1500, 400];

    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA','#FF3333','#CC0099']

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