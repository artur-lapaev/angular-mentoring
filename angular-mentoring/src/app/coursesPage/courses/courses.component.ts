import { Component, EventEmitter, OnInit, OnChanges, Input, Output } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  @Input() courses: Array<Object>;
  @Output() deleteCourse = new EventEmitter<any>();
  constructor() { }

  ngOnInit() { }

  ngOnChanges(){ }

  removeCourse(id) {
    this.deleteCourse.emit("course was removed by id: " + id);
  }
}
