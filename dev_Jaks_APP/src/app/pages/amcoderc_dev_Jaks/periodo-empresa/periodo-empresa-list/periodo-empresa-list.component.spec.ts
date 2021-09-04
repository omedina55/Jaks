import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoEmpresaListComponent } from './periodo-empresa-list.component';

describe('PeriodoEmpresaListComponent', () => {
  let component: PeriodoEmpresaListComponent;
  let fixture: ComponentFixture<PeriodoEmpresaListComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ PeriodoEmpresaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodoEmpresaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

