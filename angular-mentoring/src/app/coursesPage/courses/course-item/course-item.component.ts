import { Component, EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'am-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent{

  @Input() courseItem;
  @Output() deleteCourse = new EventEmitter<any>();

  constructor() { }

  removeCourse() {
    this.deleteCourse.emit('course was removed by id:');
  }

}
