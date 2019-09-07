import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesServiceService {
  private subject = new BehaviorSubject<string>('return');

  date1 = new Date('9 Nov, 2018');
  date2 = new Date('19 Nov, 2018');
  date3 = new Date('30 dec, 2018');

  coursesList = [
    {
      id: 1,
      duration: 88,
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
      duration: 68,
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
      duration: 50,
      date: this.date3,
      caption: 'Video Course 3. Name tag',
      content: `Learn about where you can find course descriptions, what information they
      include, how they work, and details about various components of a course description. Course descriptions
      report information about a university or college's classes. They're published both in course catalogs that
      outline degree requirements and in course schedules that contain descriptions for all courses offered during
      a particular semester.`
    },
  ];
  deleteCourseList = this.coursesList;
  constructor() { }

  getList() {
    return this.coursesList;
  }

  createCourse(): Observable<string> {
    return this.subject;
  }
  getItemById(): Observable<string> {
    return this.subject;
  }
  updateItem() {
  }

  removeItem(id): Observable<Array<object>> {
    const listCourses = new BehaviorSubject<Array<object>>([]);
    this.deleteCourseList = this.deleteCourseList.filter((el, i) => {
      if (el.id !== id) { return el; }
    });

    listCourses.next(this.deleteCourseList);

    return listCourses;
  }
}
