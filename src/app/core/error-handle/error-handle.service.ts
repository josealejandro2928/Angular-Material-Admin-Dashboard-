import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandleService {

  constructor(private toastr: ToastrService) {
  }

  errorHouseHandle(error) {
    console.log(error);
    this.toastr.error(error.message, error.key, {
      timeOut: 5000,
      progressBar: true,
      positionClass: 'toast-bottom-right'
    });
  }

  arrayErrorHouseHandle(error) {
    console.log(error);
    this.toastr.error(error.errors[0].title, 'Error', {
      timeOut: 5000,
      progressBar: true,
      positionClass: 'toast-bottom-right'
    });
  }
}
