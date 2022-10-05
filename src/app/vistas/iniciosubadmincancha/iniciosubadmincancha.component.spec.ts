import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciosubadmincanchaComponent } from './iniciosubadmincancha.component';

describe('IniciosubadmincanchaComponent', () => {
  let component: IniciosubadmincanchaComponent;
  let fixture: ComponentFixture<IniciosubadmincanchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciosubadmincanchaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciosubadmincanchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
