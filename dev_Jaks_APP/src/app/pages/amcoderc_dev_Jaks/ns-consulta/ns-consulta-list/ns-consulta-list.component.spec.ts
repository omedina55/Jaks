import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NsConsultaListComponent } from './ns-consulta-list.component';

describe('NsConsultaListComponent', () => {
  let component: NsConsultaListComponent;
  let fixture: ComponentFixture<NsConsultaListComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ NsConsultaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NsConsultaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

