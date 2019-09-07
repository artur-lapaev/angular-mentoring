import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorCourseComponent } from './editor-course.component';

describe('EditorCourseComponent', () => {
  let component: EditorCourseComponent;
  let fixture: ComponentFixture<EditorCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
