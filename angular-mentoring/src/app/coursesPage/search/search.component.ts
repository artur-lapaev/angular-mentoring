import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'am-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchValueStr = new Subject<string>();
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
    sub = this.searchValueStr.pipe(
      map(x => x.length <= 2 ? '' : x),
      distinctUntilChanged((p, c) => {
        if (c.length === 0) {
          this.valueSearch.emit('');
          return true;
        }
        if (c.length <= 2) {
          return true;
        }
        return false;
      }),
      debounceTime(1000)
    ).subscribe(str => {
      // if (str.length > 2) {
        return this.valueSearch.emit(str);
      // }
    });
  }

  ngOnDestroy() {
    sub.unsubscribe();
  }


  searchValue(value: string) {
    if (value.length > 0) { this.searchValueStr.next(value); }
  }

  // TODO Move filtering logic here
  // Cases:
  // 1. Empty
  // 2. Less than 3 Symbol
  // 3. More than 3 Symbols
  // Use https://www.learnrxjs.io/operators/filtering/distinctuntilchanged.html

  // 1. Complete RX Search - MAIN - is done!!!
  // 2. Complete server search - optional is done!!!
  // 3. UPDATE and DELETE (http) - optional


}
