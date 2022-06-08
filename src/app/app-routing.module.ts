import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'petApp',   loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesModule )},
  {path: 'petApp',   loadChildren: () => import('./reserva-hora/reserva-hora.module').then( m => m.ReservaHoraModule )},
  {path: '**',  redirectTo: 'petApp'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
