import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaListComponent } from './carga-list.component';

describe('CargaListComponent', () => {
  let component: CargaListComponent;
  let fixture: ComponentFixture<CargaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
