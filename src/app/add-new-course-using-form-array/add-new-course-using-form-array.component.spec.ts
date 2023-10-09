import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCourseUsingFormArrayComponent } from './add-new-course-using-form-array.component';

describe('AddNewCourseUsingFormArrayComponent', () => {
  let component: AddNewCourseUsingFormArrayComponent;
  let fixture: ComponentFixture<AddNewCourseUsingFormArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewCourseUsingFormArrayComponent]
    });
    fixture = TestBed.createComponent(AddNewCourseUsingFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
