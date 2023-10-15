import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Your logic before sending the request
    if (!request.url.includes('/order')) return next.handle(request);
    let token = request.headers.get('Authorization')?.split('Bearer')[1];
    let browserToken = localStorage.getItem('JWT_Token');
    if (token === browserToken) {
      return next.handle(request);
      //   // Check if the token is missing or invalid
      //   if (!token || isTokenInvalidOrExpired(token)) {
      //     // Handle missing or invalid token case
      //     console.log('Bearer token is missing or invalid');
      //     // Your logic here
      //     // You can return an error Observable or perform any other action
      //     // to handle the case of a missing or invalid token
      //     return throwError('Bearer token is missing or invalid');
      //   }
    }

    // Continue sending the request
    return throwError(() => 'Bearer token is missing or invalid');
  }
}
