import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioTipoComponent } from './usuario-tipo.component';

describe('UsuarioTipoComponent', () => {
  let component: UsuarioTipoComponent;
  let fixture: ComponentFixture<UsuarioTipoComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioTipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

