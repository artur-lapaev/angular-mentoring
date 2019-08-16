import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';


@Component({
  selector: 'am-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {


  constructor() { }
  @Input() courseItem;
  @Output() deleteCourse = new EventEmitter<any>();

  ratingStar = '';
  isTopRated = false;

  ngOnInit(): void {
    if (this.isTopRated) {
      this.ratingStar = 'start';
    }
  }

  removeCourse() {
    this.deleteCourse.emit('course was removed by id:');
  }


}
