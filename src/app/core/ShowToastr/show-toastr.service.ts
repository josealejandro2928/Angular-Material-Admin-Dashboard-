import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ShowToastrService {

  constructor(private toastr: ToastrService) {

  }

  showError(error, secundary?, timeout?) {
    timeout = (timeout) ? timeout : 5000;
    secundary = (secundary) ? secundary : '';

    this.toastr.error(
      error,
      secundary,
      {
        timeOut: timeout,
        progressBar: true,
        positionClass: 'toast-bottom-right'
      }
    );

  }

  showSucces(msj, secundary?, timeout?) {
    timeout = (timeout) ? timeout : 5000;
    secundary = (secundary) ? secundary : '';

    this.toastr.success(
      msj,
      secundary,
      {
        timeOut: timeout,
        progressBar: true,
        positionClass: 'toast-bottom-right'
      }
    );

  }

  showInfo(msj, secundary?, timeout?) {
    timeout = (timeout) ? timeout : 5000;
    secundary = (secundary) ? secundary : '';

    this.toastr.info(
      msj,
      secundary,
      {
        timeOut: timeout,
        progressBar: true,
        positionClass: 'toast-bottom-right'
      }
    );

  }


}
