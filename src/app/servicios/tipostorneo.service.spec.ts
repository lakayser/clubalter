import { TestBed } from '@angular/core/testing';

import { TipostorneoService } from './tipostorneo.service';

describe('TipostorneoService', () => {
  let service: TipostorneoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipostorneoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
