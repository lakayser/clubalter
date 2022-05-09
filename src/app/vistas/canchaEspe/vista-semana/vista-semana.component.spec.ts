import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaSemanaComponent } from './vista-semana.component';

describe('VistaSemanaComponent', () => {
  let component: VistaSemanaComponent;
  let fixture: ComponentFixture<VistaSemanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaSemanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaSemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
