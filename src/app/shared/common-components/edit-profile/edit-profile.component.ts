import { IUser } from '../../../core/classes/user.class';;
import { ShowToastrService } from '../../../core/ShowToastr/show-toastr.service';
import { LoggedInUserService } from '../../../core/loggedInUser/logged-in-user.service';
import { Component, Inject, HostListener, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UrlImageService } from '../../../core/image-url/url-image.service';
import { UtilsService } from 'src/app/core/utils/utils.service';




@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditProfileComponent implements OnInit {
  innerWidth: any;
  applyStyle = false;
  urlImage: any = '';
  loggedInUser: IUser;
  passwordType = 'password';


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditProfileComponent>,
    private urlImageService: UrlImageService,
    private loggedInUserService: LoggedInUserService,
    private showToastr: ShowToastrService,
    public utilsService: UtilsService) {
    this.urlImage = this.urlImageService.getUrlImage();
    this.dialogRef.disableClose = true;
    this.loggedInUser = this.loggedInUserService.getLoggedInUser();
  }




  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth > 600) {
      this.applyStyle = false;
    } else {
      this.applyStyle = true;
    }
  }

  ngOnInit(): void {


  }

  ngOnDestroy(): void {

  }

}
