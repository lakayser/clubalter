import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanchasReservarComponent } from './canchas-reservar.component';

describe('CanchasReservarComponent', () => {
  let component: CanchasReservarComponent;
  let fixture: ComponentFixture<CanchasReservarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanchasReservarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanchasReservarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
