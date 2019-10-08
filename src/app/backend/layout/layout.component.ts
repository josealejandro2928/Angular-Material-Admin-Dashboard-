
import { Theme } from './../../theme-configuration.service';
import { PanelNotificationsComponent } from './panel-notifications/panel-notifications.component';
import { Component, ViewChild, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoggedInUserService } from '../../core/loggedInUser/logged-in-user.service';
import { IUser } from '../../core/classes/user.class';
import { AuthenticationService } from '../../core/authentication/authentication.service';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from '../../../environments/environment';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { NgProgress } from 'ngx-progressbar';
import { fuseAnimations } from 'src/app/core/animations';
import { ThemeConfigurationService } from 'src/app/theme-configuration.service';
import { ShowToastrService } from 'src/app/core/ShowToastr/show-toastr.service';
import { NavigationService } from 'src/app/core/navigation/navigation.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None
})

export class LayoutComponent implements OnInit, OnDestroy {
  applyStyle = false;
  innerWidth: any;
  previousUrl = '';
  currentUrl = '';
  loggedInUser: IUser;
  userUrl = environment.apiUrl;
  separator = '/';
  isHandset = false;
  navBarQuerySubscription: Subscription;
  navRouterSubscription: Subscription;
  userUpdated: Subscription;
  routeChange: Subscription;
  isSmallDevice: boolean;
  arrayOfThemes: Theme[] = [];
  language: string;

  @ViewChild('drawer', { static: true })
  public sidenav: MatSidenav;
  navigationData: any[] = [];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    public dialog: MatDialog,
    public ngProgress: NgProgress,
    private navigationService: NavigationService,
    public authService: AuthenticationService,
    private loggedInUserService: LoggedInUserService,
    private translate: TranslateService,
    private showToastr: ShowToastrService,
    private themeConfigService: ThemeConfigurationService
  ) {
    this.loggedInUser = loggedInUserService.getLoggedInUser();
    this.arrayOfThemes = this.themeConfigService.getArrayThemes();
    this.navigationData = this.navigationService.getNavArray();
    translate.setDefaultLang('en');
    this.language = translate.getBrowserLang();
    translate.use(this.language.match(/en|es/) ? this.language : 'en');

    this.navBarQuerySubscription = this.breakpointObserver.observe([Breakpoints.Medium, Breakpoints.Handset, Breakpoints.XSmall,
    Breakpoints.Small, Breakpoints.Tablet]).subscribe(data => {
      this.isHandset = data.matches;
      this.isSmallDevice = data.matches;
      if (this.currentUrl === '/backend/buscar') {
        this.isHandset = true;
      }
    });

    this.navRouterSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
        if (this.currentUrl === '/backend/buscar') {
          this.isHandset = true;
        } else {
          if (!this.isSmallDevice) {
            this.isHandset = false;
          }
        }
        if (this.isHandset && this.sidenav && this.sidenav.opened) {
          const TimeCloseSid = setTimeout(() => {
            this.sidenav.close();
            clearTimeout(TimeCloseSid);
          }, 200);
        }
      }
    });

  }

  logout(): void {
    this.removeCookies();
    localStorage.removeItem('user');
    this.loggedInUserService.setLoggedInUser(null);
    localStorage.clear();
    this.router.navigate(['authentication']);
  }

  removeCookies() {
    const res = document.cookie;
    const multiple = res.split(';');
    for (let i = 0; i < multiple.length; i++) {
      const key = multiple[i].split('=');
      document.cookie = key[0] + ' =; expires = Thu, 01 Jan 1970 00:00:00 UTC';
    }
  }

  onEditUser(): void {

  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth > 600) {
      this.applyStyle = false;
    } else {
      this.applyStyle = true;
    }

    this.userUpdated = this.loggedInUserService.loggedInUserUpdated.subscribe(data => {
      this.loggedInUser = this.loggedInUserService.getLoggedInUser();
      this.themeConfigService.selectedTheme = this.arrayOfThemes[0];
      document.getElementById('BodyAppClass').className = this.themeConfigService.selectedTheme.className;
    });

  }

  ngOnDestroy(): void {
    if (this.navBarQuerySubscription) {
      this.navBarQuerySubscription.unsubscribe();
    }
    if (this.navRouterSubscription) {
      this.navRouterSubscription.unsubscribe();
    }
    if (this.routeChange) {
      this.routeChange.unsubscribe();
    }
    if (this.userUpdated) {
      this.userUpdated.unsubscribe();
    }

  }


  /////////////// View Notifications //////////////////
  onViewNotifications(): void {
    let dialogRef: MatDialogRef<PanelNotificationsComponent, any>;
    dialogRef = this.dialog.open(PanelNotificationsComponent, {
      panelClass: 'app-panel-notifications',
      maxWidth: '100vw',
      maxHeight: '100vh',
      data: {

      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // this.onRefreshData();
      }
    });

  }

  ///////THeming Changes /////
  onChangeTheme(theme: Theme): void {
    document.getElementById('BodyAppClass').className = theme.className;
  }

  //////Change Lenguaje///////////

  onSwitchLanguage(language: string) {
    this.translate.use(language);
    this.language = language;
  }


}
