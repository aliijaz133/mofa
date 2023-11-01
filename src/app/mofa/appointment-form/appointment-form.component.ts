import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/compat/firestore';




@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss'],
})
export class AppointmentFormComponent implements OnInit {

  selectedDate: Date = new Date();
  selectedTime: string = '';

  showLoader = false;

  dataSaving: string = "https://mofa-pak-default-rtdb.firebaseio.com";

  showEducationCheckboxes: boolean = false;
  showMarriageCheckboxes: boolean = false;
  showMedicalCheckboxes: boolean = false;
  showCorporationCheckboxes: boolean = false;
  showOverseasCheckboxes: boolean = false;
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService, private activatedRoute: ActivatedRoute, private router: Router, private http: HttpClient, private db: AngularFirestore) {
    this.userForm = this.fb.group({
      userFName: new FormControl('', [Validators.required]),
      userLName: new FormControl('', [Validators.required]),
      userContact: new FormControl('', [Validators.required, Validators.minLength(12)]),
      userCnic: new FormControl('', [Validators.required, Validators.minLength(14)]),
      submitterType: new FormControl('', [Validators.required]),
      selectedDate: new FormControl('', [Validators.required]),
      selectedTime: new FormControl('', [Validators.required]),
    });

    const userCnic = this.userForm.get('userCnic')?.value;

    this.activatedRoute.queryParams.subscribe((params) => {
      this.selectedDate = new Date(params['selectedDate']);
      this.selectedTime = params['selectedTime'];

    });

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
    const formData = this.userForm.value;
    const selectedTime = this.selectedTime;
    const selectedDate = moment(this.selectedDate).format('DD-MMM-YYYY');

    const dataToSubmit = {
      ...formData,
      selectedTime,
      selectedDate,
    };


    this.db.collection('Mofa Form').add(dataToSubmit).then(() => {
      this.toastr.success('', 'Successfully Submitted');
      this.userForm.reset();
      this.showLoader = true;

      setTimeout(() => {
        this.showLoader = false;
        this.router.navigate(['/mofa/home']);
      }, 3000);

      this.toastr.info('This site is automatically reloaded.');
    });

  }


  ngOnInit(): void {

    let date = moment(this.selectedDate).format('DD-MMM-YYYY');
    this.userForm.controls['selectedDate'].setValue(date)
    this.userForm.controls['selectedTime'].setValue(this.selectedTime)
  }

}
