import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorneoscrudComponent } from './torneoscrud.component';

describe('TorneoscrudComponent', () => {
  let component: TorneoscrudComponent;
  let fixture: ComponentFixture<TorneoscrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TorneoscrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TorneoscrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
