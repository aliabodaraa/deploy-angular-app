import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoostrapPanelComponent } from './boostrap-panel/boostrap-panel.component';
import { InputFormatDirective } from './input-format.directive';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { SignupReactiveFormComponent } from './signup-reactive-form/signup-reactive-form.component';
import { AddNewCourseUsingFormArrayComponent } from './add-new-course-using-form-array/add-new-course-using-form-array.component';
@NgModule({
  declarations: [
    AppComponent,
    BoostrapPanelComponent,
    InputFormatDirective,
    FormTemplateDrivenComponent,
    SignupReactiveFormComponent,
    AddNewCourseUsingFormArrayComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
