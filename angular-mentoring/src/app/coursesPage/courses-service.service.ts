import { Injectable } from '@angular/core';
import { Course } from './course';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesServiceService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(this.apiUrl + '/courses', { responseType: 'json' });
  }

  createCourse(course) {
    return this.http.post(this.apiUrl + '/courses', course);
  }

  getItemById(id: string) {
    return this.http.get<{}>(this.apiUrl + `/courses/${id}`, { responseType: 'json' });
  }

  updateItem(course) {
     return this.http.put(this.apiUrl + `/courses/${course.id}`, course);
  }

  removeItem(id) {
    return this.http.delete(this.apiUrl + `/courses/${id}`);
  }
}
