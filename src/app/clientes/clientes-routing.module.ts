import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoClientesComponent } from './pages/listado-clientes/listado-clientes.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from '../shared/home/home.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { BuscarClienteComponent } from './pages/buscar-cliente/buscar-cliente.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    children: [
      { 
        path: 'listado-clientes',
        component: ListadoClientesComponent
      },
      { 
        path: 'crear-cliente',
        component: FormularioComponent
      },
      { 
        path: 'crear-cliente/:id',
        component: FormularioComponent
      },
      {
        path: 'buscar-cliente',
        component: BuscarClienteComponent
      },
      { 
        path: '**',
        redirectTo: 'listado-clientes'
      },
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
