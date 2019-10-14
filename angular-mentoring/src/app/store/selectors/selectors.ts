import { createSelector } from '@ngrx/store';
import { AmStore } from '../am-store';
import { AuthToken } from '../auth-token';
import { Course } from 'src/app/coursesPage/course';

const selectToken = (state: AmStore) => state.login;

export const selectLoginToken = createSelector(
  selectToken,
  (state: AuthToken) => state.token
);

const getListCourse = (state: AmStore) => state.courses;

export const selectListCourses = createSelector(
  getListCourse,
  (state: Course) => state
);
