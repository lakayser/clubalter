import { TestBed } from '@angular/core/testing';

import { HorastomadasService } from './horastomadas.service';

describe('HorastomadasService', () => {
  let service: HorastomadasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HorastomadasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
