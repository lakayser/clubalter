import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cancha1Component } from './cancha1.component';

describe('Cancha1Component', () => {
  let component: Cancha1Component;
  let fixture: ComponentFixture<Cancha1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cancha1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cancha1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
