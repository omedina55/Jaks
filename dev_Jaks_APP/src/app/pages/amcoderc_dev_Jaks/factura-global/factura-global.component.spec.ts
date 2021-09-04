import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaGlobalComponent } from './factura-global.component';

describe('FacturaGlobalComponent', () => {
  let component: FacturaGlobalComponent;
  let fixture: ComponentFixture<FacturaGlobalComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ FacturaGlobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

