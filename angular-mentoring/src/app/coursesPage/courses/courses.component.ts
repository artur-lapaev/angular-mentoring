import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'am-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnChanges {
  @Input() courses: Course;

  course = {};

  constructor() { }

  ngOnChanges() {
    this.course = this.courses;
  }

  removedCourse($event) {
    return console.log($event);
  }
}
