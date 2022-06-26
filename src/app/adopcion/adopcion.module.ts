import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAdopcionComponent } from './list-adopcion/list-adopcion.component';
import { FormAdopcionComponent } from './form-adopcion/form-adopcion.component';



@NgModule({
  declarations: [
    ListAdopcionComponent,
    FormAdopcionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdopcionModule { }
