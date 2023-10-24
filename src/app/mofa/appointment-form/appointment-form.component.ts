import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss'],
})
export class AppointmentFormComponent implements OnInit {


  showEducationCheckboxes: boolean = false;
  showMarriageCheckboxes: boolean = false;
  showMedicalCheckboxes: boolean = false;
  showCorporationCheckboxes: boolean = false;
  showOverseasCheckboxes: boolean = false;
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.userForm = this.fb.group({
      userFName: new FormControl('', [Validators.required]),
      userLName: new FormControl('', [Validators.required]),
      userContact: new FormControl('', [Validators.required, Validators.minLength(12)]),
      userCnic: new FormControl('', [Validators.required, Validators.minLength(14)]),
      submitterType: new FormControl('', [Validators.required]),
    });

    const userCnic = this.userForm.get('userCnic')?.value;
  }

  formatPhoneNumber(event: any) {
    const input = event.target.value.replace(/\D/g, '');
    const match = input.match(/^(\d{0,4})(\d{0,7})/);

    if (match) {
      const formatted = match[1] + (match[1] && match[2] ? ' ' : '') + match[2];
      event.target.value = formatted;
    }
  }


  formatCnicNumber(event: any) {
    const input = event.target.value.replace(/\D/g, '');
    const match = input.match(/^(\d{0,5})(\d{0,7})(\d{0,1})/);

    if (match) {
      const formatted = match[1] + (match[1] && match[2] ? '-' : '') + match[2] + (match[2] && match[3] ? '-' : '') + match[3];
      event.target.value = formatted;
    }
  }

  toggleEducationCheckboxes() {
    this.showEducationCheckboxes = !this.showEducationCheckboxes;
  }

  toggleMarriageCheckboxes() {
    this.showMarriageCheckboxes = !this.showMarriageCheckboxes;
  }

  toggleMedicalCheckboxes() {
    this.showMedicalCheckboxes = !this.showMedicalCheckboxes;
  }

  toggleCorporationCheckboxes() {
    this.showCorporationCheckboxes = !this.showCorporationCheckboxes;
  }

  toggleOverseasCheckboxes() {
    this.showOverseasCheckboxes = !this.showOverseasCheckboxes;
  }


  userData() {
    console.log(this.userForm.value)

    this.toastr.success('', 'Successfully Submitted')

    this.userForm.reset()
  }

  ngOnInit(): void {

  }

}