import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoCreateComponent } from './vehiculo-create.component';

describe('UsuarioCreateComponent', () => {
  let component: VehiculoCreateComponent;
  let fixture: ComponentFixture<VehiculoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


