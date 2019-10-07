
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
import { MatDialog, MatDialogRef } from '@angular/material';
import { MatSidenav } from '@angular/material';
import { NgProgress } from 'ngx-progressbar';
import { fuseAnimations } from 'src/app/core/animations';
import { ThemeConfigurationService } from 'src/app/theme-configuration.service';
import { ShowToastrService } from 'src/app/core/ShowToastr/show-toastr.service';
import { NavigationService } from 'src/app/core/navigation/navigation.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None
})

export class LayoutComponent implements OnInit, OnDestroy {
  activeNavContract = false;
  applyStyle = false;
  innerWidth: any;
  previousUrl = '';
  currentUrl = '';
  loggedInUser: IUser;
  userUrl = environment.apiUrl;
  loadingTransactions = false;
  loadingAvailability = false;
  loadingVehicles = false;
  loadingAgencies = false;
  loadingOffices = false;
  loadingContracts = false;
  loadingUsers = false;
  loadingReservations = false;
  loadingCalendar = false;
  loadingReporte = false;
  loadingContractsProveedor = false;
  loadingContractsAgencia = false;
  loadingBuscar = false;
  separator = '/';
  isHandset = false;
  navBarQuerySubscription: Subscription;
  navRouterSubscription: Subscription;
  userUpdated: Subscription;
  routeChange: Subscription;
  isSmallDevice: boolean;
  arrayOfThemes: Theme[] = [];

  @ViewChild('drawer')
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
    private showToastr: ShowToastrService,
    private themeConfigService: ThemeConfigurationService
  ) {
    this.loggedInUser = loggedInUserService.getLoggedInUser();
    this.arrayOfThemes = this.themeConfigService.getArrayThemes();
    this.navigationData = this.navigationService.getNavArray();

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
        // console.log(this.currentUrl);
        if (this.currentUrl === '/backend/contracts/agencia' || this.currentUrl === '/backend/contracts/proveedor') {
          this.activeNavContract = true;
        }
        if (this.currentUrl === '/backend/buscar') {
          this.isHandset = true;
        } else {
          if (!this.isSmallDevice) {
            this.isHandset = false;

          }

        }
      }
    });
  }

  sideNavToggle(itemMenu) {
    switch (itemMenu) {
      case 'loadingAvailability':
        if (true) {
          this.ngProgress.start();
          this.loadingAvailability = true;
          this.activeNavContract = false;
        }
        break;
      case 'loadingVehicles':
        if (true) {
          this.ngProgress.start();
          this.loadingVehicles = true;
          this.activeNavContract = false;
        }
        break;
      case 'loadingAgencies':
        if (true) {
          this.ngProgress.start();
          this.loadingAgencies = true;
          this.activeNavContract = false;
        }
        break;
      case 'loadingOffices':
        if (true) {
          this.ngProgress.start();
          this.loadingOffices = true;
          this.activeNavContract = false;
        }
        break;
      case 'loadingContracts':
        if (true) {
          this.ngProgress.start();
          this.loadingContracts = true;
        }
        break;
      case 'loadingContractsProveedor':
        if (true) {
          this.ngProgress.start();
          this.loadingContractsProveedor = true;
        }
        break;
      case 'loadingContractsAgencia':
        if (true) {
          this.ngProgress.start();
          this.loadingContractsAgencia = true;
        }
        break;

      case 'loadingUsers':
        if (true) {
          this.ngProgress.start();
          this.loadingUsers = true;
          this.activeNavContract = false;
        }
        break;

      case 'loadingReservations':
        if (true) {
          this.ngProgress.start();
          this.loadingReservations = true;
          this.activeNavContract = false;
        }
        break;

      case 'loadingBuscar':
        if (true) {
          this.ngProgress.start();
          this.loadingBuscar = true;
          this.activeNavContract = false;
        }
        break;

      case 'loadingCalendar':
        if (true) {
          this.ngProgress.start();
          this.loadingCalendar = true;
          this.activeNavContract = false;
        }
        break;
      case 'loadingReporte':
        if (true) {
          this.ngProgress.start();
          this.loadingReporte = true;
          this.activeNavContract = false;
        }
        break;
      default:
        this.loadingReservations = false;
        this.loadingUsers = false;
        this.loadingContracts = false;
        this.loadingOffices = false;
        this.loadingAgencies = false;
        this.loadingVehicles = false;
        this.loadingTransactions = false;
        this.loadingCalendar = false;
        this.loadingAvailability = false;
        this.loadingReporte = false;
        this.activeNavContract = false;
        this.loadingBuscar = false;
        this.loadingContractsAgencia = false;
        this.loadingContractsProveedor = false;
        break;
    }
    this.innerWidth = window.innerWidth;
  }


  UpdateRouteChange(): void {
    const dataTime = setTimeout(() => {
      this.loadingReservations = false;
      this.loadingUsers = false;
      this.loadingContracts = false;
      this.loadingOffices = false;
      this.loadingAgencies = false;
      this.loadingVehicles = false;
      this.loadingTransactions = false;
      this.loadingCalendar = false;
      this.loadingReporte = false;
      this.loadingContractsProveedor = false;
      this.loadingContractsAgencia = false;
      this.loadingBuscar = false;
      this.loadingAvailability = false;
      clearTimeout(dataTime);
    });

  }



  logout(): void {
    this.sideNavToggle(null);
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
      console.log("TCL: LayoutComponent -> ngOnInit -> this.loggedInUser", this.loggedInUser);
      this.themeConfigService.selectedTheme = this.arrayOfThemes[0];
      document.getElementById('BodyAppClass').className = this.themeConfigService.selectedTheme.className;
    });

    // this.routeChange = this.userService.routeChange$.subscribe((result: boolean) => {
    //   this.UpdateRouteChange();
    //   if (this.isHandset && this.sidenav && this.sidenav.opened) {
    //     const TimeCloseSid = setTimeout(() => {
    //       this.sidenav.close();
    //       clearTimeout(TimeCloseSid);
    //     }, 5);
    //   }
    // });

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


  /////////////// Contract Navigation //////////////////
  toogleContractNav(): void {
    this.activeNavContract = (this.activeNavContract) ? false : true;
  }

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


}
