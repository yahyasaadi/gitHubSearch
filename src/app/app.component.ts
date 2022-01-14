import { Component } from '@angular/core';
import { SearchService } from './sevices/search.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHubSearch';

  // create constructor
  constructor(private searchService:SearchService) {
    this.searchService.getUsers()
  }
}
