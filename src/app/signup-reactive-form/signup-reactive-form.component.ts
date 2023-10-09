import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignUpCustomValidator } from './signup.validators';
@Component({
  selector: 'app-signup-reactive-form',
  templateUrl: './signup-reactive-form.component.html',
  styleUrls: ['./signup-reactive-form.component.css'],
})
export class SignupReactiveFormComponent {
  form = new FormGroup({
    username: new FormControl(
      '',
      Validators.required,
      SignUpCustomValidator.shouldBeUniqueAsync
    ), //the second param is validatorFn | valiudatorFn[]  required is just a reference to the function required()
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4), //here we not calling the method in the sence of performing some kind of validation we are calling this with an argument to get the validator function
      SignUpCustomValidator.cannotContainSpace,
    ]),
  });

  get accessUserName() {
    return this.form.get('username');
  }
  get accessPassword() {
    return this.form.get('password');
  }
  login() {
    // imagine there is a service call login in this point of code
    // let isValid = serviceAuth?.login(this.form.value);
    // if (isValid) {
    //   this.form.setErrors({ invalidLogin: true });
    // }
    console.log(this.form);
    this.form.setErrors({ invalidLogin: true });
  }
}
