import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaGlobalEventoListComponent } from './factura-global-evento-list.component';

describe('FacturaGlobalEventoListComponent', () => {
  let component: FacturaGlobalEventoListComponent;
  let fixture: ComponentFixture<FacturaGlobalEventoListComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ FacturaGlobalEventoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaGlobalEventoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

