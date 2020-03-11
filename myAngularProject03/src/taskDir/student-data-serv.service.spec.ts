import { TestBed } from '@angular/core/testing';

import { StudentDataServService } from './student-data-serv.service';

describe('StudentDataServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentDataServService = TestBed.get(StudentDataServService);
    expect(service).toBeTruthy();
  });
});
