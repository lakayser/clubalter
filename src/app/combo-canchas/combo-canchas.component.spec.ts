import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboCanchasComponent } from './combo-canchas.component';

describe('ComboCanchasComponent', () => {
  let component: ComboCanchasComponent;
  let fixture: ComponentFixture<ComboCanchasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComboCanchasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboCanchasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
