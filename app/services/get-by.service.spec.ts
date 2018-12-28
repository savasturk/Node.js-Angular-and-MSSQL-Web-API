import { TestBed } from '@angular/core/testing';

import { GetByService } from './get-by.service';

describe('GetByService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetByService = TestBed.get(GetByService);
    expect(service).toBeTruthy();
  });
});
