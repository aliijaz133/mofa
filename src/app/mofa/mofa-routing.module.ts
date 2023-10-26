import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeSlotComponent } from './time-slot/time-slot.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { MofaComponent } from './mofa/mofa.component';

const routes: Routes = [
  {
    path: "home", component: MofaComponent
  },
  {
    path: "time-slot", component: TimeSlotComponent
  },
  {
    path: 'appointment-form', component: AppointmentFormComponent
  },
  {
    path: "**", redirectTo: "home", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MofaRoutingModule { }
