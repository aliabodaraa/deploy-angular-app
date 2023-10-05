import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { NodeEventHandler } from 'rxjs/internal/observable/fromEvent';
@Component({
  selector: 'courses',
  template: `
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
      <input [(ngModel)]="email" (keyup.enter)="tempVarMethod()" /><br />
    </ul>
  `,
})
export class CoursesComponent {
  courses;
  email;
  tempVarMethod() {
    console.log(this.email);
  }
  constructor(service: CoursesService) {
    this.email = 'SDFdsf';
    //dependency injection then here when you edit the server constructoe and add a new param will not wdit outside the service class to reflected the change- angular automatically instansiate new CourseService object another benifets to this approch is when you go to unit tests for coursesComponents intead of suppling the accual coursesService to this constructor we can create a fake implementation of this srervice that does not use httpService on the backend
    this.courses = service.getCourse();
  }
}
