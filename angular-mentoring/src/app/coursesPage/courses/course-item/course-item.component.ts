import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'am-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {

  @Input() courseItem;

  constructor() { }

  ngOnInit() {
    console.log(this.courseItem);
  }

}
