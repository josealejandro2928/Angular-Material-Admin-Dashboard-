import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sample2Component } from './sample2/sample2.component';

const routes: Routes = [
  {
    path: '',
    component: Sample2Component,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sample2RoutingModule { }
