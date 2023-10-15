import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AdminAuthGuard {
  constructor(private router: Router, private authService: AuthService) {}
  canActivate() {
    console.log('AdminAuthGuard');

    let user = this.authService.currentUser();
    if (user && user.admin) return true;
    this.router.navigate(['/no-access']);
    return false;
  }
}
