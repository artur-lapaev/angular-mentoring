import { Action, createReducer, on } from '@ngrx/store';
import { Course } from 'src/app/coursesPage/course';
import { CoursesAction } from '../actions/course.action';

// export const courseListInit: Course = {
//   id: 0,
//   name: '',
//   description: '',
//   isTopRated: false,
//   date: '',
//   length: 0,
// };

export const courseListInit: Course = {
  list: []
};

const reducer = createReducer(
  courseListInit,
  on(CoursesAction, (state, { getCourses }) => ({ ...state, list: getCourses }))
);

export function coursesReducer(state: Course, action: Action) {
  return reducer(state, action);
}
