import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarhoraComponent } from './agendarhora.component';

describe('AgendarhoraComponent', () => {
  let component: AgendarhoraComponent;
  let fixture: ComponentFixture<AgendarhoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendarhoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendarhoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
