import { Component } from '@angular/core';
import { SearchService } from './sevices/search.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHubSearch';

  constructor(private searchService:SearchService){
    this.getMyGit();
  }

  getMyGit(){
    return this.searchService.getMyData().subscribe(data=>{
      console.log(data);
    })
  }
}
