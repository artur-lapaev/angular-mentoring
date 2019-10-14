import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'am-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css']
})
export class DurationComponent {
 @Input() duration: number;
 @Output() durationCourse = new EventEmitter<number>();
  constructor() { }

  returnDurationCourse(duration) {
    return this.durationCourse.emit(duration);
  }

}
