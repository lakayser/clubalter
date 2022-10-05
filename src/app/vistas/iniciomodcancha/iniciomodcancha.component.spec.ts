import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciomodcanchaComponent } from './iniciomodcancha.component';

describe('IniciomodcanchaComponent', () => {
  let component: IniciomodcanchaComponent;
  let fixture: ComponentFixture<IniciomodcanchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciomodcanchaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciomodcanchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
