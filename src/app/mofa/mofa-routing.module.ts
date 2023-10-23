import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';

const routes: Routes = [
  {
    path: "appointment-form", component: AppointmentFormComponent
  },
  {
    path: "**", redirectTo: "appointment-form", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MofaRoutingModule { }
