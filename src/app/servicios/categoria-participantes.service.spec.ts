import { TestBed } from '@angular/core/testing';

import { CategoriaParticipantesService } from './categoria-participantes.service';

describe('CategoriaParticipantesService', () => {
  let service: CategoriaParticipantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriaParticipantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
