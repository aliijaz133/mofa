import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { TotalApplicationComponent } from './total-application/total-application.component';
import { DoneApplicationComponent } from './done-application/done-application.component';
import { PendingApplicationComponent } from './pending-application/pending-application.component';
import { CancelledApplicationComponent } from './cancelled-application/cancelled-application.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { SettingComponent } from './setting/setting.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ExportAsModule } from 'ngx-export-as';
@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    UpdatePasswordComponent,
    TotalApplicationComponent,
    DoneApplicationComponent,
    PendingApplicationComponent,
    CancelledApplicationComponent,
    SettingComponent,
    AppointmentComponent
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ToastrModule.forRoot(),
    MatPaginatorModule,
    MatTableModule,
    ExportAsModule
  ]
})
export class AdminDashboardModule { }
