import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample/sample.component';
import { SampleRoutingModule } from './sample-routing.module';

// --------- COMMON MODULES TO ALL APP ----------
import { ThemeCommonModulesModule } from 'src/app/shared/theme-common-modules/theme-common-modules.module';
// ----------------------------------------------

@NgModule({
  imports: [
    CommonModule,
    SampleRoutingModule,
    ThemeCommonModulesModule
  ],
  declarations: [SampleComponent]
})
export class SampleModule { }
