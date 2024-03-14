import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import {DatasetServiceService} from "./dataset-service.service";
import {switchMap} from "rxjs";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  search: any;

  results: any;

  constructor(private datasetService: DatasetServiceService){
    let query = this.extractQueryString(window.location.search);
    this.search = query;
    this.datasetService.getDataset(query)
      .subscribe(
        result => (this.results = result) && console.log(result)
      );
  }

  private extractQueryString(url: string):string  {
    const queryString = url.split("?")[1]; // Get everything after the "?" character
    if (!queryString) {
      return ''; // No query string found
    }

    const keyValuePairs = queryString.split("&"); // Split by "&" to get individual key-value pairs
    for (const pair of keyValuePairs) {
      const [key, value] = pair.split("="); // Split each pair by "="
      if (key === "q") {
        return decodeURIComponent(value); // Return the decoded value after "q="
      }
    }

    return ''; // If "q=" is not found
  }

}
