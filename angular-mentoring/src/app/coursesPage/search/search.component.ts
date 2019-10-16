import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'am-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchValueStr = new Subject<string>();
  valueSbscr = Subscription;
  @Output() valueSearch = new EventEmitter<any>();
  searchForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchInput: ['', [Validators.required, Validators.minLength(3)]]
    });
    this.searchInput.valueChanges.pipe(
      map(x => x.length <= 2 ? '' : x),
      debounceTime(1000),
      distinctUntilChanged(),
    ).subscribe(str => {
      return this.valueSearch.emit(str);
    });
  }

  get searchInput() {
    return this.searchForm.get('searchInput');
  }

}
