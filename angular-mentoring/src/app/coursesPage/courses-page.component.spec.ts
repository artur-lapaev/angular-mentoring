import { CoursesPageComponent } from './courses-page.component';

describe('CoursesComponent', () => {
  it('coursesData should be object"', () => {
    const comp = new CoursesPageComponent();
    const coursesObj = comp.coursesData;
    comp.ngOnInit();
    expect(comp.coursesData).toEqual(coursesObj, 'should be object');
  });
});
