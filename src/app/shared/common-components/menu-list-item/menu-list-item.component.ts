import { Component, HostBinding, Input, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { NavItem } from '../../../core/classes/navItem.class';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NavService } from '../nav.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NgProgress } from 'ngx-progressbar';
import { PreviousRouteService } from 'src/app/core/previous-route/previous-route.service';



@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition('expanded <=> collapsed',
        animate('400ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class MenuListItemComponent implements OnInit, OnDestroy {
  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: NavItem;
  @Input() depth: number;

  _unsubscribeAll: Subject<any>;

  constructor(public navService: NavService,
    public previousRouteService: PreviousRouteService,
    public ngProgress: NgProgress,
    public router: Router) {

    if (this.depth === undefined) {
      this.depth = 0;
    }
    this._unsubscribeAll = new Subject<any>();
  }

  ngOnInit() {
    this.navService.currentUrl.pipe(takeUntil(this._unsubscribeAll)).subscribe((url: string) => {
      if (this.item.route && url) {
        this.expanded = url.indexOf(`/${this.item.route}`) === 0;
        this.ariaExpanded = this.expanded;
        this.ngProgress.done();
      }
    });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  onItemSelected(item: NavItem) {
    if (!item.children || !item.children.length) {
      let currentUrl = '';
      let itemUrl = '';
      this.previousRouteService.getCurrentUrl().split('/').map((item) => {
        currentUrl += item.trim().toLowerCase();
      });
      item.route.split('/').map((item) => {
        itemUrl += item.trim().toLowerCase();
      });
      if (currentUrl !== itemUrl) {
        this.ngProgress.start();
      }
      this.router.navigate([item.route]);
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }
}

