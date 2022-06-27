import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAdopcionComponent } from './list-adopcion/list-adopcion.component';
import { FormAdopcionComponent } from './form-adopcion/form-adopcion.component';
import { AdopcionRoutingModule } from './adocion-routing.module';
import { CreateAdopcionComponent } from './create-adopcion/create-adopcion.component';

@NgModule({
  declarations: [
    ListAdopcionComponent,
    FormAdopcionComponent,
    CreateAdopcionComponent,
  ],
  imports: [
    CommonModule,
    AdopcionRoutingModule
  ]
})
export class AdopcionModule { }
