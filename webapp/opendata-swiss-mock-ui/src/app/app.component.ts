import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgForOf, NgIf} from "@angular/common";
import {DatasetService} from "./dataset.service";
import {DatasetServiceService} from "./dataset-service.service";


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

  constructor(private datasetService: DatasetServiceService){
    this.query = this.extractQueryString(window.location.search);
    // @ts-ignore
    document.getElementById("ogdch_search").value = this.query.replaceAll("+", " ");
    this.datasetService.getDataset(this.query)
      .subscribe(
        result => (this.results = result)
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
