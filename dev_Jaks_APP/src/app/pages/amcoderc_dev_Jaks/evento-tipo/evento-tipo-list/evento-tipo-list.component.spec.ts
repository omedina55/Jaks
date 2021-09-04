import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoTipoListComponent } from './evento-tipo-list.component';

describe('EventoTipoListComponent', () => {
  let component: EventoTipoListComponent;
  let fixture: ComponentFixture<EventoTipoListComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ EventoTipoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoTipoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

