import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialComponentsModule } from './material-components/material-components.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FlexModule,
    MaterialComponentsModule
  ],
  exports: [
    ReactiveFormsModule, FormsModule,
    FlexModule, MaterialComponentsModule
  ],
  declarations: []
})
export class ThemeCommonModulesModule { }
