import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEmpresaFormComponent } from './usuario-empresa-form.component';

describe('UsuarioEmpresaFormComponent', () => {
  let component: UsuarioEmpresaFormComponent;
  let fixture: ComponentFixture<UsuarioEmpresaFormComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioEmpresaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioEmpresaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

