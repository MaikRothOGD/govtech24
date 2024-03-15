import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgForOf, NgIf} from "@angular/common";
import {DatasetService} from "./dataset.service";
import {DatasetServiceService} from "./dataset-service.service";
import {catchError, of} from "rxjs";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  results: any;

  query: string;
  loading: boolean;

  constructor(private datasetService: DatasetService){
    this.query = this.extractQueryString(window.location.search);
    this.loading = true;
    // @ts-ignore
    document.getElementById("ogdch_search").value = this.query.replaceAll("+", " ");
    this.datasetService.getDataset(this.query)
      .pipe(
        catchError(err => of({
            result: {
              count: 0,
              results: []
            }
        }))
      )
      .subscribe(
        result => {
          this.results = result;
          this.loading = false;
        }
      );
  }

  private extractQueryString(url: string):string  {
    const queryString = url.split("?")[1]; // Get everything after the "?" character
    if (!queryString) {
      return ''; // No query string found
    }

    const keyValuePairs = queryString.split("&");
    for (const pair of keyValuePairs) {
      const [key, value] = pair.split("=");
      if (key === "q") {
        return decodeURIComponent(value);
      }
    }

    return '';
  }

}
