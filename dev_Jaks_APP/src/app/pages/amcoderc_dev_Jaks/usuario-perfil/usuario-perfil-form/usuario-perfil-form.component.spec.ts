import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioPerfilFormComponent } from './usuario-perfil-form.component';

describe('UsuarioPerfilFormComponent', () => {
  let component: UsuarioPerfilFormComponent;
  let fixture: ComponentFixture<UsuarioPerfilFormComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioPerfilFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioPerfilFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

