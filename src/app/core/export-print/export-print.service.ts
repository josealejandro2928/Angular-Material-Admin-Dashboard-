import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExportPrintService {

  constructor() {
  }

  public print(domId): void {
    setTimeout(() => {
      const divToPrint = document.getElementById(domId);
      const newWin = window.open('');
      newWin.document.write(divToPrint.outerHTML);
      newWin.print();
      newWin.close();
    });
  }
}
