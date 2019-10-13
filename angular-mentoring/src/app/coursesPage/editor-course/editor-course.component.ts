import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CoursesServiceService } from '../courses-service.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'am-editor-course',
  templateUrl: './editor-course.component.html',
  styleUrls: ['./editor-course.component.css']
})
export class EditorCourseComponent implements OnInit {
  courseDate: string;
  courseDuration: number;
  newDurationCourse: number;
  newDateCourse: string;
  apiUrl = environment.apiUrl;
  editorForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private course: CoursesServiceService,
    private http: HttpClient,
    private dialogRef: MatDialogRef<EditorCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private route: ActivatedRoute) {
    this.courseDate = data.date;
    this.courseDuration = data.length;
  }

  ngOnInit() {
    this.editorForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  get title() {
    return this.editorForm.get('title');
  }

  get description() {
    return this.editorForm.get('description');
  }

  save(nameCourse, descCourse) {
    //const dataCourse = this.data;
    const duration = +this.newDurationCourse || this.courseDuration;
    const date = this.courseDate ? this.courseDate : this.transformDate(this.newDateCourse);

    const dataCourse = this.editorForm.getRawValue();

    const course = this.prepareCourse(dataCourse.id, dataCourse.authors, nameCourse, descCourse, date, duration);

    const action = Object.keys(dataCourse).length !== 0 ? this.course.updateItem(course) : this.course.createCourse(course);

    action.subscribe(data => { });

    this.dialogRef.close(true);
  }

  close() {
    this.dialogRef.close(true);
  }

  setDurationCourse($event) {
    this.newDurationCourse = $event;
  }

  setDateCourse($event) {
    this.newDateCourse = $event;
  }

  transformDate(date) {
    const d = new Date();
    const splitDate = date.split('/');
    d.setDate(splitDate[0]);
    d.setMonth(splitDate[1][1] - 1);
    d.setFullYear(splitDate[2]);
    return d.toISOString();
  }
  prepareCourse(courseId, authorsCourse, nameCourse, descCourse, courseDate, courseDuration) {
    return {
      id: courseId,
      authors: authorsCourse || [],
      name: nameCourse,
      description: descCourse,
      isTopRated: false,
      date: courseDate,
      length: courseDuration
    };

  }
}
