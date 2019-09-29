import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'am-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchValueStr = new Subject<string>();
  valueSbscr = Subscription;
  @Output() valueSearch = new EventEmitter<any>();
  // sub1: Subscription;
  // sub2: Subscription;
  // sub3: Subscription;

  // 1
  // subscriptions: Subscription[];
  // subscriptions.push()

  // 2
  // destroyed = new Subject

  // onDestroy() { destroyed.next() }
  // this.searchValueStr.pipe(
  //   takeUntil(destroyed))

  constructor() { }

  ngOnInit() {
    this.searchValueStr.pipe(
      map(x => x.length <= 2 ? '' : x),
      debounceTime(1000),
      distinctUntilChanged(),
    ).subscribe(str => {
      return this.valueSearch.emit(str);
    });
  }

  searchValue(value: string) {
    if (value.length > 0) { this.searchValueStr.next(value); }
  }

}
