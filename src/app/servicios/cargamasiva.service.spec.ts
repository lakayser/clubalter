import { TestBed } from '@angular/core/testing';

import { CargamasivaService } from './cargamasiva.service';

describe('CargamasivaService', () => {
  let service: CargamasivaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargamasivaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
