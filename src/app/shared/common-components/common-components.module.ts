import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMaskModule } from 'ngx-mask';
import { BreadcrumdComponent } from './breadcrumd/breadcrumd.component';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { NavService } from './nav.service';
import { TranslateModule } from '@ngx-translate/core';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialComponentsModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    BreadcrumdComponent,
    MenuListItemComponent,
  ],
  declarations: [
    BreadcrumdComponent,
    MenuListItemComponent,
    ConfirmationDialogComponent
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  providers: [NavService]
})
export class CommonComponentsModule {
  constructor() { }
}
