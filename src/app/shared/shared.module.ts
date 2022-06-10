import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { PaginaBienvenidaComponent } from './inicio/pagina-bienvenida/pagina-bienvenida.component'; 

@NgModule({
  declarations: [
    HomeComponent,
    PaginaBienvenidaComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    RouterModule
  ], exports:[
    RouterModule
  ]
})
export class SharedModule { }
