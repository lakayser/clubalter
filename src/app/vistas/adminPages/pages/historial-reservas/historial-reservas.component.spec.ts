import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialReservasComponent } from './historial-reservas.component';

describe('HistorialReservasComponent', () => {
  let component: HistorialReservasComponent;
  let fixture: ComponentFixture<HistorialReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialReservasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
