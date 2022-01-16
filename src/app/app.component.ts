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

  public username:any;
  public followers:any;
  public following:any;
  public repositories:any;

  getMyGit(){
    return this.searchService.getMyData().subscribe(data=>{
      console.log(data);
      this.username = data.login;
      this.followers = data.followers;
      this.following = data.following;
      this.repositories = data.public_repos;
    })
  }
}
