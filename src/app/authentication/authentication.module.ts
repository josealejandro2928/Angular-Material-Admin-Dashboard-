import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialComponentsModule } from '../shared/material-components/material-components.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialComponentsModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AuthenticationComponent,
    LoginComponent
  ]
})
export class AuthenticationModule {
}
