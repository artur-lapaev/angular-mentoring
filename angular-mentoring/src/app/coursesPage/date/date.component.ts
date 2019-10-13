import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'am-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateComponent),
      multi: true
    }
  ]
})
export class DateComponent extends ControlValueAccessor {
  @Input() date: string;
  @Output() dateCourse = new EventEmitter<string>();

  dateForm = new FormControl('', [Validators.required, Validators.pattern('[0-9][0-9]/[0-9][0-9]/[0-9][0-9][0-9][0-9]')]);

  constructor() { }

  returnDateCourse(date) {
    this.dateCourse.emit(date);
  }
}
