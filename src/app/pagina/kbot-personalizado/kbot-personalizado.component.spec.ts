import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KbotPersonalizadoComponent } from './kbot-personalizado.component';

describe('KbotPersonalizadoComponent', () => {
  let component: KbotPersonalizadoComponent;
  let fixture: ComponentFixture<KbotPersonalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KbotPersonalizadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KbotPersonalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
