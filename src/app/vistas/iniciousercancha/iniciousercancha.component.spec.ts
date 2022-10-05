import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciousercanchaComponent } from './iniciousercancha.component';

describe('IniciousercanchaComponent', () => {
  let component: IniciousercanchaComponent;
  let fixture: ComponentFixture<IniciousercanchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciousercanchaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciousercanchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
