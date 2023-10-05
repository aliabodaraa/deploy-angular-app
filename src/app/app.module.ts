import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, CoursesComponent, CourseComponent],
  imports: [BrowserModule, FormsModule],
  providers: [CoursesService], //register the dependencies - when register it as a provider in the module angular will create a single instance on that class for this entire module so any- in case we have 100 components and half of them need CoursesService in memory we will have a single instance of CoursesService and Angular will pass the same instance to all these components (Singleton Pattern which means single instance of a given object exists on memory)
  bootstrap: [AppComponent],
})
export class AppModule {}
