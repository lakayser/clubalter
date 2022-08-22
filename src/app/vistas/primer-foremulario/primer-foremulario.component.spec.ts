import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerForemularioComponent } from './primer-foremulario.component';

describe('PrimerForemularioComponent', () => {
  let component: PrimerForemularioComponent;
  let fixture: ComponentFixture<PrimerForemularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimerForemularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerForemularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
