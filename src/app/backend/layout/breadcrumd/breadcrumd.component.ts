import {Component, Input, OnInit} from '@angular/core';
import {IBreadcrumdItem} from './class/breadcrumd-item.class';
import {BreadcrumbService} from './service/breadcrumb.service';
import {Router} from '@angular/router';
import {NgProgress} from 'ngx-progressbar';

@Component({
  selector: 'app-breadcrumd',
  templateUrl: './breadcrumd.component.html',
  styleUrls: ['./breadcrumd.component.scss']
})
export class BreadcrumdComponent implements OnInit {
  @Input() separator: string;
  breadcrumdList: IBreadcrumdItem[];

  constructor(private breadcrumbService: BreadcrumbService,
              public ngProgress: NgProgress,
              private router: Router
  ) {
    this.breadcrumbService.breadcrumbUpdated$.subscribe((data: IBreadcrumdItem[]) => {
      this.breadcrumdList = data;
    });
  }

  ngOnInit() {
  }

  goToLink(breadcrumd: IBreadcrumdItem) {
    if (breadcrumd.link) {
      this.ngProgress.start();
      this.router.navigate([breadcrumd.link]);
    }
  }

}
