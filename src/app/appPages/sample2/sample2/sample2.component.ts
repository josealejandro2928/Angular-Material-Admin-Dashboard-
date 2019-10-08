import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/backend/layout/breadcrumd/service/breadcrumb.service';

@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.scss']
})
export class Sample2Component implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit() {
    this.breadcrumbService.clearBreadcrumd();
    this.breadcrumbService.setBreadcrumd('SAMPLE1', true);
  }

}
