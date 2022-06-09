import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from '../shared/home/home.component';
import { FormReservaHoraComponent } from './form-reserva-hora/form-reserva-hora.component';
import { ListHorasReservadasComponent } from './list-horas-reservadas/list-horas-reservadas.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    children: [
      { 
        path: 'reserva-hora',
        component: FormReservaHoraComponent
      },
      { 
        path: 'horas-agendadas',
        component: ListHorasReservadasComponent
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
export class ReservaHoraRoutingModule { }
