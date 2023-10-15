import { ErrorHandler, NgModule, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// import { BaseRequestOptions } from '@angular/http';
import { PostComponent } from './post/post.component';
import { AppErrorHandler } from './errors/AppErrorHandler';
import { PostService } from './services/post.service';
import { GithubFollowersService } from './services/github-followers.service';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SummaryPipe } from './summary.pipe';
import { AuthorsService } from './authors.service';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';

import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { TitleCasePipe } from './title-case.pipe';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { NavbarComponent } from './navbar/navbar.component';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterModule,
  RouterStateSnapshot,
} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { OrderService } from './services/order.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthInterceptor } from './admin/AuthInterceptor ';

const checkUserLogging: CanActivateFn = (
  routeTo: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(AuthGuard).canActivate(state.url);
};
const checkUserIsAdmin: CanActivateFn = () => {
  return inject(AdminAuthGuard).canActivate();
};
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    SignupFormComponent,
    CourseComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    InputFormatDirective,
    TitleCasePipe,
    LikeComponent,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    NoAccessComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'followers/:id/:username', component: GithubProfileComponent },
      { path: 'followers', component: GithubFollowersComponent },
      { path: 'posts', component: PostComponent },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [checkUserLogging, checkUserIsAdmin],
      },
      { path: 'login', component: LoginComponent },
      { path: 'no-access', component: NoAccessComponent },
      { path: '**', component: NotFoundComponent },
    ]),
  ],
  providers: [
    PostService,
    CoursesService,
    AuthorsService,
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, //By providing the JWT_OPTIONS token, you ensure that the JwtHelperService can resolve its dependencies correctly (token passed to it as parameter)
    AuthGuard,
    AdminAuthGuard,
    GithubFollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler }, //replace the default GlobalErrorHandler provider by Angular
    OrderService,

    AuthService,
    {
      // configuring the Angular dependency injection system to use the AuthInterceptor class as an HTTP interceptor.
      provide: HTTP_INTERCEPTORS, //used by Angular's dependency injection system to identify that it should provide an instance of an HTTP interceptor
      useClass: AuthInterceptor, //: This specifies the class (AuthInterceptor) that should be instantiated and provided as the interceptor implementation.
      multi: true, //If you set it to false, it would replace any existing interceptor providers with the new one.
    },
    // For creating a mock back-end. You don't need these in a real app.
    // fakeBackendProvider, //{provide: Http, useFactory: fakeBackendFactory, deps: [MockBackend, BaseRequestOptions]}
    // MockBackend,
    // BaseRequestOptions,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
