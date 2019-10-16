import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormControl, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'am-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateComponent),
    multi: true
  },
  {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DateComponent),
    multi: true
  }]
})
export class DateComponent implements ControlValueAccessor, Validators {

  constructor() { }
  @Input() date: string;
  @Output() dateCourse = new EventEmitter<string>();

  value: string;
  //  dateForm = new FormControl('', [Validators.required, Validators.pattern('[0-9][0-9]/[0-9][0-9]/[0-9][0-9][0-9][0-9]')]);
  onChange: (value) => void;
  onTouched: () => void;

  writeValue(value: any): void {
    this.value = value ? value : '';
  }
  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  returnDateCourse(dateValue) {
    this.writeValue(dateValue);
    this.dateCourse.emit(dateValue);
  }
}
