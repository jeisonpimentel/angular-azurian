import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from '../shared/home/home.component';
import { FormSucursalComponent } from './form-sucursal/form-sucursal.component';
import { ListaSucursalComponent } from './lista-sucursal/lista-sucursal.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    children: [
      { 
        path: 'crear-sucursal',
        component: FormSucursalComponent
      },
      { 
        path: 'listado-sucursal',
        component: ListaSucursalComponent
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
export class SucursalRoutingModule { }
