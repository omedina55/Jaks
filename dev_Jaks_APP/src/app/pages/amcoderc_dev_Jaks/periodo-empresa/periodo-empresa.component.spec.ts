import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoEmpresaComponent } from './periodo-empresa.component';

describe('PeriodoEmpresaComponent', () => {
  let component: PeriodoEmpresaComponent;
  let fixture: ComponentFixture<PeriodoEmpresaComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ PeriodoEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodoEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

