import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermoderatorComponent } from './usermoderator.component';

describe('UsermoderatorComponent', () => {
  let component: UsermoderatorComponent;
  let fixture: ComponentFixture<UsermoderatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsermoderatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermoderatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
