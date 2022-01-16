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
  public profilePic:any;
  public gitHubPage:any;
  public type:any;

  users!:any[]


  getData(){
    return this.searchService.getUsers(this.username).subscribe(data =>{
      console.log(data)
      this.username = data.login;
      this.profilePic = data.avatar_url
      this.gitHubPage = data.html_url
      this.type = data.type

      
    })
  }

}
