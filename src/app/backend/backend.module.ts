import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendRoutingModule } from './backend-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { CommonComponentsModule } from '../shared/common-components/common-components.module';
import { NgProgressModule } from 'ngx-progressbar';
import { PanelNotificationsComponent } from './layout/panel-notifications/panel-notifications.component';
import { ThemeCommonModulesModule } from '../shared/theme-common-modules/theme-common-modules.module';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbService } from './layout/breadcrumd/service/breadcrumb.service';
import { BreadcrumdComponent } from './layout/breadcrumd/breadcrumd.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeCommonModulesModule,
    BackendRoutingModule,
    NgProgressModule,
    TranslateModule,
    CommonComponentsModule
  ],
  declarations: [
    LayoutComponent,
    PanelNotificationsComponent,
    BreadcrumdComponent
  ],
  entryComponents: [
    PanelNotificationsComponent
  ],
  providers: [BreadcrumbService]


})
export class BackendModule {
}
