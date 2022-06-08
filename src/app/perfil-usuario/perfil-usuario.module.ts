import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { PerfilUsuarioRoutingModule } from './perfil-usuario-routing.module';
import { MantenedorPerfilComponent } from './mantenedor-perfil/mantenedor-perfil.component';

@NgModule({
  declarations: [
    MantenedorPerfilComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule,
    PerfilUsuarioRoutingModule,
  ], exports:[
    RouterModule
  ]
})
export class PerfilUsuarioModule { }
