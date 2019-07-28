  // tslint:disable-next-line: no-trailing-whitespace
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { CourseItemComponent } from './course-item.component';
import { By } from '@angular/platform-browser';

@Component({
  template: `
  <am-course-item
  [courseItem]="courses[i]"
  *ngFor="let course of courses; let i = index"
  (deleteCourse)="removedCourse($event)">
  </am-course-item>`
})

class TestHostComponent {

}

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;
  let debElem: DebugElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent, TestHostComponent ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(CourseItemComponent);
      component = fixture.componentInstance;
      component.courseItem = {
        id: '',
        caption: '',
        time: '',
        date: '',
        content: ''
      };
      debElem = fixture.debugElement.query(By.css('.edit-tools__delete-button'));
      fixture.detectChanges();
    });
  }));

  it('should be call method click with text message', () => {
    let str = '';
    component.deleteCourse.subscribe(value => str = value);
    debElem.triggerEventHandler('click', null);
    expect(str).toBeTruthy();
  });

});
