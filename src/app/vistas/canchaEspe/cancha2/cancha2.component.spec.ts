import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cancha2Component } from './cancha2.component';

describe('Cancha2Component', () => {
  let component: Cancha2Component;
  let fixture: ComponentFixture<Cancha2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cancha2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cancha2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
