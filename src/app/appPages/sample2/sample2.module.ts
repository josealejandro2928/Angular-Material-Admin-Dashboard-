import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sample2Component } from './sample2/sample2.component';
import { Sample2RoutingModule } from './sample2-routing.module';
// --------- COMMON MODULES TO ALL APP ----------
import { ThemeCommonModulesModule } from 'src/app/shared/theme-common-modules/theme-common-modules.module';
// ----------------------------------------------

@NgModule({
  imports: [
    CommonModule,
    Sample2RoutingModule,
    ThemeCommonModulesModule
  ],
  declarations: [Sample2Component]
})
export class Sample2Module { }
