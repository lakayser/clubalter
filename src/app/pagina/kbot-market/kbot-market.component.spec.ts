import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KbotMarketComponent } from './kbot-market.component';

describe('KbotMarketComponent', () => {
  let component: KbotMarketComponent;
  let fixture: ComponentFixture<KbotMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KbotMarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KbotMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
