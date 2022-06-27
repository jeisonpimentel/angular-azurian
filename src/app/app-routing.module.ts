import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeterinarioModule } from './veterinario/veterinario.module';
import { AdopcionModule } from './adopcion/adopcion.module';

const routes: Routes = [
  {path: 'petApp',   loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesModule )},
  {path: 'petApp',   loadChildren: () => import('./reserva-hora/reserva-hora.module').then( m => m.ReservaHoraModule )},
  {path: 'petApp',   loadChildren: () => import('./sucursal/sucursal.module').then( m => m.SucursalModule )},
  {path: 'petApp',   loadChildren: () => import('./veterinario/veterinario.module').then( m => m.VeterinarioModule )},
  {path: 'petApp',   loadChildren: () => import('./perfil-usuario/perfil-usuario.module').then( m => m.PerfilUsuarioModule )},
  {path: 'petApp',   loadChildren: () => import('./login/login.module').then( m => m.LoginModule )},
  {path: 'petApp',   loadChildren: () => import('./adopcion/adopcion.module').then( m => AdopcionModule )},
  {path: '**',  redirectTo: 'petApp'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
