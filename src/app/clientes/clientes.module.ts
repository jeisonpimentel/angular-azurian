import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

import { ClientesRoutingModule } from './clientes-routing.module';
import { ListadoClientesComponent } from './pages/listado-clientes/listado-clientes.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { BuscarClienteComponent } from './pages/buscar-cliente/buscar-cliente.component'; 
import { CustomerService } from './services/customerservice';
import { FormularioUsuarioComponent } from './pages/usuario-formulario/formulario-usuario/formulario-usuario.component';

@NgModule({
  declarations: [
    ListadoClientesComponent,
    FormularioComponent,
    BuscarClienteComponent,
    FormularioUsuarioComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule
  ], exports:[
    RouterModule
  ], providers: [
    CustomerService,
  ]
})
export class ClientesModule { }
