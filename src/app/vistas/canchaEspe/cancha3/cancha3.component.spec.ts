import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cancha3Component } from './cancha3.component';

describe('Cancha3Component', () => {
  let component: Cancha3Component;
  let fixture: ComponentFixture<Cancha3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cancha3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cancha3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
