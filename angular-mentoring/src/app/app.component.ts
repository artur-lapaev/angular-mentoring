import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'am-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'angular-mentoring';

  constructor() {}

  ngOnInit() { }

}
