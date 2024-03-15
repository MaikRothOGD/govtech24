import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  private apiUrl = 'https://localhost:5000';

  constructor(private http: HttpClient) {}

  public getDataset(query: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/${query}`);
  }
}
