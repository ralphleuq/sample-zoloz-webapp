import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ZolozService {
  constructor(
    private httpClient: HttpClient
  ) {}

  initialize(backend: string): Observable<any> {
    const params = new HttpParams();
    return this.httpClient
      .get<any>(
        backend + "/ekyc/api/realid/h5initialize",
      );
  }
}
