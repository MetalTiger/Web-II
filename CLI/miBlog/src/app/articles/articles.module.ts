import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{  path: '', component: ArticlesComponent }]; // Contendrá las rutas de los componentes del módulo

@NgModule({
  declarations: [
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    RouterModule.forChild(routes) // Metodo por parte del Framework para publicar las rutas de la variable routes
  ],
  exports: [RouterModule]
})
export class ArticlesModule { }
