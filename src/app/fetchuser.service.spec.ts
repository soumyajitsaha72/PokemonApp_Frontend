import { TestBed } from '@angular/core/testing';

import { FetchuserService } from './fetchuser.service';

describe('FetchuserService', () => {
  let service: FetchuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
