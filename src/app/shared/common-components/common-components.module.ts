import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { TranslateModule } from '@ngx-translate/core';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ThemeCommonModulesModule } from 'src/app/shared/theme-common-modules/theme-common-modules.module';
import { NavService } from './nav.service';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    ThemeCommonModulesModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    MenuListItemComponent,
    EditProfileComponent,
    ConfirmationDialogComponent
  ],
  declarations: [
    MenuListItemComponent,
    ConfirmationDialogComponent,
    EditProfileComponent
  ],
  entryComponents: [
    ConfirmationDialogComponent,
    EditProfileComponent
  ],
  providers: [NavService]
})
export class CommonComponentsModule {
  constructor() { }
}
