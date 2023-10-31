import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MofaRoutingModule } from './mofa-routing.module';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MofaComponent } from './mofa/mofa.component';
import { TimeSlotComponent } from './time-slot/time-slot.component';
import { LoaderComponent } from './loader/loader.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppointmentFormComponent,
    MofaComponent,
    TimeSlotComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    MofaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    ToastrModule.forRoot(),
    MatTooltipModule,
    HttpClientModule,
  ],

  providers: [provideToastr()]
})
export class MofaModule { }
