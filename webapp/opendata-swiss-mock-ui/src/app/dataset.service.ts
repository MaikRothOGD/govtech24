import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClientModule, HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  private apiUrl = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) {}

  public getDataset(query: any): Observable<any> {
    if (query.toLowerCase().indexOf('hypothek') > -1){
      return of({
        result: {
          count: 0,
          results: []
        }
      })
    }
   return this.http.get(`${this.apiUrl}/${query}`);
  }
}
