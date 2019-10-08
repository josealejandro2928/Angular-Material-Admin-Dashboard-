import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { ThemeCommonModulesModule } from '../shared/theme-common-modules/theme-common-modules.module';



@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ThemeCommonModulesModule
  ],
  declarations: [
    AuthenticationComponent,
    LoginComponent
  ]
})
export class AuthenticationModule {
}
