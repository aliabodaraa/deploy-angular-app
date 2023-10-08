import { Component, ViewEncapsulation } from '@angular/core';
type courseType = {
  id: number;
  name: string;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  heading = 'Heading From Parent';
  body = 'body From Parent';

  onTitleChange($data: object) {
    console.log('Title have just changed now', $data);
  }
  currentTab = 'tab1';
  courses: courseType[] = [];
  loadCourses() {
    this.courses = [
      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' },
    ];
  }
  onTrack(index: number, course: courseType) {
    return course ? course.id : undefined;
  }
}
