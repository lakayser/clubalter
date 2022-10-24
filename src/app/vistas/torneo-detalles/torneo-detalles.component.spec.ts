import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorneoDetallesComponent } from './torneo-detalles.component';

describe('TorneoDetallesComponent', () => {
  let component: TorneoDetallesComponent;
  let fixture: ComponentFixture<TorneoDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TorneoDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TorneoDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
