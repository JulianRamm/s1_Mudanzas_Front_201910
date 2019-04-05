import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCreateComponent } from './tarjeta-create.component';

describe('TarjetaCreateComponent', () => {
  let component: TarjetaCreateComponent;
  let fixture: ComponentFixture<TarjetaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
