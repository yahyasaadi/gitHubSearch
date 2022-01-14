import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { 
    // this.getUsers();
  }

  url = "https://api.github.com/users"
  getUsers(){
    return this.http.get(this.url).subscribe(data=>{
      console.log(data)
    })
  }
}
