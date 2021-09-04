import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEmpresaListComponent } from './usuario-empresa-list.component';

describe('UsuarioEmpresaListComponent', () => {
  let component: UsuarioEmpresaListComponent;
  let fixture: ComponentFixture<UsuarioEmpresaListComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioEmpresaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioEmpresaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

