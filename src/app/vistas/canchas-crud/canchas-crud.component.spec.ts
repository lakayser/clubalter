import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanchasCrudComponent } from './canchas-crud.component';

describe('CanchasCrudComponent', () => {
  let component: CanchasCrudComponent;
  let fixture: ComponentFixture<CanchasCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanchasCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanchasCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
