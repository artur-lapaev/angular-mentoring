import { Component, EventEmitter, OnInit, OnChanges, Input, Output } from '@angular/core';

@Component({
  selector: 'am-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnChanges {
  @Input() courses: Object;
  @Output() deleteCourse = new EventEmitter<any>();

  course = {};

  constructor() { }

  ngOnChanges() {
    this.course = this.courses;
    console.log("on changes");
  }

  removeCourse() {
    this.deleteCourse.emit("course was removed by id: ");
  }
}
