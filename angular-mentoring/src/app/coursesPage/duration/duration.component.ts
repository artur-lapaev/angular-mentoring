import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'am-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css']
})
export class DurationComponent implements OnInit {
 @Input() duration: number;
  constructor() { }

  ngOnInit() {
  }

}
