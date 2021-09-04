import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaGlobalDetalleComponent } from './factura-global-detalle.component';

describe('FacturaGlobalDetalleComponent', () => {
  let component: FacturaGlobalDetalleComponent;
  let fixture: ComponentFixture<FacturaGlobalDetalleComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ FacturaGlobalDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaGlobalDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

