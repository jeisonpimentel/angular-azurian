import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoClientesComponent } from './pages/listado-clientes/listado-clientes.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from '../shared/home/home.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { BuscarClienteComponent } from './pages/buscar-cliente/buscar-cliente.component';
import { FormularioUsuarioComponent } from './pages/usuario-formulario/formulario-usuario/formulario-usuario.component';
import { ConsultaVeterinariaComponent } from './pages/consulta-veterinaria/consulta-veterinaria/consulta-veterinaria.component';
import { CartillaMedicaComponent } from './pages/cartilla-medica/cartilla-medica.component';

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
      {
        path: 'crear-usuario',
        component: FormularioUsuarioComponent
      },
      {
        path: 'consulta-veterinaria',
        component: ConsultaVeterinariaComponent
      },
      {
        path: 'cartilla-medica',
        component: CartillaMedicaComponent
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
