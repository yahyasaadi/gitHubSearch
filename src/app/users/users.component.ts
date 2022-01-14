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
  }

  getData(){
    return this.searchService.getUsers().subscribe(data =>{
      console.log(data)
    })
  }

}
