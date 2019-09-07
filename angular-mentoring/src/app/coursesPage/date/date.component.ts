import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'am-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})

export class DateComponent implements OnInit {

  @Input() date: string;
  constructor() { }

  ngOnInit() {
  }

}
