import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'am-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnChanges {
  // New date() for date property.
  // property time -> number;
  dataSearch = '';
  date1 = new Date('9 Nov, 2018');
  date2 = new Date('19 Nov, 2018');
  date3 = new Date('30 dec, 2018');

  coursesData = [
    {
      id: 1,
      duration: 328,
      date: this.date1,
      caption: 'Video Course 1. Name tag',
      content: `Learn about where you can find course descriptions, what information they
      include, how they work, and details about various components of a course description. Course descriptions
      report information about a university or college's classes. They're published both in course catalogs that
      outline degree requirements and in course schedules that contain descriptions for all courses offered during
      a particular semester.`
    },
    {
      id: 2,
      duration: 268,
      date: this.date2,
      caption: 'Video Course 2. Name tag',
      content: `Learn about where you can find course descriptions, what information they
      include, how they work, and details about various components of a course description. Course descriptions
      report information about a university or college's classes. They're published both in course catalogs that
      outline degree requirements and in course schedules that contain descriptions for all courses offered during
      a particular semester.`
    },
    {
      id: 3,
      duration: 550,
      date: this.date3,
      caption: 'Video Course 3. Name tag',
      content: `Learn about where you can find course descriptions, what information they
      include, how they work, and details about various components of a course description. Course descriptions
      report information about a university or college's classes. They're published both in course catalogs that
      outline degree requirements and in course schedules that contain descriptions for all courses offered during
      a particular semester.`
    },
  ];

  filterCourseData = this.coursesData;

  constructor() { }

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
