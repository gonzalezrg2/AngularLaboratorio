import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Layout1Component } from './layouts/layout1/layout1.component';
import { GraficosComponent } from './pages/graficos/graficos.component';
import { GrillasComponent } from './pages/grillas/grillas.component';

const rutasSite: Routes = [
  { path: 'graficos', component: GraficosComponent },
  { path: 'grillas', component: GrillasComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'graficos' }
];

const routes: Routes = [
  {
    path: 'site',
    component: Layout1Component,
    children: rutasSite
  },
  { path: '**', pathMatch: 'full', redirectTo: 'site' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
