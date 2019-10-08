import { Injectable, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable()
export class PreviousRouteService implements OnDestroy {

  private previousUrl: string;
  private currentUrl: string;
  _unsubscribeAll: Subject<any>;

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
    this._unsubscribeAll = new Subject<any>();
    router.events.pipe(takeUntil(this._unsubscribeAll)).subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      }
    });
  }

  ngOnDestroy() {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  public getPreviousUrl() {
    return this.previousUrl + '';
  }

  public getCurrentUrl() {
    return this.currentUrl + '';
  }

}
