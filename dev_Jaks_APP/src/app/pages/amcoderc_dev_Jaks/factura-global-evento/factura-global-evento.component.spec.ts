import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaGlobalEventoComponent } from './factura-global-evento.component';

describe('FacturaGlobalEventoComponent', () => {
  let component: FacturaGlobalEventoComponent;
  let fixture: ComponentFixture<FacturaGlobalEventoComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ FacturaGlobalEventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaGlobalEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

