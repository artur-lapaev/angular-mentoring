import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'am-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css']
})
export class DurationComponent {
  @Input() duration: number;
  @Output() durationCourse = new EventEmitter<number>();
  constructor() { }

  durationForm = new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]);

  returnDurationCourse(duration) {
    return this.durationCourse.emit(duration);
  }

}
