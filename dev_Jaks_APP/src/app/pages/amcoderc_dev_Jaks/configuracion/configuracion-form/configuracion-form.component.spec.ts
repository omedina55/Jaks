import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionFormComponent } from './configuracion-form.component';

describe('ConfiguracionFormComponent', () => {
  let component: ConfiguracionFormComponent;
  let fixture: ComponentFixture<ConfiguracionFormComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

