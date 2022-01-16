import { Component, OnInit } from '@angular/core';
import { SearchService } from '../sevices/search.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private searchService:SearchService) {}

  ngOnInit(): void {
    this.getMyGit();
  }

  public username:any;
  public followers:any;
  public following:any;
  public repositories:any;
  public image:any;
  public name:any;

  getMyGit(){
    return this.searchService.getMyData().subscribe(data=>{
      console.log(data);
      this.username = data.login;
      this.followers = data.followers;
      this.following = data.following;
      this.repositories = data.public_repos;
      this.image = data.avatar_url;
      this.name = data.name;
    })
  }

}
