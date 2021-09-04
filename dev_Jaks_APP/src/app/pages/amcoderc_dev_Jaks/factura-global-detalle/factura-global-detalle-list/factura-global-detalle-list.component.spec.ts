import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaGlobalDetalleListComponent } from './factura-global-detalle-list.component';

describe('FacturaGlobalDetalleListComponent', () => {
  let component: FacturaGlobalDetalleListComponent;
  let fixture: ComponentFixture<FacturaGlobalDetalleListComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ FacturaGlobalDetalleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaGlobalDetalleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

