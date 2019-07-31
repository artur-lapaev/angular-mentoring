import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'am-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchValue(value) {
    return console.log(value);
  }
}
