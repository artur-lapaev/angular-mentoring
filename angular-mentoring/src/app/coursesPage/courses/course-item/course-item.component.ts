import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'am-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {

  @Input() courseItem;
  @Output() deleteCourse = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    console.log(this.courseItem);
  }

  removeCourse() {
    this.deleteCourse.emit("course was removed by id: ");
  }

}
