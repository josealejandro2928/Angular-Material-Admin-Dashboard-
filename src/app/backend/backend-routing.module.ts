import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'path1',
        loadChildren: () => import('../appPages/sample/sample.module').then(m => m.SampleModule),
      },
      {
        path: 'path2',
        loadChildren: () => import('../appPages/sample2/sample2.module').then(m => m.Sample2Module),
      },
      {
        path: 'path3',
        loadChildren: () => import('../appPages/sample3/sample3.module').then(m => m.Sample3Module),
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
