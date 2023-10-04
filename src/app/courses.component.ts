import { Component } from '@angular/core';
import { CourseService } from './courses.service';
@Component({
  selector: 'courses',
  template: `
    <h2>{{ title + getTitle() }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `,
})
export class CoursesComponent {
  title = 'List of course';
  courses;

  getTitle() {
    return this.title;
  }
  constructor() {
    let service = new CourseService(); //instansiation here is tightly coupled whereas in the fucture will get a problem when you decide to add param to this class' constructor then you will need to edit all instansiations statement and anywhere else in your application whrere you have use this service and add a new argument nad that is a fragile
    this.courses = service.getCourse();
  }
}
