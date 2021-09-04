import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioTipoFormComponent } from './usuario-tipo-form.component';

describe('UsuarioTipoFormComponent', () => {
  let component: UsuarioTipoFormComponent;
  let fixture: ComponentFixture<UsuarioTipoFormComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioTipoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioTipoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

