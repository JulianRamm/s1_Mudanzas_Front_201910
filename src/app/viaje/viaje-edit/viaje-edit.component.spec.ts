import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajeEditComponent } from './viaje-edit.component';

describe('ViajeEditComponent', () => {
  let component: ViajeEditComponent;
  let fixture: ComponentFixture<ViajeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
