import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercrudModeratorComponent } from './usercrud-moderator.component';

describe('UsercrudModeratorComponent', () => {
  let component: UsercrudModeratorComponent;
  let fixture: ComponentFixture<UsercrudModeratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercrudModeratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercrudModeratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
