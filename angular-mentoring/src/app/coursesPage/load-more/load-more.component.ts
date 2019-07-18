import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.css']
})
export class LoadMoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loadMoreCourses() {
    return console.log("courses is loading")
  }

}
