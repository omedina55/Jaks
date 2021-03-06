import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutInitialComponent } from './layout-initial.component';

describe('LayoutInitialComponent', () => {
  let component: LayoutInitialComponent;
  let fixture: ComponentFixture<LayoutInitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutInitialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
