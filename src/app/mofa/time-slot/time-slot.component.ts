import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.scss']
})
export class TimeSlotComponent {
  timeSlots: string[] = [];
  selectedTime: string | null = null;

  showLoader = false;

  constructor(private router: Router, private toastr: ToastrService) {
    this.generateTimeSlots();
  }

  generateTimeSlots() {
    const startTime = new Date();
    startTime.setHours(9, 0, 0, 0);

    const endTime = new Date();
    endTime.setHours(13, 0, 0, 0);

    const interval = 2;

    while (startTime < endTime) {
      const formattedTime = this.formatTime(startTime);

      if (formattedTime !== this.selectedTime) {
        this.timeSlots.push(formattedTime);
      }

      startTime.setMinutes(startTime.getMinutes() + interval);
    }
  }

  formatTime(time: Date): string {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  setAppointment(selectedTime: string) {
    this.selectedTime = selectedTime;
    this.showLoader = true;

    setTimeout(() => {
      this.showLoader = false;

      this.router.navigate(['/mofa/appointment-form'], {
        queryParams: { selectedTime: this.selectedTime }
      });
    }, 2000);

    this.toastr.info('Appointment Form');
  }

}
