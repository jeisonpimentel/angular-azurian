import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { VeterinarioRoutingModule } from './veterinario-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule,
    VeterinarioRoutingModule,
    ReactiveFormsModule
  ], exports:[
    RouterModule
  ]
})
export class VeterinarioModule { }
