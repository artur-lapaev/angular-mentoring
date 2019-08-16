import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'am-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() valueSearch = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  searchValue(value) {
    return this.valueSearch.emit(value);
  }
}
