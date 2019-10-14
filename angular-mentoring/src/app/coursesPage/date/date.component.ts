import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'am-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})

export class DateComponent {
  @Input() date: string;
  @Output() dateCourse = new EventEmitter<string>();
  constructor() { }

  returnDateCourse(date) {
    this.dateCourse.emit(date);
  }
}
