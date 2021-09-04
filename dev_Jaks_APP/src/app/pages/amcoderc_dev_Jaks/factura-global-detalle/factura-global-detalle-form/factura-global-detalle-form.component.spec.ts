import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaGlobalDetalleFormComponent } from './factura-global-detalle-form.component';

describe('FacturaGlobalDetalleFormComponent', () => {
  let component: FacturaGlobalDetalleFormComponent;
  let fixture: ComponentFixture<FacturaGlobalDetalleFormComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ FacturaGlobalDetalleFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaGlobalDetalleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

