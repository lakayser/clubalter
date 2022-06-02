import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaseCrudComponent } from './clase-crud.component';

describe('ClaseCrudComponent', () => {
  let component: ClaseCrudComponent;
  let fixture: ComponentFixture<ClaseCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaseCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaseCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
