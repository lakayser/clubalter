import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalPagoComponent } from './portal-pago.component';

describe('PortalPagoComponent', () => {
  let component: PortalPagoComponent;
  let fixture: ComponentFixture<PortalPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalPagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
