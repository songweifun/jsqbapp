import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.scss']
})
export class LogListComponent implements OnInit {

    @Input() title:string='';

    @Input() logs:Array<any>

  constructor() { }

  ngOnInit() {
  }

}
