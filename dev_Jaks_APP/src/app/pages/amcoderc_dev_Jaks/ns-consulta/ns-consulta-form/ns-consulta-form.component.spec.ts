import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NsConsultaFormComponent } from './ns-consulta-form.component';

describe('NsConsultaFormComponent', () => {
  let component: NsConsultaFormComponent;
  let fixture: ComponentFixture<NsConsultaFormComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ NsConsultaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NsConsultaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

