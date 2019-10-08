import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMaskModule } from 'ngx-mask';
import { BreadcrumdComponent } from './breadcrumd/breadcrumd.component';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { TranslateModule } from '@ngx-translate/core';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ThemeCommonModulesModule } from 'src/app/shared/theme-common-modules/theme-common-modules.module';
import { NavService } from './nav.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    FlexLayoutModule,
    ThemeCommonModulesModule,
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
