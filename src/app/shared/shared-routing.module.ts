import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaBienvenidaComponent } from './inicio/pagina-bienvenida/pagina-bienvenida.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    children: [
      { 
        path: '',
        component: PaginaBienvenidaComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
