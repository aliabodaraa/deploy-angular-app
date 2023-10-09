import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-add-new-course-using-form-array',
  templateUrl: './add-new-course-using-form-array.component.html',
  styleUrls: ['./add-new-course-using-form-array.component.css'],
})
export class AddNewCourseUsingFormArrayComponent {
  form = new FormGroup({
    topics: new FormArray<FormControl>([]),
  });

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }
  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
  get topics() {
    return this.form.get('topics') as FormArray<FormControl>; //we cast here because the type that the 'get' method returns is 'AbstractControl' to make access to push we should cast to 'FormArray'
  }
}
