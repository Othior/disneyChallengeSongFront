import { TestBed } from '@angular/core/testing';

import { RoueService } from './roue.service';

describe('RoueService', () => {
  let service: RoueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
