import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/backend/layout/breadcrumd/service/breadcrumb.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService) {

  }

  ngOnInit() {
    this.breadcrumbService.clearBreadcrumd();
    this.breadcrumbService.setBreadcrumd('SAMPLE', true);
  }

}
