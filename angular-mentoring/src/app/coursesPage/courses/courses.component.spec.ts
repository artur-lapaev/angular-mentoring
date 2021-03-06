import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesComponent } from './courses.component';
import { CourseItemComponent } from './course-item/course-item.component';

describe('coursesComponent testing input', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesComponent, CourseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be object course', () => {
    const course = component.course;
    component.ngOnChanges();
    expect(course).toBeTruthy();
  });
});
