import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sample3Component } from './sample3/sample3.component';
import { Sample3RoutingModule } from './sample3-routing.module';
// --------- COMMON MODULES TO ALL APP ----------
import { ThemeCommonModulesModule } from 'src/app/shared/theme-common-modules/theme-common-modules.module';
// ----------------------------------------------

@NgModule({
  imports: [
    CommonModule,
    Sample3RoutingModule,
    ThemeCommonModulesModule
  ],
  declarations: [Sample3Component]
})
export class Sample3Module { }
