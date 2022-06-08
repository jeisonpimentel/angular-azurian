import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FormReservaHoraComponent } from './form-reserva-hora/form-reserva-hora.component';
import { ListHorasReservadasComponent } from './list-horas-reservadas/list-horas-reservadas.component';
import { ReservaHoraRoutingModule } from './reserva-hora-routing.module';

@NgModule({
  declarations: [
  
    FormReservaHoraComponent,
    ListHorasReservadasComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule,
    ReservaHoraRoutingModule
  ], exports:[
    RouterModule
  ]
})
export class ReservaHoraModule { }
