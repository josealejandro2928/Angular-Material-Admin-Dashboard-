import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialComponentsModule } from './material-components/material-components.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FlexModule,
    FlexLayoutModule,
    MaterialComponentsModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    FlexModule,
    MaterialComponentsModule,
    FlexLayoutModule
  ],
  declarations: []
})
export class ThemeCommonModulesModule { }
