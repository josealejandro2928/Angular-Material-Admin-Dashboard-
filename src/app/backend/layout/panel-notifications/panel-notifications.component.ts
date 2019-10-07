import { IUser } from '../../../core/classes/user.class';;
import { ShowToastrService } from '../../../core/ShowToastr/show-toastr.service';
import { LoggedInUserService } from '../../../core/loggedInUser/logged-in-user.service';
import { Component, Inject, HostListener, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatStepper, MatDialogRef } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UrlImageService } from '../../../core/image-url/url-image.service';




@Component({
  selector: 'app-panel-notifications',
  templateUrl: './panel-notifications.component.html',
  styleUrls: ['./panel-notifications.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PanelNotificationsComponent implements OnInit {
  innerWidth: any;
  applyStyle = false;
  urlImage: any = '';
  loggedInUser: IUser;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<PanelNotificationsComponent>,
    private urlImageService: UrlImageService,
    private loggedInUserService: LoggedInUserService,
    private showToastr: ShowToastrService) {
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
