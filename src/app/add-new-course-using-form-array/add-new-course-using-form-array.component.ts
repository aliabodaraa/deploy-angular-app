import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
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
  //FormBuilder class users to building forms
  //difference between the normal approch FormBuilder approch
  form1;
  constructor(fb: FormBuilder) {
    //normal approch
    this.form1 = new FormGroup({
      name: new FormControl('', Validators.required),
      contact: new FormGroup({
        email: new FormControl(),
        phone: new FormControl(),
      }),
      topics: new FormArray<FormControl>([]),
    });
    //FormBuilder approch
    this.form1 = fb.group({
      name: ['', Validators.required], //we can call fb.control('', Validators.required) but the witen syntax is much cleaner
      contact: fb.group({
        email: [],
        phone: [],
      }),
      topics: fb.array([]),
    });
  }
}
