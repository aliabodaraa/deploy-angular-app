import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
@Component({
  selector: 'courses',
  template: `
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
    <ul class="person-info">
      <li>CUSTOM PIPE : {{ peson.text | summary }}</li>
      <li>{{ peson.name | uppercase }}</li>
      <li>{{ peson.lname }}</li>
      <li>{{ peson.job }}</li>
      <li>{{ peson.age | number : '3.1-2' }}</li>
      <li>{{ peson.myNumber | number : '1.1-2' }}</li>
      <li>{{ peson.price | currency }}</li>
      <li>
        true to get the currency simple
        {{ peson.price | currency : 'AUD' : true }}
      </li>
      <li>
        spicifing the number form in the last argument
        {{ peson.price | currency : 'AUD' : true : '2.1-2' }}
      </li>
      <li>
        {{ peson.releaseDate | date : 'shortDate' }}
      </li>
    </ul>
  `,
})
export class CoursesComponent {
  courses;
  peson;
  // pipe | number : '1.2-2' min-max number of digits after the decimal point
  // pipe | number : '2.2-2' the first 2 count of digits before the decimal point

  constructor(service: CoursesService) {
    this.peson = {
      name: 'ali',
      lname: 'abodaraa',
      job: 'software Developer',
      age: 25,
      myNumber: 12.4265,
      price: 190.97,
      releaseDate: new Date(2023, 3, 12),
      text: 'asasd sdf sdf  sdf sd f sdf sdf sdf sd f sdf s f sdf sd fsd f sd fsd f sdf sdfsdf sdf sdf sd f sdf s df sdf dsf',
    };
    //dependency injection then here when you edit the server constructoe and add a new param will not wdit outside the service class to reflected the change- angular automatically instansiate new CourseService object another benifets to this approch is when you go to unit tests for coursesComponents intead of suppling the accual coursesService to this constructor we can create a fake implementation of this srervice that does not use httpService on the backend
    this.courses = service.getCourse();
  }
}
