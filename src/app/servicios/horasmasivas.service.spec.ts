import { TestBed } from '@angular/core/testing';

import { HorasmasivasService } from './horasmasivas.service';

describe('HorasmasivasService', () => {
  let service: HorasmasivasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HorasmasivasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
