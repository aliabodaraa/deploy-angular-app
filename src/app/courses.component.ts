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
      <div>
        <!-- //traditional way to simulate clicking Enter button -->
        <label for="traditional way">traditional way</label>
        <input (keyup)="enterFunTraditional($event)" /><br />
        <label for="event filter way">event filter way</label>
        <input (keyup.enter)="enterFunNew()" />
      </div>
    </ul>
  `,
})
export class CoursesComponent {
  courses;

  enterFun() {
    console.log('Enter Button Clicked');
  }
  enterFunTraditional($event: KeyboardEvent) {
    if ($event.keyCode == 13)
      //13 represents Enter key
      console.log('Enter Button Clicked');
  }
  enterFunNew() {
    console.log('Enter Button Clicked');
  }
  constructor(service: CoursesService) {
    //dependency injection then here when you edit the server constructoe and add a new param will not wdit outside the service class to reflected the change- angular automatically instansiate new CourseService object another benifets to this approch is when you go to unit tests for coursesComponents intead of suppling the accual coursesService to this constructor we can create a fake implementation of this srervice that does not use httpService on the backend
    this.courses = service.getCourse();
  }
}
