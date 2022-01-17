import { Component, OnInit } from '@angular/core';
import { SearchService } from '../sevices/search.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private searchService:SearchService) {}


  ngOnInit(): void {
    this.getData();
  }

  public username = '';
  public name:any;
  public profilePic:any;
  public followers:any;
  public following:any;
  public repositories:any;

  users!:any[]


  getData(){
    return this.searchService.getUsers(this.username).subscribe(data =>{
      console.log(data)
      this.name = data.name;
      this.profilePic = data.avatar_url;
      this.followers = data.followers;
      this.following = data.following;
      this.repositories = data.public_repos;
    })
  }

}
