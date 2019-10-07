import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule,
  PreloadAllModules
} from '@angular/router';

import { AppComponent } from './app.component';
import { AuthenticationGuard } from './authentication/authentication.guard';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: '../app/authentication/authentication.module#AuthenticationModule',
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'auth',
        loadChildren: '../app/authentication/authentication.module#AuthenticationModule',
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'backend',
        loadChildren: '../app/backend/backend.module#BackendModule',
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
