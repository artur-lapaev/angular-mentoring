import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { CoursesServiceService } from './courses-service.service';
import { EditorCourseComponent } from './editor-course/editor-course.component';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadCrumbsService } from '../breadcrumbs/bread-crumbs.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'am-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {
  private editorCourseRef: MatDialogRef<EditorCourseComponent>;
  apiUrl = environment.apiUrl;
  dataSearch = '';
  date1 = new Date('9 Nov, 2018');
  date2 = new Date('19 Nov, 2018');
  date3 = new Date('30 dec, 2018');
  coursesData: any = [];

  constructor(
    private courses: CoursesServiceService,
    private dialogEditor: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private breadLink: BreadCrumbsService,
    private http: HttpClient) { }

  ngOnInit() {
    this.courses.getList().subscribe(data => {
      this.coursesData = data;
    });
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
      } else if (url) {
        let course;
        this.courses.getItemById(url).subscribe(courses => {
          course = courses;
          this.editorCourseRef = this.dialogEditor.open(EditorCourseComponent, {
            data: course,
            panelClass: 'editor-modalbox'
          });
          this.editorCourseRef.afterClosed().subscribe(result => {
            this.breadLink.removeLink();
            this.router.navigate(['../'], { relativeTo: this.route });
          });
        });
      }
    });

  }

  removeCourse($event) {
   this.courses.removeItem(+$event).subscribe( data => {
    this.courses.getList().subscribe( refreshData => {
      this.coursesData = refreshData;
    });
   });
  }

  filterSearch(queryStr) {
    this.http.get(this.apiUrl + `/courses?textFragment=${queryStr}`).subscribe(data => {
      this.coursesData = data;
    });
  }
}
