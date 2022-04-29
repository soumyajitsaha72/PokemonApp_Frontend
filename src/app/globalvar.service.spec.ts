import { TestBed } from '@angular/core/testing';

import { GlobalvarService } from './globalvar.service';

describe('GlobalvarService', () => {
  let service: GlobalvarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalvarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
