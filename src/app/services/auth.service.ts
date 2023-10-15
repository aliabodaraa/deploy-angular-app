import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
type responseType = {
  status: number;
  body: { token: string };
} | null;
@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  login(credentials: any) {
    // return this.http.1('/api/authenticate', JSON.stringify(credentials));
    return new Observable<responseType>((observer) => {
      // Emit values to the observer
      if (credentials.email == 'ali@gmail.com') {
        const response = {
          status: 200,
          body: {
            token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6dHJ1ZX0.iy8az1ZDe-_hS8GLDKsQKgPHvWpHl0zkQBqy1QIPOkA',
          },
        };
        observer.next(response);
      } else {
        observer.next(null);
      }
      observer.complete();
    }).pipe(
      map((response: responseType) => {
        if (response?.body.token) {
          let res = JSON.stringify(response.body.token);
          localStorage.setItem('JWT_Token', res);
          return true;
        }
        return false;
      })
    );
  }

  logout() {
    localStorage.removeItem('JWT_Token');
  }

  isLoggedIn() {
    const token = localStorage.getItem('JWT_Token');
    if (!token) return false;
    // const jwtHelper = new JwtHelperService();
    // const decodedToken = jwtHelper.decodeToken(token);
    const expirationDate = this.jwtHelper.getTokenExpirationDate(token);
    const isExpired = this.jwtHelper.isTokenExpired(token);
    console.log(expirationDate, isExpired);
    return !isExpired;
  }

  currentUser() {
    const token = localStorage.getItem('JWT_Token');
    if (!token) return false;
    // const jwtHelper = new JwtHelperService();
    const decodedToken = this.jwtHelper.decodeToken(token);
    console.log(decodedToken);
    return decodedToken;
  }
}
