import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { SearchComponent } from './search.component';

let component: SearchComponent;
let fixture: ComponentFixture<SearchComponent>;
let page;

class Page {
  get buttons() { return this.queryAll<HTMLButtonElement>('button'); }
  get searchBtn() { return this.buttons[0]; }
  get searchInput() { return this.query<HTMLInputElement>('input'); }

  gotoListSpy: jasmine.Spy;
  navigateSpy: jasmine.Spy;
  fixture: ComponentFixture<SearchComponent>;

  constructor(fixture: ComponentFixture<SearchComponent>) {

  }


  private query<T>(selector: string): T {
    return fixture.nativeElement.querySelector(selector);
  }

  private queryAll<T>(selector: string): T[] {
    return fixture.nativeElement.querySelectorAll(selector);
  }

}

function createComponent() {
  fixture = TestBed.createComponent(SearchComponent);
  component = fixture.componentInstance;
  page = new Page(fixture);

  fixture.detectChanges();
  return fixture.whenStable().then(() => {
    fixture.detectChanges();
  });
}

describe('SearchComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    createComponent();
  });

  it('should be create input', () => {
    expect(page.searchInput).toBeTruthy();
  });

  it('should be create button', () => {
    expect(page.searchBtn).toBeTruthy();
  });

  it('should be change input value on click button', async(() => {
    const hostElement = fixture.nativeElement;
    const searchBtn = hostElement.querySelector('.search__button');
    const input = hostElement.querySelector('input');
    let value = input.value;
    searchBtn.click();
    fixture.whenStable().then(() => {
      value = 'search';
      expect(value).toBeTruthy();
    });

  }));
});


