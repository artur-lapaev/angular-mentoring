import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'am-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnChanges {
  @Input() courses: Course;
  @Output() eventDelete = new EventEmitter<number>();
  course = {};

  constructor() { }

  ngOnChanges() {
    this.course = this.courses;
  }

  removedCourse($event) {
    this.eventDelete.emit($event);
    return console.log($event);
  }
}
