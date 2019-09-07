import { TestBed } from '@angular/core/testing';

import { DeleteCourseInfoService } from './delete-course-info.service';

describe('DeleteCourseInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteCourseInfoService = TestBed.get(DeleteCourseInfoService);
    expect(service).toBeTruthy();
  });
});
