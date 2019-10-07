import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IBreadcrumdItem} from '../class/breadcrumd-item.class';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  readonly breadcrumbUpdated$: BehaviorSubject<IBreadcrumdItem[]> = new BehaviorSubject<IBreadcrumdItem[]>([]);
  activeRoute: string;
  breadcrumdList: IBreadcrumdItem[];

  constructor() {
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
