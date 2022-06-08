import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoClientesComponent } from './pages/listado-clientes/listado-clientes.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from '../shared/home/home.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { BuscarClienteComponent } from './pages/buscar-cliente/buscar-cliente.component';
import { FormReservaHoraComponent } from '../reserva-hora/form-reserva-hora/form-reserva-hora.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    children: [
      { 
        path: 'listado-mascotas',
        component: ListadoClientesComponent
      },
      { 
        path: 'crear-mascota',
        component: FormularioComponent
      },
      { 
        path: 'crear-mascota/:id',
        component: FormularioComponent
      },
      {
        path: 'buscar-mascota',
        component: BuscarClienteComponent
      },
      // { 
      //   path: '**',
      //   redirectTo: 'listado-mascotas'
      // },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
