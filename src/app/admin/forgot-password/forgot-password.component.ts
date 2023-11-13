import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  showLoader = false;

  userEmail: FormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private dialog: MatDialog, private toastr: ToastrService) {

  }

  ngOnInit() {

    this.showLoader = true;

    setTimeout(() => {
      this.showLoader = false;
    }, 1000);

  }

  submitEmail() {

    console.log("Email: ", this.userEmail.value);
    this.dialog.closeAll();
    this.toastr.info("Check your email for password recovery.");
  }




}
