import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldErrorFormComponent } from './field-error-form.component';

describe('FieldErrorFormComponent', () => {
  let component: FieldErrorFormComponent;
  let fixture: ComponentFixture<FieldErrorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldErrorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldErrorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
