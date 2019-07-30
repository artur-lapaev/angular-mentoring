// tslint:disable-next-line: no-trailing-whitespace
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { CourseItemComponent } from './course-item.component';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'am-course-item',
  templateUrl: './course-item.component.html',
})

class TestHostComponent {
  courseItem = {
    id: '',
    caption: '',
    time: '',
    date: '',
    content: ''
  };
}

describe('CourseItemComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseItemComponent, TestHostComponent]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should be create @input object', () => {
    const captionCourseItem = testHostFixture.nativeElement.querySelector('.header__caption').innerText;
    console.log(captionCourseItem);
    expect(captionCourseItem).toBe(testHostComponent.courseItem.caption);
  });

});
