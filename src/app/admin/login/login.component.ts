import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hidePassword!: boolean;
  loginForm: FormGroup;
  menus: any[];
  hide = true;

  showLoader = false;

  email: string = "aliijaz@gmail.com";
  password: string = "abcd1234";

  constructor(private fb: FormBuilder, private titlePage: Title, private router: Router, private toastr: ToastrService, private dialog: MatDialog) {
    this.loginForm = this.fb.group({
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userPwd: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
    this.menus = [];
    this.titlePage.setTitle('Mofa Sign-In');
  }

  ngOnInit() {
    this.showLoader = true;
    setTimeout(() => {
      this.showLoader = false;
    }, 2000);
  }




  userLogin() {
    if (this.loginForm.value.userEmail === this.email && this.loginForm.value.userPwd === this.password) {
      this.router.navigate(['/mofa-admin/user-dashboard'], { queryParams: this.email.split(this.loginForm.value.userEmail) });
      this.toastr.success("Successfully Logged In")
    }
    else {
      this.toastr.error("Login Failed");
    }
  }


  openDialog() {

    this.dialog.open(ForgotPasswordComponent);
  }

  onForgotPassword() {
    this.router.navigate(['/admin/forgot-password']);
  }
}
