import { AuthToken } from './auth-token';
import { Course } from '../coursesPage/course';

export interface AmStore {
  courses: Course;
  login: AuthToken;
}
