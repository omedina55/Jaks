import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoTipoFormComponent } from './evento-tipo-form.component';

describe('EventoTipoFormComponent', () => {
  let component: EventoTipoFormComponent;
  let fixture: ComponentFixture<EventoTipoFormComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ EventoTipoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoTipoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

