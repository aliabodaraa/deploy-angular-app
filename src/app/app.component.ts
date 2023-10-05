import { Component, ViewEncapsulation } from '@angular/core';

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
}
