import { Action, createReducer, on } from '@ngrx/store';
import { Course } from 'src/app/coursesPage/course';
import { CoursesAction } from '../actions/course.action';

export const courseListInit: Course = {
  coursesList: []
};

const reducer = createReducer(
  courseListInit,
  on(CoursesAction, (state, { getCourses }) => ({ ...state, coursesList: getCourses }))
);

export function coursesReducer(state: Course, action: Action) {
  return reducer(state, action);
}
