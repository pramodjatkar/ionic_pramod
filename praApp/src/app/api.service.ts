import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }

  GetUsers()
  {
    return this.http.get("https://reqres.in/api/users?page=0&per_page=12");
    
  }
}
