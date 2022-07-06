import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectReservaComponent } from './select-reserva.component';

describe('SelectReservaComponent', () => {
  let component: SelectReservaComponent;
  let fixture: ComponentFixture<SelectReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectReservaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
