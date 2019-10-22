import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { TranslateModule } from '@ngx-translate/core';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
// import { ThemeCommonModulesModule } from 'src/app/shared/theme-common-modules/theme-common-modules.module';
import { NavService } from './nav.service';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';

// --------MATERIAL MODULES------- //
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
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    TranslateModule,
    NgxMaskModule.forRoot(),
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
    MatTabsModule,
    MatListModule,
    MatDividerModule

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
