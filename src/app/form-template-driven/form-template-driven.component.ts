import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form-template-driven',
  templateUrl: './form-template-driven.component.html',
  styleUrls: ['./form-template-driven.component.css'],
})
export class FormTemplateDrivenComponent {
  log(firstNameFieldTemplateVariable: NgModel) {
    console.log(firstNameFieldTemplateVariable);
  }
  onSubmit(s: NgForm) {
    console.log(s);
  }
  contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' },
  ];
}
