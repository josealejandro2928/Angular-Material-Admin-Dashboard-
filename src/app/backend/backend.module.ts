import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendRoutingModule } from './backend-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { CommonComponentsModule } from '../shared/common-components/common-components.module';
import { NgProgressModule } from 'ngx-progressbar';
import { PanelNotificationsComponent } from './layout/panel-notifications/panel-notifications.component';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbService } from './layout/breadcrumd/service/breadcrumb.service';
import { BreadcrumdComponent } from './layout/breadcrumd/breadcrumd.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
////////// --------MATERIAL MODULES------- /////////////////////////
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';

///////////////////////////////////////////////////////////////////
@NgModule({
  imports: [
    CommonModule,
    BackendRoutingModule,
    NgProgressModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    TranslateModule,
    CommonComponentsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatBadgeModule,
    MatChipsModule,
    MatTooltipModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule,
    MatSidenavModule

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
