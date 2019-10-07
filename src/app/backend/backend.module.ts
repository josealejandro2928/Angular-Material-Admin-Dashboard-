import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendRoutingModule } from './backend-routing.module';
import { LayoutComponent } from './layout/layout.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialComponentsModule } from '../shared/material-components/material-components.module';
import { CommonComponentsModule } from '../shared/common-components/common-components.module';
import { NgProgressModule } from 'ngx-progressbar';
import { PanelNotificationsComponent } from './layout/panel-notifications/panel-notifications.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BackendRoutingModule,
    FlexLayoutModule,
    NgProgressModule,
    MaterialComponentsModule,
    CommonComponentsModule
  ],
  declarations: [
    LayoutComponent,
    PanelNotificationsComponent
  ],
  entryComponents: [
    PanelNotificationsComponent
  ]


})
export class BackendModule {
}
