import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajeDeleteComponent } from './viaje-delete.component';

describe('ViajeDeleteComponent', () => {
  let component: ViajeDeleteComponent;
  let fixture: ComponentFixture<ViajeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajeDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
