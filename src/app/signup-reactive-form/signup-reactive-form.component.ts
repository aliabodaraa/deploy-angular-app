import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup-reactive-form',
  templateUrl: './signup-reactive-form.component.html',
  styleUrls: ['./signup-reactive-form.component.css'],
})
export class SignupReactiveFormComponent {
  form = new FormGroup({
    username: new FormControl('', Validators.required), //the second param is validatorFn | valiudatorFn[]  required is just a reference to the function required()
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4), //here we not calling the method in the sence of performing some kind of validation we are calling this with an argument to get the validator function
    ]),
  });

  get accessUserName() {
    return this.form.get('username');
  }
  get accessPassword() {
    return this.form.get('password');
  }
}