import { TestBed } from '@angular/core/testing';

import { CategoriaTorneoService } from './categoria-torneo.service';

describe('CategoriaTorneoService', () => {
  let service: CategoriaTorneoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriaTorneoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
