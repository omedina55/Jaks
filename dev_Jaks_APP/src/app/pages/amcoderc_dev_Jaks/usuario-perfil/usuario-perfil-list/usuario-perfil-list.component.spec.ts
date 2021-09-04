import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioPerfilListComponent } from './usuario-perfil-list.component';

describe('UsuarioPerfilListComponent', () => {
  let component: UsuarioPerfilListComponent;
  let fixture: ComponentFixture<UsuarioPerfilListComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioPerfilListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioPerfilListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

