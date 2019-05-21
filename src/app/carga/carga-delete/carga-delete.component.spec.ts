import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaDeleteComponent } from './carga-delete.component';

describe('CargaDeleteComponent', () => {
  let component: CargaDeleteComponent;
  let fixture: ComponentFixture<CargaDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
