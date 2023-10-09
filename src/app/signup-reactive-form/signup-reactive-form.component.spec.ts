import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupReactiveFormComponent } from './signup-reactive-form.component';

describe('SignupReactiveFormComponent', () => {
  let component: SignupReactiveFormComponent;
  let fixture: ComponentFixture<SignupReactiveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupReactiveFormComponent]
    });
    fixture = TestBed.createComponent(SignupReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
