import { TestBed } from '@angular/core/testing';

import { HoradisponibleService } from './horadisponible.service';

describe('HoradisponibleService', () => {
  let service: HoradisponibleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoradisponibleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
