import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaGlobalDetalleTaxesFormComponent } from './factura-global-detalle-taxes-form.component';

describe('FacturaGlobalDetalleTaxesFormComponent', () => {
  let component: FacturaGlobalDetalleTaxesFormComponent;
  let fixture: ComponentFixture<FacturaGlobalDetalleTaxesFormComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ FacturaGlobalDetalleTaxesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaGlobalDetalleTaxesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

