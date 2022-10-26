import { TestBed } from '@angular/core/testing';

import { PraticeService } from './pratice.service';

describe('PraticeService', () => {
  let service: PraticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PraticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
