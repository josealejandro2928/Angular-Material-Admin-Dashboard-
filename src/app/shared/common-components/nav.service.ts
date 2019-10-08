import { EventEmitter, Injectable, OnDestroy } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable()
export class NavService implements OnDestroy {
  public appDrawer: any;
  public currentUrl = new BehaviorSubject<string>(undefined);
  _unsubscribeAll: Subject<any>;
  currentUrlNav = '';
  lastUrlNav = '';

  constructor(private router: Router) {
    this._unsubscribeAll = new Subject<any>();

    this.router.events.pipe(takeUntil(this._unsubscribeAll)).subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.lastUrlNav = this.currentUrlNav + '';
        this.currentUrlNav = event.urlAfterRedirects + '';
        this.currentUrl.next(event.urlAfterRedirects);
      }
    });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  public closeNav() {
    this.appDrawer.toggle();
  }

  public openNav() {
    this.appDrawer.open();
  }
}
