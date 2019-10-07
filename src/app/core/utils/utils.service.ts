import { Injectable } from '@angular/core';
import { formatNumber, parseNumber, isValidNumber } from 'libphonenumber-js';
@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor() {
  }

  toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  validatePhone(cellphone) {
    if ((cellphone.length !== 8) || (cellphone[0] !== '5') || isNaN(Number(cellphone))) {
      return false;
    } else {
      return true;
    }
  }
  formatPhone(cellphone): String {
    if (cellphone && this.validatePhone(cellphone)) {
      return formatNumber(parseNumber(cellphone, 'CU'), 'National');
    } else if (cellphone && isValidNumber(cellphone, 'US')) {
      return formatNumber(parseNumber(cellphone, 'US'), 'National');
    } else {
      return cellphone;
    }
  }

  formatDate(date) {
    const monthNames = [
      'January', 'February', 'March',
      'April', 'May', 'June', 'July',
      'August', 'September', 'October',
      'November', 'December'
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }










}
