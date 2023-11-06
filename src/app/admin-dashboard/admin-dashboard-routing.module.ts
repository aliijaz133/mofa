import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  {
    path: 'user-dashboard', component: DashboardComponent
  },
  {
    path: 'change-password', component: UpdatePasswordComponent
  },
  {
    path: 'setting', component: SettingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
