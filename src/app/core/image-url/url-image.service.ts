import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UrlImageService {
  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
    this.url = this.url.substring(0, this.url.length - 1);
  }

  getUrlImage() {
    return this.url;
  }

  getImage(imageUrl: string): Observable<Blob> {
    return this.httpClient.get(imageUrl, { responseType: 'blob' });
  }

}
