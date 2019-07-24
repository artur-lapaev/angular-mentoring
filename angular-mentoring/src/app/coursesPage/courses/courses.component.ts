import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'am-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnChanges {
  @Input() courses: Object;
  

  course = {};

  constructor() { }

  ngOnChanges() {
    this.course = this.courses;
    console.log("on changes");
  }

  removedCourse($event) {
    console.log($event);
  }
}
