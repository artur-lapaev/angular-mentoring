import { Component, OnInit, OnChanges } from '@angular/core';
import { CoursesServiceService } from './courses-service.service';

@Component({
  selector: 'am-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnChanges {

  dataSearch = '';
  date1 = new Date('9 Nov, 2018');
  date2 = new Date('19 Nov, 2018');
  date3 = new Date('30 dec, 2018');

  coursesData = this.courses.getList();

  filterCourseData = this.coursesData;

  constructor(private courses: CoursesServiceService) { }

  ngOnChanges() { }

  filterSearch(event) {
    // Use pipe here
    if (event === '') {
      this.filterCourseData = this.coursesData;
    } else {
      let tempArr = [];
      this.dataSearch = event;
      tempArr = this.filterCourseData.filter((el) => {
        if (el.caption.includes(event)) {
          return el;
        }
      });
      return this.filterCourseData = tempArr;
    }

  }

}
