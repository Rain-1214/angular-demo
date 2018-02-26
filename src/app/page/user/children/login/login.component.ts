import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

import { UserService } from '../../../../api/user.service';
import { AjaxReturn } from '../../../../entity/AjaxReturn';
import { CheckAuthService } from '../../../../api/CheckAuth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private userService: UserService,
    private checkAuth: CheckAuthService,
    private route: Router
  ) {}

  submitForm() {
    if (this.validateForm.valid) {
      this.errorMessage = '';
      const { username, password } = this.validateForm.value;
      this.userService.login(username, password).subscribe(res => {
        console.log(res);
        if (res.stateCode === 1) {
          this.checkAuth.isLogin = true;
          console.log(this.checkAuth.isLogin);
          this.route.navigate(['/student']);
        } else {
          this.errorMessage = res.message;
        }
      });
    }
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      username: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
    });
  }

}
