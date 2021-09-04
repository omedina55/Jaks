import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaGlobalDetalleTaxesComponent } from './factura-global-detalle-taxes.component';

describe('FacturaGlobalDetalleTaxesComponent', () => {
  let component: FacturaGlobalDetalleTaxesComponent;
  let fixture: ComponentFixture<FacturaGlobalDetalleTaxesComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ FacturaGlobalDetalleTaxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaGlobalDetalleTaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

