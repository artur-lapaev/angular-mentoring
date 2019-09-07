import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { CoursesServiceService } from './courses-service.service';
import { EditorCourseComponent } from './editor-course/editor-course.component';

@Component({
  selector: 'am-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {
  private editorCourseRef: MatDialogRef<EditorCourseComponent>;

  dataSearch = '';
  date1 = new Date('9 Nov, 2018');
  date2 = new Date('19 Nov, 2018');
  date3 = new Date('30 dec, 2018');
  coursesData = [];
  filterCourseData = [];

  ngOnInit() {
    this.coursesData = this.courses.getList();
    this.filterCourseData = this.coursesData;
  }

  constructor(private courses: CoursesServiceService, private dialogEditor: MatDialog) { }

  removeCourse($event) {
    this.courses.removeItem(+$event).subscribe(data => {
      this.coursesData = data;
    });
  }

  filterSearch(event) {
    // Use pipe here
    if (event === '') {
     return this.coursesData;
    } else {
      this.dataSearch = event;
      this.coursesData = this.filterCourseData.filter((el) => {
        if (el.caption.includes(event)) {
          return el;
        }
      });
    }

  }

  openEditorCourse() {
    this.editorCourseRef = this.dialogEditor.open(EditorCourseComponent, {
      data: '',
      panelClass: 'editor-modalbox'
    });
  }
}
