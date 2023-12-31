import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mofa',
  templateUrl: './mofa.component.html',
  styleUrls: ['./mofa.component.scss'],
})
export class MofaComponent {
  showLoader = false;
  selectedDate: Date = new Date();
  daysOfWeek: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  weeks: Date[][] = [];

  constructor(private router: Router, private toastr: ToastrService) {
    this.generateCalendar();
  }

  generateCalendar() {
    const year = this.selectedDate.getFullYear();
    const month = this.selectedDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const day = new Date(firstDay);

    this.weeks = [];
    while (day <= lastDay) {
      let week: Date[] = [];
      for (let i = 0; i < 7; i++) {
        week.push(new Date(day));
        day.setDate(day.getDate() + 1);
      }
      this.weeks.push(week);
    }
  }

  selectDate(date: Date) {
    if (this.isDateDisabled(date)) {
      return;
    }

    this.selectedDate = date;
    this.generateCalendar();

    this.showLoader = true;

    setTimeout(() => {
      this.showLoader = false;
      this.router.navigate(['/mofa/time-slot'], {
        queryParams: {
          selectedDate: this.selectedDate.toISOString()
        }
      });
    }, 2000);
  }

  isDateSelected(date: Date): boolean {
    return date.toDateString() === this.selectedDate.toDateString();
  }

  isDateDisabled(date: Date): boolean {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    // return date < currentDate || date.getDay() === 0 || date.getDay() === 6;
    return date < currentDate;
  }

  adminLogin() {
    this.router.navigate(['/admin-login/login']);
    console.log("Login Page");
  }
}
