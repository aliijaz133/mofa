import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MofaRoutingModule } from './mofa-routing.module';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideToastr } from 'ngx-toastr';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MofaComponent } from './mofa/mofa.component';



@NgModule({
  declarations: [
    AppointmentFormComponent,
    MofaComponent,
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
  ],
  providers: [provideToastr()]
})
export class MofaModule { }
