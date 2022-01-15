import { Component, OnInit } from '@angular/core';
import { SearchService } from '../sevices/search.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private searchService:SearchService) {
    // this.searchService.getUsers();
  }

  ngOnInit(): void {
    this.getData();
    this.searchUser();
  }

  public username:any;
  public profilePic:any;
  public gitHubPage:any;
  public type:any;

  users!:any[]

  getData(){
    return this.searchService.getUsers().subscribe(data =>{
      console.log(data)
      this.users = data;
    })
  }

  searchUser(){
    for (let i = 0; i < this.users.length; i++) {
      if (this.username == this.users[i].login) {
        // console.log(this.users[i])
        this.username = this.users[i].login;
        this.profilePic = this.users[i].avatar_url
        this.gitHubPage = this.users[i].html_url
        this.type = this.users[i].type
      }
    }
    
  }

}
