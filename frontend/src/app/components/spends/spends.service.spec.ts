import { TestBed } from '@angular/core/testing';

import { SpendsService } from './spends.service';

describe('SpendsService', () => {
  let service: SpendsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpendsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
