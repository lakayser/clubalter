import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanchasbichoComponent } from './canchasbicho.component';

describe('CanchasbichoComponent', () => {
  let component: CanchasbichoComponent;
  let fixture: ComponentFixture<CanchasbichoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanchasbichoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanchasbichoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
