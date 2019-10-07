import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './authentication/authentication.service';
import { LoggedInUserService } from './loggedInUser/logged-in-user.service';
import { TokenInterceptorService } from './authentication/token-interceptor.service';
import { UtilsService } from './utils/utils.service';
import { ExportExcelService } from './export-excel/export-excel.service';
import { BreadcrumbService } from '../backend/layout/breadcrumd/service/breadcrumb.service';
import { ExportPrintService } from './export-print/export-print.service';
import { ErrorInterceptorService } from './interceptors/error-interceptor.service';
import { ShowToastrService } from './ShowToastr/show-toastr.service';
import { ErrorHandleService } from './error-handle/error-handle.service';
import { PreviousRouteService } from './previous-route/previous-route.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationService,
    LoggedInUserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
    UtilsService,
    ErrorHandleService,
    ExportExcelService,
    BreadcrumbService,
    ExportPrintService,
    ShowToastrService,
    PreviousRouteService
  ]
})
export class CoreModule {
}
