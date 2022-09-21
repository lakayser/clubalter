import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudsubadminComponent } from './crudsubadmin.component';

describe('CrudsubadminComponent', () => {
  let component: CrudsubadminComponent;
  let fixture: ComponentFixture<CrudsubadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudsubadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudsubadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
