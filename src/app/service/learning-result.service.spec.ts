import { TestBed } from '@angular/core/testing';

import { LearningResultService } from './learning-result.service';

describe('LearningResultService', () => {
  let service: LearningResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearningResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
