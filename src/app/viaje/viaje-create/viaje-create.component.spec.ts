import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajeCreateComponent } from './viaje-create.component';

describe('ViajeCreateComponent', () => {
  let component: ViajeCreateComponent;
  let fixture: ComponentFixture<ViajeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
