import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajeDetailComponent } from './viaje-detail.component';

describe('ViajeDetailComponent', () => {
  let component: ViajeDetailComponent;
  let fixture: ComponentFixture<ViajeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
