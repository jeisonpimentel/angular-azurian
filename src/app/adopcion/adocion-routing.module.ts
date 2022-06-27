import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from '../shared/home/home.component';
import { FormAdopcionComponent } from './form-adopcion/form-adopcion.component';
import { ListAdopcionComponent } from './list-adopcion/list-adopcion.component';
import { CreateAdopcionComponent } from './create-adopcion/create-adopcion.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    children: [
      { 
        path: 'solicita-adopcion',
        component: FormAdopcionComponent
      },
      { 
        path: 'ver-adopciones',
        component: ListAdopcionComponent
      },
      { 
        path: 'crear-adopcion',
        component: CreateAdopcionComponent
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
export class AdopcionRoutingModule { }
