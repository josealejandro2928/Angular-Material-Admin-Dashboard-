import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample/sample.component';
import { SampleRoutingModule } from './sample-routing.module';

// --------- COMMON MODULES TO ALL APP ----------
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexModule } from '@angular/flex-layout';
import { MaterialComponentsModule } from '../shared/material-components/material-components.module';
// ----------------------------------------------

@NgModule({
  imports: [
    CommonModule,
    SampleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FlexModule,
    MaterialComponentsModule
  ],
  declarations: [SampleComponent]
})
export class SampleModule { }
