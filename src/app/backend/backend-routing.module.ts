import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'sample',
        loadChildren: '../appPages/sample/sample.module#SampleModule',
      },
      {
        path: 'sample1',
        loadChildren: '../appPages/sample2/sample2.module#Sample2Module',
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'sample'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackendRoutingModule { }
