import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacionesAdminComponent } from './organizaciones-admin.component';

describe('OrganizacionesAdminComponent', () => {
  let component: OrganizacionesAdminComponent;
  let fixture: ComponentFixture<OrganizacionesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizacionesAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizacionesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
