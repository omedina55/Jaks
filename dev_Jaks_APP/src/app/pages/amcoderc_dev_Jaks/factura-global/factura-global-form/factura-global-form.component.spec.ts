import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaGlobalFormComponent } from './factura-global-form.component';

describe('FacturaGlobalFormComponent', () => {
  let component: FacturaGlobalFormComponent;
  let fixture: ComponentFixture<FacturaGlobalFormComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ FacturaGlobalFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaGlobalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

