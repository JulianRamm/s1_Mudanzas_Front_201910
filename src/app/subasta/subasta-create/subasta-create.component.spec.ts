import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubastaCreateComponent } from './subasta-create.component';

describe('SubastaCreateComponent', () => {
  let component: SubastaCreateComponent;
  let fixture: ComponentFixture<SubastaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubastaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubastaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
