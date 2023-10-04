import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
@Component({
  selector: 'courses',
  template: `
    <h2>{{ title + getTitle() }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
      <button class="btn btn-danger" [class.active]="isActive">CLICK ME</button>
      <button
        class="btn btn-danger"
        [style.backgroundColor]="isActive ? 'green' : 'red'"
      >
        CLICK ME
      </button>
    </ul>
  `,
})
export class CoursesComponent {
  title = 'List of course';
  isActive = true;
  courses;

  getTitle() {
    return this.title;
  }
  constructor(service: CoursesService) {
    //dependency injection then here when you edit the server constructoe and add a new param will not wdit outside the service class to reflected the change- angular automatically instansiate new CourseService object another benifets to this approch is when you go to unit tests for coursesComponents intead of suppling the accual coursesService to this constructor we can create a fake implementation of this srervice that does not use httpService on the backend
    this.courses = service.getCourse();
  }
}
