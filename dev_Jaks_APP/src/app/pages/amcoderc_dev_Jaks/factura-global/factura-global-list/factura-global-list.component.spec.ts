import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaGlobalListComponent } from './factura-global-list.component';

describe('FacturaGlobalListComponent', () => {
  let component: FacturaGlobalListComponent;
  let fixture: ComponentFixture<FacturaGlobalListComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ FacturaGlobalListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaGlobalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

