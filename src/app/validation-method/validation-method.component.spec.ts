import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationMethodComponent } from './validation-method.component';

describe('ValidationMethodComponent', () => {
  let component: ValidationMethodComponent;
  let fixture: ComponentFixture<ValidationMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
