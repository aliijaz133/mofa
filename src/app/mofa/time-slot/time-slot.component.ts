import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.scss']
})
export class TimeSlotComponent implements OnInit {
  timeSlots: string[] = [];
  selectedTime: string | null = null;
  showLoader = false;
  selectedDate: Date = new Date();


  constructor(private router: Router, private route: ActivatedRoute, private toastr: ToastrService) {
    this.generateTimeSlots();
    this.route.queryParams.subscribe((params) => {
      this.selectedDate = new Date(params['selectedDate']);
      const selectedDateStr = params['selectedDate'];
if (selectedDateStr) {
  const date = new Date(selectedDateStr);
  if (!isNaN(date.getTime())) {
    // It's a valid date string
    this.selectedDate = date;
  } else {
    // Handle the case when it's not a valid date
    console.error('Invalid date format:', selectedDateStr);
  }
} else {
  // Handle the case when 'selectedDate' is not provided
  console.error('selectedDate is missing in queryParams');
}

    });
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
        queryParams: {
          selectedTime: this.selectedTime,
          selectedDate: this.selectedDate
        }
      });
  
      this.toastr.info('Appointment Form');
    });
  }
  


  goToCalendar() {
    this.router.navigate(['/home/mofa']);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const selectedDateStr = params['selectedDate'];
      if (selectedDateStr) {
        const date = new Date(selectedDateStr);
        if (!isNaN(date.getTime())) {

          this.selectedDate = date;
        } else {

          console.error('Invalid date format:', selectedDateStr);
        }
      } else {
        console.error('selectedDate is missing in queryParams');
      }
      

      this.selectedTime = params['selectedTime'];
    });
  }
}