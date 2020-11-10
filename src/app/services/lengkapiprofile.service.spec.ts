import { TestBed } from '@angular/core/testing';

import { LengkapiprofileService } from './lengkapiprofile.service';

describe('LengkapiprofileService', () => {
  let service: LengkapiprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LengkapiprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
