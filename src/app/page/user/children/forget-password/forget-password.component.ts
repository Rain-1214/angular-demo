import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NzNotificationService, NzMessageService } from 'ng-zorro-antd';

import { UserService } from '../../../../api/user.service';
import { Router } from '@angular/router';
import { clearInterval, setTimeout } from 'timers';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  forgetPassword: FormGroup;
  email: string;

  stepFlag = 0;
  buttonLoad = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private nzNotificationService: NzNotificationService,
    private nzMessageService: NzMessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.creatFormGroup();
    this.stepFlag = 1;
  }

  creatFormGroup() {
    this.forgetPassword = this.fb.group({
      username: [ null, Validators.required ],
      code: [ null, Validators.required ],
      password: [ null, Validators.required ],
      passwordConfirm: [ null, this.confirmPassword ]
    });
  }

  submitUsername() {
    const usernameControl = this.forgetPassword.controls['username'];
    if (usernameControl.valid) {
      this.buttonLoad = true;
      this.userService.forgetPassword(usernameControl.value).subscribe(res => {
        if (res.stateCode === 1) {
          this.email = res.data;
          this.stepFlag = 2;
        } else {
          this.nzNotificationService.create('error', '有一个问题', res.message);
        }
        this.buttonLoad = false;
      });
    }
  }

  checkCode() {
    const codeControl = this.forgetPassword.controls['code'];
    if (codeControl.valid) {
      this.buttonLoad = true;
      this.userService.checkForgetPassCode(codeControl.value).subscribe(res => {
        if (res.stateCode === 1) {
          this.stepFlag = 3;
        } else {
          this.nzNotificationService.create('error', '有一个问题', res.message);
        }
      });
    }
  }

  setNewPass() {
    const password = this.forgetPassword.controls['password'];
    const passwordConfirm = this.forgetPassword.controls['passwordConfirm'];
    if (password.valid && passwordConfirm.valid) {
      this.buttonLoad = true;
      this.userService.setNewPassword(password.value).subscribe(res => {
        if (res.stateCode === 1) {
          this.nzMessageService.create('success', '修改成功,3s后跳转到登录页面');
          setTimeout(() => {
            this.router.navigate(['/user/login']);
          }, 3000);
        } else {
          this.nzNotificationService.create('error', '有一个问题', res.message);
        }
      });
    }
  }

  confirmPassword = (control: FormControl): { [key: string]: any } => {
    if (!control.value) {
      return { 'required': true };
    }
    if (control.value !== this.forgetPassword.controls['password'].value) {
      return { 'accordance': true };
    } else {
      return null;
    }
  }

}
