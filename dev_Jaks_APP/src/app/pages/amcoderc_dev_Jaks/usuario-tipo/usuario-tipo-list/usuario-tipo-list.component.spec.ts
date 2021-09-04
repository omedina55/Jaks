import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioTipoListComponent } from './usuario-tipo-list.component';

describe('UsuarioTipoListComponent', () => {
  let component: UsuarioTipoListComponent;
  let fixture: ComponentFixture<UsuarioTipoListComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioTipoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioTipoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

