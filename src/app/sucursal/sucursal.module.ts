import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FormSucursalComponent } from './form-sucursal/form-sucursal.component';
import { ListaSucursalComponent } from './lista-sucursal/lista-sucursal.component';
import { SucursalRoutingModule } from './sucursal-routing.module';

@NgModule({
  declarations: [
    FormSucursalComponent,
    ListaSucursalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule,
    SucursalRoutingModule
  ], exports:[
    RouterModule
  ]
})
export class SucursalModule { }
