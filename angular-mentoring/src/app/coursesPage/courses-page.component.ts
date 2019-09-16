import { Component, OnInit, OnChanges } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { CoursesServiceService } from './courses-service.service';
import { EditorCourseComponent } from './editor-course/editor-course.component';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadCrumbsService } from '../breadcrumbs/bread-crumbs.service';


@Component({
  selector: 'am-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {
  private url: string;
  private editorCourseRef: MatDialogRef<EditorCourseComponent>;

  dataSearch = '';
  date1 = new Date('9 Nov, 2018');
  date2 = new Date('19 Nov, 2018');
  date3 = new Date('30 dec, 2018');
  coursesData = [];
  filterCourseData = [];

  constructor(
    private courses: CoursesServiceService,
    private dialogEditor: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private breadLink: BreadCrumbsService) { }

  ngOnInit() {
    this.coursesData = this.courses.getList();
    this.filterCourseData = this.coursesData;
    this.route.params.subscribe((data) => {
      const url = data.id;
      if (url === 'new') {
          this.editorCourseRef = this.dialogEditor.open(EditorCourseComponent, {
            data: '',
            panelClass: 'editor-modalbox'
          });
          this.editorCourseRef.afterClosed().subscribe(result => {
            this.breadLink.removeLink();
            this.router.navigate(['../'], { relativeTo: this.route });
          });
      } else if (+url) {
          const course = this.courses.getItemById(+url);
          this.editorCourseRef = this.dialogEditor.open(EditorCourseComponent, {
            data: course,
            panelClass: 'editor-modalbox'
          });
          this.editorCourseRef.afterClosed().subscribe(result => {
            this.breadLink.removeLink();
            this.router.navigate(['../'], { relativeTo: this.route });
          });
        }
    });

  }

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
}
