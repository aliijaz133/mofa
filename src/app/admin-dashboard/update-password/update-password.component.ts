import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {

  showLoader = false

  passwordUpdating: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.passwordUpdating = this.fb.group({
      userCurrentPwd: new FormControl('', [Validators.required]),
      newPwd: new FormControl('', [
        Validators.required, Validators.minLength(8),
        Validators.pattern(/^(?=.*\d)(?=.*[a-zA-Z]).{4,}$/)
      ]),
      confirmNewPwd: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*\d)(?=.*[a-zA-Z]).{4,}$/)]),
    });
  }

  ngOnInit(): void {

    this.showLoader = true;

    setTimeout(() => {
      this.showLoader = false;
    },2000)

  }

  userPasswordUpdating() {
    console.log(this.passwordUpdating.value);

    const userNewPwdControl = this.passwordUpdating.get('newPwd');
    const userConfirmPwdControl = this.passwordUpdating.get('confirmNewPwd');
    const currentPwd = this.passwordUpdating.get('userCurrentPwd');

    if (userNewPwdControl && userConfirmPwdControl && currentPwd) {
      const userNewPwd = userNewPwdControl.value;
      const userConfirmPwd = userConfirmPwdControl.value;
      const currentPassword = currentPwd.value;

      if (userNewPwd !== userConfirmPwd) {
        console.log("Your password should match.");
        this.toastr.warning("Your password should match.");
      }
      else if (userNewPwd === currentPassword || userConfirmPwd === currentPassword) {
        this.toastr.warning("Don't use your old password.");
      }
      else {
        this.toastr.success("Password changed successfully.");
      }
    }
  }
}
