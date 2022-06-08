import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from '../shared/home/home.component';
import { FormVeterinarioComponent } from './form-veterinario/form-veterinario.component';
import { ListadoVeterinarioComponent } from './listado-veterinario/listado-veterinario.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    children: [
      { 
        path: 'crear-veterinario',
        component: FormVeterinarioComponent
      },
      { 
        path: 'listado-veterinarios',
        component: ListadoVeterinarioComponent
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
export class VeterinarioRoutingModule { }
