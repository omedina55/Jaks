import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaGlobalDetalleTaxesListComponent } from './factura-global-detalle-taxes-list.component';

describe('FacturaGlobalDetalleTaxesListComponent', () => {
  let component: FacturaGlobalDetalleTaxesListComponent;
  let fixture: ComponentFixture<FacturaGlobalDetalleTaxesListComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ FacturaGlobalDetalleTaxesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaGlobalDetalleTaxesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

