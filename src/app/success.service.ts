import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SuccessService {
  private registerApi = 'http://localhost:3000/webapi/successUser';
user
  constructor(private http:HttpClient) { }
  public successUser(data){
		console.log("sucess service "+data);
    this.user = this.http.post<any>(this.registerApi,data);
console.log(this.user);
    return this.user;
  }
}
