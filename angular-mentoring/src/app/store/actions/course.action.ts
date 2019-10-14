import { createAction, props } from '@ngrx/store';
import { Course } from 'src/app/coursesPage/course';

export const CoursesAction = createAction(
  '[Login Page] getCourses',
  props<{ getCourses: []; }>()
);
