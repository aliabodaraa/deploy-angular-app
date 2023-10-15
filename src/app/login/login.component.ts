import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  ActivatedRoute,
} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  invalidLogin: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  signIn(credentials: any) {
    this.authService.login(credentials).subscribe({
      next: (result: boolean) => {
        console.log(result);
        if (result) {
          let routeUrl = this.route.snapshot.queryParams['routeUrl'];
          this.router.navigate([routeUrl || '/']);
        } else this.invalidLogin = true;
      },
      complete: () => console.log('Observable completed'),
    });
  }
}
