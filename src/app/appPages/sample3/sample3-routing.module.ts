import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sample3Component } from './sample3/sample3.component';

const routes: Routes = [
  {
    path: '',
    component: Sample3Component,
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
export class Sample3RoutingModule { }
