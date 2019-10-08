import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IBreadcrumdItem } from '../class/breadcrumd-item.class';
@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  breadcrumbUpdated$: Subject<any>;
  activeRoute: string;
  breadcrumdList: IBreadcrumdItem[];

  constructor() {
    this.breadcrumbUpdated$ = new Subject<any>();
  }

  setBreadcrumd(text: string, isLast: boolean, link?: string) {
    const item = {
      text: text,
      isLast: isLast,
      link: link ? link : null
    };
    this.breadcrumdList.push(item);
    this.breadcrumbUpdated$.next(this.breadcrumdList);
  }

  clearBreadcrumd() {
    this.breadcrumdList = [];
  }

}
