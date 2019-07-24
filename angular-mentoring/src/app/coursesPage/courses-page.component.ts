import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'am-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {
  coursesData = [
    {
      time: "1h 28 min",
      date: "9 Nov, 2018",
      caption: "Video Course 1. Name tag",
      content: `Learn about where you can find course descriptions, what information they
      include, how they work, and details about various components of a course description. Course descriptions
      report information about a university or college's classes. They're published both in course catalogs that
      outline degree requirements and in course schedules that contain descriptions for all courses offered during
      a particular semester.`
    },
    {
      time: "4h 28 min",
      date: "19 Nov, 2018",
      caption: "Video Course 1. Name tag",
      content: `Learn about where you can find course descriptions, what information they
      include, how they work, and details about various components of a course description. Course descriptions
      report information about a university or college's classes. They're published both in course catalogs that
      outline degree requirements and in course schedules that contain descriptions for all courses offered during
      a particular semester.`
    },
    {
      time: "9h 10 min",
      date: "30 dec, 2018",
      caption: "Video Course 1. Name tag",
      content: `Learn about where you can find course descriptions, what information they
      include, how they work, and details about various components of a course description. Course descriptions
      report information about a university or college's classes. They're published both in course catalogs that
      outline degree requirements and in course schedules that contain descriptions for all courses offered during
      a particular semester.`
    },
  ]
  

  constructor() { }

  ngOnInit() { }
  
  removedCourse($event) {
    console.log($event);
  }
}
