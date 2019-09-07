import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'am-editor-course',
  templateUrl: './editor-course.component.html',
  styleUrls: ['./editor-course.component.css']
})
export class EditorCourseComponent {
  courseDate: string;
  courseDuration: number;
  constructor(private dialogRef: MatDialogRef<EditorCourseComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.courseDate = data.date;
    this.courseDuration = data.duration;
  }

  save() {
    console.log('save');
  }

  close() {
    this.dialogRef.close(true);
  }
}
