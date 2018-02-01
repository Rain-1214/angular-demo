import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { NzNotificationService } from 'ng-zorro-antd';
import { Observable } from 'rxjs/Observable';


import { UserService } from '../../../../api/user.service';
import { AjaxReturn } from '../../../../entity/AjaxReturn';
import { Verification } from '../../../../tool/verification';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register: FormGroup;
  errorMessage = '';
  getCodeFlag = true;
  getCodeButtonLoadFlag = false;
  getCodeText = '获取验证码';
  submitFlag = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private nzService: NzNotificationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.register = this.fb.group({
      username: [ null, [ Validators.required ], [ this.checkUsername ] ],
      password: [ null, [ Validators.required ] ],
      passwordConfirm: [ null, [this.confirmPassword] ],
      email: [ null, [ Validators.required, Verification.emailTest()] ],
      code: [ null, [ Validators.required ] ]
    });
  }

  checkUsername = (control: FormControl): Observable<{ [key: string]: any }> => {
    return this.userService.checkUsername(control.value).switchMap(res => {
      if (res.stateCode === 1) {
        return Observable.of(null);
      } else {
        return Observable.of({ 'repeat': true });
      }
    });
  }

  confirmPassword = (control: FormControl): { [key: string]: any } => {
    if (!control.value) {
      return { 'required': true };
    }
    if (control.value !== this.register.controls['password'].value) {
      return { 'accordance': true };
    } else {
      return null;
    }
  }

  getCode() {
    if (this.register.controls['email'].invalid) {
      this.nzService.create('warning', '提示', '请先填写正确的邮箱地址');
      return false;
    }
    if (this.getCodeFlag) {
      this.getCodeFlag = false;
      this.getCodeButtonLoadFlag = true;
      this.userService.getCode(this.register.controls['email'].value).subscribe(res => {
        if (res.stateCode === 1) {
          this.nzService.create('success', '验证码发送成功', '您的验证码发送成功,请到邮箱查看');
          this.refreshCodeButtonText();
        } else {
          this.nzService.create('error', '验证码发送失败', res.message);
          this.getCodeFlag = true;
        }
        this.getCodeButtonLoadFlag = false;
      });
    }
  }

  refreshCodeButtonText() {
    let tempTime = 10;
    const setIntervalId = setInterval(() => {
      if (tempTime <= 0) {
        clearTimeout(setIntervalId);
        this.getCodeText = '重新获取';
        this.getCodeFlag = true;
      } else {
        this.getCodeText = `${tempTime--}s后重试`;
      }
    }, 1000);
  }

  submitForm() {
    if (this.register.valid && !this.submitFlag) {
      this.submitFlag = true;
      this.userService.register(this.register.value).subscribe(res => {
        if (res.stateCode === 1) {
          this.nzService.create('success', 'success', '成功');
          // this.router.navigate(['/student']);
        } else {
          this.errorMessage = res.message;
        }
      });
    }
  }

}
