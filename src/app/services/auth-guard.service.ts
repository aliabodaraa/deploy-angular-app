import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard {
  constructor(private router: Router, private authService: AuthService) {}
  canActivate(previousFailedUrl: string) {
    console.log('AuthGuard');

    //state param will get access to the url that the user try to access it before logining
    if (this.authService.isLoggedIn()) return true;

    this.router.navigate(['/login'], {
      queryParams: { routeUrl: previousFailedUrl },
    });
    console.log(previousFailedUrl);

    return false;
  }
}
