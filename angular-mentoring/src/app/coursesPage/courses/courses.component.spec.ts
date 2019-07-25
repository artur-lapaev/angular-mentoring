import { CoursesComponent } from './courses.component';

describe('CoursesComponent', () => {
  it('#input() courses should be object"', () => {
    const comp = new CoursesComponent();
    const courses: Object = undefined;
    comp.ngOnChanges();
    expect(comp.course).toBe(courses,"is not object");
  });
});
