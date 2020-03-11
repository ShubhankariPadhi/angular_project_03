import { TestBed } from '@angular/core/testing';

import { StudentDataForCompService } from './student-data-for-comp.service';

describe('StudentDataForCompService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentDataForCompService = TestBed.get(StudentDataForCompService);
    expect(service).toBeTruthy();
  });
});
