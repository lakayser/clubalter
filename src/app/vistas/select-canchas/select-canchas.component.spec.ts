import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCanchasComponent } from './select-canchas.component';

describe('SelectCanchasComponent', () => {
  let component: SelectCanchasComponent;
  let fixture: ComponentFixture<SelectCanchasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCanchasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCanchasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
