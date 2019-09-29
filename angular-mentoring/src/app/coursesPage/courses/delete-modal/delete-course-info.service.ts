import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DeleteCourseInfoService {
  private courseId = new BehaviorSubject<number>(0);
  id = this.courseId.asObservable();

  constructor() { }

   setID(id) {
    this.courseId.next(id);
  }
}
