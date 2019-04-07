import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioMapComponent } from './usuario-map.component';

describe('UsuarioMapComponent', () => {
  let component: UsuarioMapComponent;
  let fixture: ComponentFixture<UsuarioMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
