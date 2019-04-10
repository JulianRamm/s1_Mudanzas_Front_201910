import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaCreateComponent } from './carga-create.component';

describe('CargaCreateComponent', () => {
  let component: CargaCreateComponent;
  let fixture: ComponentFixture<CargaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
