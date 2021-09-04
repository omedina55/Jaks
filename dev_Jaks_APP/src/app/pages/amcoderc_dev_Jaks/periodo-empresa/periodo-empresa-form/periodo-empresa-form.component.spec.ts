import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoEmpresaFormComponent } from './periodo-empresa-form.component';

describe('PeriodoEmpresaFormComponent', () => {
  let component: PeriodoEmpresaFormComponent;
  let fixture: ComponentFixture<PeriodoEmpresaFormComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ PeriodoEmpresaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodoEmpresaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

