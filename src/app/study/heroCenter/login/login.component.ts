import { Component, OnInit } from '@angular/core';
import { AuthService } from '../admin/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  isLogin: boolean;
  username: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshIsLogin();
  }

  login(): void {
    this.authService.login(this.username, this.password).subscribe(res => {
      if (res) {
        if (this.authService.redirect) {
          console.log(this.authService);
          this.router.navigate([this.authService.redirect]);
        }
        this.refreshIsLogin();
      }
    });
  }

  logout() {
    this.authService.logout();
    this.refreshIsLogin();
  }

  refreshIsLogin() {
    this.isLogin = this.authService.isLogin;
  }

}
