import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { SettingComponent } from './setting/setting.component';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
  {
    path: 'user-dashboard', component: DashboardComponent
  },
  {
    path: 'change-password', component: UpdatePasswordComponent
  },
  {
    path: 'setting', component: SettingComponent
  },
  {
    path: 'appointment', component: AppointmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
