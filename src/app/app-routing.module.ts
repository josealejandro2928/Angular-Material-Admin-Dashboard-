import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule,
  PreloadAllModules
} from '@angular/router';

import { AppComponent } from './app.component';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { BackendGuard } from './backend/backend.guard';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../app/authentication/authentication.module').then(m => m.AuthenticationModule),
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'auth',
        loadChildren: () => import('../app/authentication/authentication.module').then(m => m.AuthenticationModule),
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'backend',
        loadChildren: () => import('../app/backend/backend.module').then(m => m.BackendModule),
        canActivate: [BackendGuard],
        canLoad: [BackendGuard]
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
