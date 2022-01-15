import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { 
    // this.getUsers();
  }

  public username:any;
  
  getUsers(){
    let url = "https://api.github.com/users"
    return this.http.get<any>(url); 
    // + ':'+this.username
  }
}
