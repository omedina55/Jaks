import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaGlobalEventoFormComponent } from './factura-global-evento-form.component';

describe('FacturaGlobalEventoFormComponent', () => {
  let component: FacturaGlobalEventoFormComponent;
  let fixture: ComponentFixture<FacturaGlobalEventoFormComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ FacturaGlobalEventoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaGlobalEventoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

