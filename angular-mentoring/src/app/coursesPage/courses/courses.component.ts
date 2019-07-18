import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  @Input() courses: Array<Object>;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){

  }

}
