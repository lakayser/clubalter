import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanchasDashboardComponent } from './canchas-dashboard.component';

describe('CanchasDashboardComponent', () => {
  let component: CanchasDashboardComponent;
  let fixture: ComponentFixture<CanchasDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanchasDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanchasDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
