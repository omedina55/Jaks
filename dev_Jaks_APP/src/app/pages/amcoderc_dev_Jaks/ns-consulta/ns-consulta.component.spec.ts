import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NsConsultaComponent } from './ns-consulta.component';

describe('NsConsultaComponent', () => {
  let component: NsConsultaComponent;
  let fixture: ComponentFixture<NsConsultaComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ NsConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NsConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

