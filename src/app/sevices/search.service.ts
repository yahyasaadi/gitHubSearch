import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) {}
  
  // Get any user
  getUsers(username:any){
    let url = "https://api.github.com/users/" + username;
    return this.http.get<any>(url);
  }

  // My GitHub Data
  getMyData(){
    let url = "https://api.github.com/users/yahyasaadi";
    return this.http.get<any>(url);
  }

}
