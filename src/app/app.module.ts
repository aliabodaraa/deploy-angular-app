import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { AppErrorHandler } from './errors/AppErrorHandler';
import { PostService } from './services/post.service';
@NgModule({
  declarations: [AppComponent, PostComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler }, //replace the default GlobalErrorHandler provider by Angular
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
