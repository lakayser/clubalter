import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KbotAgendaComponent } from './kbot-agenda.component';

describe('KbotAgendaComponent', () => {
  let component: KbotAgendaComponent;
  let fixture: ComponentFixture<KbotAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KbotAgendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KbotAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
